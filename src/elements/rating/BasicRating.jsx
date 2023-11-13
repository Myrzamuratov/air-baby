import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useNews } from "../../context/NewsContextProvider";

export default function BasicRating({ item, color, readOnly }) {
  const { addRating } = useNews();
  const [value, setValue] = useState(item.rating);

  // useEffect для обновления значения при изменении item.rating
  useEffect(() => {
    setValue(item.rating);
  }, [item.rating]);

  function handleSave(newValue) {
    setValue(newValue);
    const updatedItem = { ...item, rating: newValue };
    addRating(updatedItem);
  }

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        "& .MuiRating-iconFilled": { color: "yellow" },
        "& .MuiRating-iconEmpty": { color: color },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value !== undefined ? value : null}
        onChange={(e) => handleSave(e.target.value)}
        readOnly={readOnly}
      />
    </Box>
  );
}
