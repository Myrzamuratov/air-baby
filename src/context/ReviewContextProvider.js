import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API, getTokens } from "../helpers/const";

export const ReviewContext = createContext();
export const useReview = () => useContext(ReviewContext);

const ReviewContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  async function getReviews() {
    try {
      const res = await axios.get(`${API}review/list-review/`);
      setReviews(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function addReview(formData) {
    try {
      await axios.post(`${API}review/create-review/`, formData, getTokens());
      getReviews();
    } catch (error) {}
  }
  async function deleteReview(id) {
    try {
      await axios.delete(`${API}review/delete-review/${id}/`, getTokens());
      getReviews();
    } catch (error) {}
  }
  async function updateReview(id, formData) {
    try {
      await axios.put(
        `${API}review/update-review/${id}/`,
        formData,
        getTokens()
      );
      getReviews();
    } catch (error) {}
  }
  const values = { getReviews, reviews, addReview, deleteReview, updateReview };

  return (
    <ReviewContext.Provider value={values}>{children}</ReviewContext.Provider>
  );
};

export default ReviewContextProvider;
