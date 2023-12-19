import React, { useEffect } from "react";
import { useNews } from "../../context/NewsContextProvider";
import { useLang } from "../../context/LangContextProvider";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { format, parseISO } from "date-fns";
import "./RecentlyPost.css";
import { LocalActivity } from "@mui/icons-material";

const RecentlyPost = () => {
  const { getRecentlyViewed } = useNews();
  const { translationNews } = useLang();
  const { getOneNews, news } = useNews();

  // Retrieve recentlyViewed from localStorage and parse it into an array
  const recentlyViewed =
    JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  return recentlyViewed.length > 0 ? (
    <div className="recent_parent">
      <h3>{translationNews.recentPost}</h3>
      <ul>
        {recentlyViewed.map((post) => {
          // Check if 'news' is not undefined and 'news' includes the current post
          if (news && news.some((newsItem) => newsItem.id === post.id)) {
            return (
              <li
                key={post.id}
                className="recent_main"
                onClick={() => getOneNews(post.id)}
              >
                <div className="recent_img_div">
                  <img src={post.image} alt={post.title} />
                </div>
                <section className="recent_data">
                  <div className="data_new">
                    <CalendarTodayIcon sx={{ color: "#0079A1" }} />
                    {format(parseISO(post.created_at), "EEEE dd, MMMM yyyy")}
                  </div>
                  <p className="recent_text">{translationNews.recentText}</p>
                </section>
              </li>
            );
          } else {
            // Skip rendering if the post is not found in 'news'
            return null;
          }
        })}
      </ul>
    </div>
  ) : null;
};

export default RecentlyPost;
