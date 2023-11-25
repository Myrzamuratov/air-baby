import axios from "axios";
import { API, getTokens } from "../helpers/const";
import React, { createContext, useContext } from "react";
import Modal from "react-modal"; // Import the modal library

export const FormContext = createContext();
export const useForm = () => useContext(FormContext);

const FormContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalError, setModalError] = React.useState("");
  const [modalSuccess, setModalSuccess] = React.useState("");

  const getErrorMessage = (error) => {
    if (error.response && error.response.data && error.response.data.detail) {
      return error.response.data.detail;
    } else if (error.message) {
      return error.message;
    } else {
      return "An error occurred.";
    }
  };

  async function createSurrogacyApplication(formData) {
    try {
      await axios.post(
        `${API}surrogacy/create-application/`,
        formData,
        getTokens()
      );
      console.log("success");
      setModalSuccess("Surrogacy application created successfully!");
      openModalSuccess();
    } catch (error) {
      console.log(error);
      setModalError(
        `Failed to create surrogacy application. ${getErrorMessage(error)}`
      );
      openModalError();
    }
  }

  async function createDonnorApplication(formData) {
    try {
      const res = await axios.post(
        `${API}donor/create/`,
        formData,
        getTokens()
      );
      console.log(res);
      setModalSuccess("Donor application created successfully!");
      openModalSuccess();
    } catch (error) {
      console.log(error);
      setModalError(
        `Failed to create donor application. ${getErrorMessage(error)}`
      );
      openModalError();
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
