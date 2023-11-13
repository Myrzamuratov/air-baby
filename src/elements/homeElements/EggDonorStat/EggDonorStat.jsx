import React from "react";
import "./EggDonorStat.css";
import img from "../../../images/HomePageImages/asian-young-main-group-hospital-professional 1.png";
import { useLang } from "../../../context/LangContextProvider";

const EggDonorStat = () => {
  const { lang } = useLang();
  return (
    <div className="eggDonorStat_main">
      <div className="eggDonorStat_left">
        {lang === "en" ? (
          <h3>You Can Become An Egg Donor</h3>
        ) : lang === "ru" ? (
          <h3>Вы можете стать донором яйцеклеток</h3>
        ) : (
          <h3>您可以成为卵子捐献者</h3>
        )}
        <ul className="eggDonorStat_left_ul">
          <li className="eggDonorStat_left_li">
            <h4>60k+</h4>
            {lang === "en" ? (
              <p>Happy Donors</p>
            ) : lang === "ru" ? (
              <p>Счастливые доноры</p>
            ) : (
              <p>快乐捐赠者</p>
            )}
          </li>
          <li className="eggDonorStat_left_li">
            <h4>80+</h4>
            {lang === "en" ? (
              <p>Total Awards</p>
            ) : lang === "ru" ? (
              <p>Всего премий</p>
            ) : (
              <p>获奖总数</p>
            )}
          </li>
        </ul>
      </div>
      <div className="eggDonorStat_right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default EggDonorStat;
