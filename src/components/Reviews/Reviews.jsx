import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { useLang } from "../../context/LangContextProvider";
import { useReview } from "../../context/ReviewContextProvider";
import BasicRating from "../../elements/rating/BasicRating";
import ReviewRating from "../../elements/ReviewRating/ReviewRating";
import ReviewsHeader from "../../elements/ReviewsHeader/ReviewsHeader";
import { TextField } from "@mui/material";
import { Button } from "@mui/base";
import { useAuth } from "../../context/AuthContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";

const Reviews = () => {
  const { carousel } = useLang();
  const { getReviews, reviews, addReview, deleteReview, updateReview } =
    useReview();
  const { userData, getUser } = useAuth();
  useEffect(() => {
    getReviews();
    getUser();
  }, []);

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [editingComment, setEditingComment] = useState(null);
  const [editingRating, setEditingRating] = useState(0);

  const handleChangeRatin = (value) => {
    setRating(value);
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("rating", rating);

    if (editingComment !== null) {
      updateReview(editingComment.id, formData);
      setEditingComment(null);
      setEditingRating(0);
    } else {
      addReview(formData);
      // После добавления нового отзыва обновляем список отзывов
      getReviews();
    }

    setComment("");
    setRating(0);
  };

  const handleEditComment = (item) => {
    setEditingComment(item);
    setEditingRating(item.rating);
    setComment(item.comment);
    setRating(item.rating);
  };

  const handleCommentClick = (item) => {
    if (userData && item.user === userData.email) {
      handleEditComment(item);
    }
  };

  const handleInputBlur = () => {
    handleSave();
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <div className="reviews_main">
      <ReviewsHeader />
      <div className="reviews_header">
        <h3>{carousel.ourCustomers}</h3>
      </div>
      <div className="reviews_list">
        {reviews.map((item) => (
          <div className="review_item" key={item.id}>
            {userData && item.user === userData.email ? (
              <>
                <ReviewRating
                  item={item}
                  rating={item.rating}
                  color={"gold"}
                  handleChangeRatin={handleChangeRatin}
                  updateReview={updateReview}
                />
                <h4>{item.user}</h4>
                {editingComment && editingComment.id === item.id ? (
                  <TextField
                    className="review_input_input"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    value={comment}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                  />
                ) : (
                  <p onClick={() => handleCommentClick(item)}>{item.comment}</p>
                )}
                <DeleteIcon
                  onClick={() => deleteReview(item.id)}
                  className="delet_icon"
                />
              </>
            ) : (
              <>
                <ReviewRating
                  item={item}
                  rating={item.rating}
                  color={"gold"}
                  readOnly={"readOnly"}
                  updateReview={updateReview}
                />
                <h4>{item.user}</h4>
                <p>{item.comment}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="review_input">
        <h3>{carousel.leaveAFeedback}</h3>
        <ReviewRating
          rating={rating}
          handleChangeRatin={handleChangeRatin}
          updateReview={updateReview}
        />
        <TextField
          className="review_input_input"
          placeholder={carousel.experience}
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button className="review_input_button" onClick={() => handleSave()}>
          {carousel.post}
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
