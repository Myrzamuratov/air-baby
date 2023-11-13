import React from "react";
import "./HomeEggDonation.css";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../../context/LangContextProvider";

const HomeEggDonation = () => {
  const { lang } = useLang();
  const navigate = useNavigate();
  return (
    <div className="mainDiv_home">
      <div className="contentDiv">
        {lang === "en" ? (
          <div className="contentDiv_text">
            <h1>Egg Donation</h1>
            <h3>Give life to someone</h3>
          </div>
        ) : lang === "ru" ? (
          <div className="contentDiv_text">
            <h1>Донорство Яйцеклеток</h1>
            <h3>Дарите жизнь другим</h3>
          </div>
        ) : (
          <div className="contentDiv_text">
            <h1>卵子捐赠</h1>
            <h3>赋予他人生命</h3>
          </div>
        )}

        <div className="contentDiv_button">
          {lang === "en" ? (
            <button onClick={() => navigate("/eggdonation")}>
              Application form
            </button>
          ) : lang === "ru" ? (
            <button onClick={() => navigate("/eggdonation")}>Анкета</button>
          ) : (
            <button onClick={() => navigate("/eggdonation")}>申请表</button>
          )}
        </div>
      </div>
      <div className="vectorDiv"></div>
    </div>
  );
};

export default HomeEggDonation;
