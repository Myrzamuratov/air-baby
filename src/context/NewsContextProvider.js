import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API, getTokens } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal"; // Import the modal library

export const NewsContext = createContext();
export const useNews = () => useContext(NewsContext);

const NewsContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [comments, setComments] = useState([]);
  const [pagination, setPagination] = useState();
  const [oneNew, setOneNew] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [reviewers, setReviewers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalError, setModalError] = useState("");

  const getErrorMessage = (error) => {
    if (error.response && error.response.data && error.response.data.detail) {
      return error.response.data.detail;
    } else if (error.message) {
      return error.message;
    } else {
      return "An error occurred.";
    }
  };

  async function getNews() {
    try {
      const response = await axios.get(`${API}news/`);
      setNews(response.data.results.reverse());
      setPagination(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setModalError(`Failed to fetch news. ${getErrorMessage(error)}`);
      openModal();
    }
  }

  async function addRating(formData, id) {
    try {
      await axios.post(`${API}news/${id}/add_rating/`, formData, getTokens());
      getNews();
      getUserReview(id);
    } catch (error) {
      console.log(error);
      setModalError(`Failed to add rating. ${getErrorMessage(error)}`);
      openModal();
    }
  }

  async function getOneNews(id) {
    try {
      const response = await axios.get(`${API}news/${id}/`);
      setOneNew(response.data);
      navigate(`/oneProduct/${id}`);
      getComments(id);
      getUserReview(id);
    } catch (error) {
      console.log(error);
      setModalError(`Failed to fetch news details. ${getErrorMessage(error)}`);
      openModal();
    }
  }

  async function getComments(id) {
    try {
      const response = await axios.get(
        `${API}news/${id}/get_commenters/`,
        getTokens()
      );
      setComments(response.data);
    } catch (error) {
      console.log(error);
      setModalError(`Failed to fetch comments. ${getErrorMessage(error)}`);
      openModal();
    }
  }

  async function addComment(formData, id) {
    try {
      await axios.post(`${API}news/${id}/add_comment/`, formData, getTokens());
      getComments();
    } catch (error) {
      console.log(error);
      setModalError(`Failed to add comment. ${getErrorMessage(error)}`);
      openModal();
    }
  }

  async function getUserReview(id) {
    try {
      const response = await axios.get(`${API}news/${id}/reviewers`);
      setReviewers(response.data);
    } catch (error) {
      console.log(error);
      setModalError(`Failed to fetch user reviews. ${getErrorMessage(error)}`);
      openModal();
    }
  }

  function addToRecentlyViewed(newsItem) {
    setRecentlyViewed((prevRecentlyViewed) => {
      const isItemInRecentlyViewed = prevRecentlyViewed.some(
        (item) => item.id === newsItem.id
      );

      if (isItemInRecentlyViewed) {
        return prevRecentlyViewed;
      }

      const updatedRecentlyViewed = [
        newsItem,
        ...prevRecentlyViewed.slice(0, 7),
      ];

      localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(updatedRecentlyViewed)
      );

      return updatedRecentlyViewed;
    });
  }

  function getRecentlyViewed() {
    const recentlyViewed = localStorage.getItem("recentlyViewed");
    return recentlyViewed ? JSON.parse(recentlyViewed) : [];
  }

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    setModalError("");
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
    getNews,
    news,
    addRating,
    pagination,
    getOneNews,
    oneNew,
    addToRecentlyViewed,
    recentlyViewed,
    getRecentlyViewed,
    comments,
    reviewers,
    addComment,
    modalIsOpen,
    openModal,
    closeModal,
    modalError,
  };

  useEffect(() => {
    const storedRecentlyViewed = localStorage.getItem("recentlyViewed");
    if (storedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  return (
    <NewsContext.Provider value={values}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Error Modal"
        style={modalStyles}
      >
        <h2 style={modalStyles.text}>Error</h2>
        <p style={modalStyles.text}>{modalError}</p>
        <button style={modalStyles.button} onClick={closeModal}>
          Close
        </button>
      </Modal>
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
