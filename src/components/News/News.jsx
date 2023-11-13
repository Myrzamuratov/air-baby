import React, { useEffect, useState } from "react";
import { useNews } from "../../context/NewsContextProvider";
import { useLang } from "../../context/LangContextProvider";
import AllNews from "../../elements/newsElements/allNews/AllNews";
import NewsRecently from "../../elements/newsElements/newsRecently/NewsRecently";
import "./News.css";
import { useSearchParams } from "react-router-dom";

const News = () => {
  const { getNews, news, getOneNews, addToRecentlyViewed } = useNews();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  function searching(item) {
    setSearch(item);
  }

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  const { lang, translationNews } = useLang();
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <div className="newsMain">
        <h2>{translationNews.newsMain}</h2>
        <div className="blueVectorDiv"></div>
      </div>
      <div className="news">
        <div className="news_all">
          <AllNews
            news={news}
            translationNews={translationNews}
            lang={lang}
            getOneNews={getOneNews}
            search={search}
            addToRecentlyViewed={addToRecentlyViewed}
          />
        </div>
        <NewsRecently searching={searching} />
      </div>
    </div>
  );
};

export default News;
