import React, { useState } from "react";
import "./NewsComments.css";
import { useLang } from "../../context/LangContextProvider";
import { useNews } from "../../context/NewsContextProvider";
import avatar from "../../images/avatar.png";
import BasicRating from "../../elements/rating/BasicRating";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";

const NewsComments = () => {
  const { translationNews } = useLang();
  const { comments, reviewers, addComment } = useNews();
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const handleSave = () => {
    const formData = new FormData();
    formData.append("comment", comment);
    addComment(formData, id);
  };
  return (
    <div className="comment_main">
      <div className="comment_input_div">
        <div>
          <img className="comment_avatar" src={avatar} alt="user" />
        </div>
        <div className="comment_input">
          <input
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder={translationNews.comments}
          />
          <button onClick={handleSave}>
            <SendIcon fontSize="large" sx={{ color: "#a6a6a6" }} />
          </button>
        </div>
      </div>
      <div className="other_comments">
        {comments.map((item) => {
          const userRating = reviewers.find(
            (reviewer) => reviewer.user.toString() === item.user.toString()
          ) || { user: item.user, id: "false", rating: "0" };

          return (
            <div className="user_comment" key={item.user}>
              <div className="user_comment_avatar">
                <img className="comment_avatar" src={avatar} alt={item.user} />
              </div>
              <div className="user_comment_text">
                <h4>{item.user}</h4>
                {userRating ? (
                  <BasicRating item={userRating} readOnly={true} color="gray" />
                ) : (
                  <BasicRating item={{ id: "false", rating: 0 }} color="gray" />
                )}

                <p>{item.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsComments;
