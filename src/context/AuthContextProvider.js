import React, { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";

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

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [currentUser, setCurrentUser] = useState("");

  async function handleRegister(formData, email) {
    setLoading(true);
    try {
      await axios.post(`${API}account/register/`, formData);
      handleLogin(formData, email);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, email) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}account/login/`, formData);
      console.log(res.data.access);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getUser() {
    try {
      const res = await axios(`${API}account/`);
      res.data.map((user) => {
        if (user.email === currentUser) {
          dispatch({ type: "GET_USER", payload: user });
          console.log(state.users);
        }
      });
    } catch (error) {
      console.log(error);
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
      console.log(error);
      logout();
    } finally {
      setLoading(false);
    }
  }

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
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
