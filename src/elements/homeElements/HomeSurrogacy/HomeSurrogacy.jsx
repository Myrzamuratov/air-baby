import React from "react";
import "./HomeSurrogacy.css";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../../context/LangContextProvider";

const HomeSurrogacy = () => {
  const { lang } = useLang();
  const navigate = useNavigate();
  return (
    <div className="mainDiv_home1">
      <div className="contentDiv">
        {lang === "en" ? (
          <div className="contentDiv_text">
            <h1>Surrogacy</h1>
            <h3>Give life to someone</h3>
          </div>
        ) : lang === "ru" ? (
          <div className="contentDiv_text">
            <h1>Суррогатное материнство</h1>
            <h3>Дарите жизнь другим</h3>
          </div>
        ) : (
          <div className="contentDiv_text">
            <h1>代孕</h1>
            <h3>赋予他人生命</h3>
          </div>
        )}

        <div className="contentDiv_button">
          {lang === "en" ? (
            <button onClick={() => navigate("/eggdonation")}>
              Application form
            </button>
          ) : lang === "ru" ? (
            <button onClick={() => navigate("/surrogacy")}>Анкета</button>
          ) : (
            <button onClick={() => navigate("/surrogacy")}>申请表</button>
          )}
        </div>
      </div>
      <div className="vectorDiv"></div>
    </div>
  );
};

export default HomeSurrogacy;
