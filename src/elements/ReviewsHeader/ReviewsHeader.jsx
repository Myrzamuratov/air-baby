import React, { useEffect, useState } from "react";
import "./ReviewsHeader.css";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useLang } from "../../context/LangContextProvider";

const ReviewsHeader = () => {
  const { carousel } = useLang();

  return (
    <header className="header_main">
      <div className="header_main_black">
        <h2>{carousel.ourCustomersFeedback}</h2>
        <div className="header_data">{carousel.trustOurCustomers}</div>
      </div>
    </header>
  );
};

export default ReviewsHeader;
