import React, { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { API, getTokens } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal"; // Import the modal library

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const INIT_STATE = { users: [] };

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [currentUser, setCurrentUser] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalError, setModalError] = useState("");
  const [userData, setUserData] = useState();

  const getErrorMessage = (error) => {
    if (error.response && error.response.data && error.response.data.detail) {
      return error.response.data;
    } else if (error.message) {
      return error.message;
    } else {
      return "An error occurred.";
    }
  };

  async function handleRegister(formData, email) {
    setLoading(true);
    try {
      await axios.post(`${API}account/register/`, formData);
      handleLogin(formData, email);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setModalError(`Registration failed. ${errorMessage}`);
      openModal();
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setModalError(`Login failed. ${errorMessage}`);
      openModal();
    } finally {
      setLoading(false);
    }
  }

  async function getUser() {
    try {
      const res = await axios(`${API}account/`, getTokens());
      const allUserData = res.data;

      if (Array.isArray(allUserData) && allUserData.length > 0) {
        const userDataObject = allUserData[0];
        dispatch({ type: "GET_USER", payload: userDataObject });
        setUserData(userDataObject);
        console.log(userDataObject);
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setModalError(`Failed to fetch user data. ${errorMessage}`);
      openModal();
    }
  }

  function logout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser("");
    navigate("/login");
  }

  async function checkAuth() {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));

      const res = await axios.post(`${API}account/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem("tokens", JSON.stringify(res.data));
      const email = localStorage.getItem("email");
      setCurrentUser(email);
    } catch (error) {
      logout();
      setModalError("Session expired. Please log in again.");
      openModal(); // Show modal on error
    } finally {
      setLoading(false);
    }
  }

  const openModal = () => setModalIsOpen(true); // Function to open the modal
  const closeModal = () => {
    setModalIsOpen(false); // Function to close the modal
    setModalError(""); // Reset the error message when closing the modal
  };

  const values = {
    loading,
    handleRegister,
    handleLogin,
    getUser,
    checkAuth,
    logout,
    currentUser,
    users: state.users,
    state,
    modalIsOpen,
    openModal,
    closeModal,
    modalError,
    userData,
  };

  return (
    <authContext.Provider value={values}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Error Modal"
        style={modalStyles}
      >
        <h2>Error</h2>
        <p>{modalError}</p>
        <button
          style={{
            marginTop: "15px",
            backgroundColor: "#0079A1",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
          }}
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </authContext.Provider>
  );
};

export default AuthContextProvider;
