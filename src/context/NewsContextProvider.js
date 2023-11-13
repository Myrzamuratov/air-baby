// NewsContextProvider.js

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API, getTokens } from "../helpers/const";
import { useNavigate } from "react-router-dom";

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

  async function getNews() {
    try {
      const response = await axios.get(`${API}news/`);
      setNews(response.data.results.reverse());
      setPagination(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addRating(formData, id) {
    try {
      await axios.post(`${API}news/${id}/add_rating/`, formData, getTokens());
      getNews();
      getUserReview(id);
    } catch (error) {
      console.log(error);
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
    }
  }
  async function addComment(formData, id) {
    try {
      await axios.post(`${API}news/${id}/add_comment/`, formData, getTokens());
      getComments();
    } catch (error) {
      console.log(error);
    }
  }
  async function getUserReview(id) {
    try {
      const response = await axios.get(`${API}news/${id}/reviewers`);
      setReviewers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  // Добавление новости в список недавно просмотренных
  function addToRecentlyViewed(newsItem) {
    setRecentlyViewed((prevRecentlyViewed) => {
      // Check if newsItem with the same id already exists
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

  useEffect(() => {
    // Load recentlyViewed from localStorage on component mount
    const storedRecentlyViewed = localStorage.getItem("recentlyViewed");
    if (storedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    }
  }, []);

  useEffect(() => {
    // Save recentlyViewed to localStorage whenever it changes
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

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
  };
  return <NewsContext.Provider value={values}>{children}</NewsContext.Provider>;
};

export default NewsContextProvider;
