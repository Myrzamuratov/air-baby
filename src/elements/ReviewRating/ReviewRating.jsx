import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function ReviewRating({
  handleChangeRatin,
  rating,
  readOnly,
  item,
  updateReview,
}) {
  const [value, setValue] = useState(rating);
  const [comment, setComment] = useState(item ? item.comment : "");

  useEffect(() => {
    setValue(rating);
  }, [rating]);

  const changeRat = (newValue) => {
    setValue(newValue);
    handleChangeRatin(newValue);

    // Вызываем updateReview только при изменении рейтинга и наличии item
    if (item) {
      updateReview(item.id, { comment: comment, rating: newValue });
    }
  };

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        "& .MuiRating-iconFilled": { color: "yellow" },
        "& .MuiRating-iconEmpty": { color: "gold" },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(e) => {
          changeRat(Number(e.target.value));
        }}
        onBlur={() => {
          handleChangeRatin(value);
        }}
        readOnly={readOnly}
      />
    </Box>
  );
}
