import axios from "axios";
import { API, getTokens } from "../helpers/const";
import React, { createContext, useContext } from "react";

export const FormContext = createContext();
export const useForm = () => useContext(FormContext);
const FormContextProvider = ({ children }) => {
  async function createSurrogacyApplication(formData) {
    try {
      await axios.post(
        `${API}surrogacy/create-application/`,
        formData,
        getTokens()
      );
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  }
  async function createDonnorApplication(formData) {
    try {
      await axios.post(`${API}donor/create/`, formData, getTokens());
      console.log("succes");
    } catch (error) {
      console.log(error);
    }
  }
  const values = { createSurrogacyApplication, createDonnorApplication };
  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
