import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarouselElement.css";
import { Pagination, Navigation } from "swiper/modules";
import { useReview } from "../../context/ReviewContextProvider";
import { useLang } from "../../context/LangContextProvider";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReviewRating from "../ReviewRating/ReviewRating";

const CarouselElement = () => {
  const { getReviews, reviews, addReview } = useReview();
  const { carousel } = useLang();
  const navigate = useNavigate();
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    getReviews();
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    // Adjust slidesPerView based on screen width
    if (window.innerWidth >= 1300) {
      setSlidesPerView(3);
    } else if (800 < window.innerWidth && window.innerWidth < 1300) {
      setSlidesPerView(2);
    } else if (window.innerWidth <= 800) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(3);
    }
  };

  // Initial adjustment based on screen width
  useEffect(() => {
    handleResize();
  }, []);
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleModalOpen = () => {
    setModal(true);
  };
  const handleChangeRatin = (value) => {
    setRating(value);
  };
  const handleSave = () => {
    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("rating", rating);
    addReview(formData);
    setModal(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {reviews.length !== 0 ? (
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          navigation={{ clickable: true }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <article>
                <h3>{item.user}</h3>
                <p>{item.comment}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="empty_review">
          <h3>{carousel.empty}</h3>
          <Button onClick={handleModalOpen} variant="contained">
            {carousel.leaveReview}
          </Button>
        </div>
      )}

      {reviews.length !== 0 ? (
        <div className="CarouselButton">
          <Button onClick={() => navigate("/reviews")} variant="contained">
            {carousel.allReview}
          </Button>
          <Button onClick={handleModalOpen} variant="contained">
            {carousel.leaveReview}
          </Button>
        </div>
      ) : null}

      {modal ? (
        <div className="overlay">
          <div className="modal">
            <div className="review_input">
              <h3>{carousel.leaveAFeedback}</h3>
              <ReviewRating
                rating={rating}
                handleChangeRatin={handleChangeRatin}
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
              <Button
                className="review_input_button"
                onClick={() => handleSave()}
              >
                {carousel.post}
              </Button>
              <Button
                className="review_input_button"
                onClick={() => setModal(false)}
              >
                {carousel.cancel}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </Box>
  );
};

export default CarouselElement;
