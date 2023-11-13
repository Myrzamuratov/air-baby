import React, { useState } from "react";
import "./NewsRecently.css";
import SearchElement from "../../SearchElement/SearchElement";
import RecentlyPost from "../../RecentlyPost/RecentlyPost";

const NewsRecently = ({ searching }) => {
  function secondSearch(item) {
    searching(item);
  }
  return (
    <div className="news_recently">
      <SearchElement secondSearch={secondSearch} />
      <div className="recently_news">
        <RecentlyPost />
      </div>
    </div>
  );
};

export default NewsRecently;
