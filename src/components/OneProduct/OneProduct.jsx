import React, { useEffect } from "react";
import "./OneProduct.css";
import { useNews } from "../../context/NewsContextProvider";
import HeaderElement from "../../elements/OneProductElements/HeaderElement/HeaderElement";
import { useNavigate, useParams } from "react-router-dom";
import { useLang } from "../../context/LangContextProvider";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RecentlyPost from "../../elements/RecentlyPost/RecentlyPost";
import NewsComments from "../NewsComments/NewsComments";

const OneProduct = () => {
  const { oneNew, getOneNews } = useNews();
  const { translationNews } = useLang();

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneNews(id);
  }, []);
  function nextNews(ids) {
    getOneNews(ids);
  }
  const news = oneNew;
  return (
    <article>
      <HeaderElement oneNew={news} />
      <section className="news_body">
        <div className="news_body_elements">
          <img src={news.image} alt={oneNew.title} />
          <p>{news.body}</p>
          <section className="news_body_button">
            <button onClick={() => nextNews(news.id - 1)}>
              <KeyboardArrowLeftIcon sx={{ color: "#0079A1" }} />

              {translationNews.prev}
            </button>
            <button onClick={() => nextNews(news.id + 1)}>
              {translationNews.next}
              <KeyboardArrowRightIcon sx={{ color: "#0079A1" }} />
            </button>
          </section>
        </div>

        <div className="recently_posts">
          <RecentlyPost />
        </div>
        <NewsComments />
      </section>
    </article>
  );
};

export default OneProduct;
