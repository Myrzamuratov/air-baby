import axios from "axios";
import { API, getTokens } from "../helpers/const";
import React, { createContext, useContext, useState } from "react";
import Modal from "react-modal"; // Import the modal library
import { useAuth } from "./AuthContextProvider";

export const FormContext = createContext();
export const useForm = () => useContext(FormContext);

const FormContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalError, setModalError] = React.useState("");
  const [modalSuccess, setModalSuccess] = React.useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const getErrorMessage = (error) => {
    if (error) {
      if (typeof error === "string") {
        return error;
      } else if (typeof error === "object") {
        let errorMessage = "An error occurred.";

        // Проход по всем ключам объекта и добавление их значений к errorMessage
        for (const key in error) {
          if (error.hasOwnProperty(key)) {
            errorMessage += `\n${key}: ${error[key]}`;
          }
        }

        return errorMessage;
      }
    }

    return "An error occurred.";
  };

  async function createSurrogacyApplication(formData) {
    setLoading(true);
    if (!currentUser) {
      setModalError("Unauthorized");
      openModalError();
      setLoading(false);
      return;
    }
    try {
      await axios.post(
        `${API}surrogacy/create-application/`,
        formData,
        getTokens()
      );
      setModalSuccess("Surrogacy application created successfully!");
      openModalSuccess();
    } catch (error) {
      setModalError(
        `Failed to create surrogacy application. ${getErrorMessage(
          error.response.data
        )}`
      );
      openModalError();
    } finally {
      setLoading(false);
    }
  }

  async function createDonnorApplication(formData) {
    setLoading(true);
    if (!currentUser) {
      setModalError("Unauthorized");
      openModalError();
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(
        `${API}donor/create/`,
        formData,
        getTokens()
      );
      setModalSuccess("Donor application created successfully!");
      openModalSuccess();
    } catch (error) {
      setModalError(
        `Failed to create donor application. ${getErrorMessage(
          error.response.data
        )}`
      );
      console.log(error);
      openModalError();
    } finally {
      setLoading(false);
    }
  }
  const [myDonorApp, setMyDonorApp] = useState();

  async function getOneDonorApp(id) {
    try {
      const res = await axios.get(`${API}donor/detail/${id}/`, getTokens());
      setMyDonorApp((prevDonorApp) => {
        return res.data;
      });
    } catch (error) {
      setModalError(
        `Failed to create donor application. ${getErrorMessage(
          error.response.data
        )}`
      );
    }
  }
  const [mySurrogacyApp, setSurrogacyApp] = useState();

  async function getOneSurrogacyApp(id) {
    try {
      const res = await axios.get(
        `${API}surrogacy/my_application/`,
        getTokens()
      );

      if (Array.isArray(res.data) && res.data.length > 0) {
        setSurrogacyApp((prevDonorApp) => res.data[0]);
      } else if (!Array.isArray(res.data)) {
        setSurrogacyApp((prevDonorApp) => res.data);
      } else {
        setSurrogacyApp(null);
      }
    } catch (error) {
      setModalError(
        `Failed to create surrogacy application. ${getErrorMessage(
          error.response.data
        )}`
      );
    }
  }

  const [donorList, setDonorList] = useState();

  async function donorListForAlowwed() {
    try {
      const res = await axios.get(`${API}donor/list-for-allowed/`, getTokens());
      setDonorList(res.data);
    } catch (error) {
      setModalError(
        `Failed to create surrogacy application. ${getErrorMessage(
          error.response.data
        )}`
      );
    }
  }

  const openModalError = () => {
    setModalIsOpen(true);
    setModalSuccess(""); // Clear success message
  };

  const openModalSuccess = () => {
    setModalIsOpen(true);
    setModalError(""); // Clear error message
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalError("");
    setModalSuccess("");
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
    text: {
      marginBottom: "10px",
    },
    button: {
      marginTop: "15px",
    },
  };

  const values = {
    createSurrogacyApplication,
    createDonnorApplication,
    modalIsOpen,
    openModalError,
    openModalSuccess,
    closeModal,
    modalError,
    modalSuccess,
    loading,
    getOneDonorApp,
    myDonorApp,
    getOneSurrogacyApp,
    mySurrogacyApp,
    donorListForAlowwed,
    donorList,
  };

  return (
    <FormContext.Provider value={values}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        {modalError && (
          <>
            <h2 style={modalStyles.text}>Error</h2>
            <p style={modalStyles.text}>{modalError}</p>
          </>
        )}
        {modalSuccess && (
          <>
            <h2 style={modalStyles.text}>Success</h2>
            <p style={modalStyles.text}>{modalSuccess}</p>
          </>
        )}
        <button style={modalStyles.button} onClick={closeModal}>
          Close
        </button>
      </Modal>
    </FormContext.Provider>
  );
};

export default FormContextProvider;
