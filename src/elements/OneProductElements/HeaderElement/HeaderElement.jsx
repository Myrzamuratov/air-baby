import React, { useEffect, useState } from "react";
import "./HeaderElement.css";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import BasicRating from "../../rating/BasicRating";
import { useNews } from "../../../context/NewsContextProvider";

const HeaderElement = ({ oneNew }) => {
  const { getOneNews } = useNews();
  const [currentOneNew, setCurrentOneNew] = useState(oneNew);

  useEffect(() => {
    setCurrentOneNew(oneNew);
  }, [oneNew]);

  return (
    <header className="header_main">
      <div className="header_main_black">
        <h2>{currentOneNew.title}</h2>
        <div className="header_data">
          {currentOneNew && currentOneNew.created_at ? (
            <div className="data_new">
              <CalendarTodayIcon sx={{ color: "#0079A1" }} />
              {format(parseISO(currentOneNew.created_at), "EEEE dd, MMMM yyyy")}
            </div>
          ) : null}

          <div className="byAuthor_new">
            <Person2OutlinedIcon sx={{ color: "#0079A1" }} />
            By Author
          </div>
          <BasicRating item={currentOneNew} color="white" />
        </div>
      </div>
    </header>
  );
};

export default HeaderElement;
