import React, { useState } from "react";
import "./AllNews.css";
import { useTranslation } from "react-i18next";
import { format, parseISO } from "date-fns";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import BasicRating from "../../rating/BasicRating";
import PaginationRanges from "../../PaginationRanges/PaginationRanges";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const AllNews = ({
  news,
  translationNews,
  lang,
  getOneNews,
  search,
  addToRecentlyViewed,
}) => {
  const { t } = useTranslation();
  const itemsPerPage = 4;

  const totalItems = news.length;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleNews = news
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {visibleNews.length ? (
        visibleNews.map((item) => (
          <article key={item.id} className="allNews_container">
            <div className="allNews_image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="allNews_dates">
              <div className="data">
                <CalendarTodayIcon sx={{ color: "#0079A1" }} />
                {format(parseISO(item.created_at), "EEEE dd, MMMM yyyy")}
              </div>
              <div className="byAuthor">
                <Person2OutlinedIcon sx={{ color: "#0079A1" }} />
                By Author
              </div>
              <BasicRating item={item} color="gray" />
            </div>
            <h3>{t(item.title)}</h3>
            <p>{t(item.body.slice(0, 394))}....</p>
            <button
              className="news_button"
              onClick={() => {
                getOneNews(item.id);
                addToRecentlyViewed(item);
              }}
            >
              {translationNews.readMore}
              <ArrowRightAltIcon />
            </button>
          </article>
        ))
      ) : (
        <h3>Gen</h3>
      )}
      <PaginationRanges
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default AllNews;
