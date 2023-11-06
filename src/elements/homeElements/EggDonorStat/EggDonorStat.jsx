import React from "react";
import "./EggDonorStat.css";
import img from "../../../images/HomePageImages/asian-young-main-group-hospital-professional 1.png";

const EggDonorStat = () => {
  return (
    <div className="eggDonorStat_main">
      <div className="eggDonorStat_left">
        <h3>You Can Become An Egg Donor</h3>
        <ul className="eggDonorStat_left_ul">
          <li className="eggDonorStat_left_li">
            <h4>60k+</h4>
            <p>Happy Donors</p>
          </li>
          <li className="eggDonorStat_left_li">
            <h4>80+</h4>
            <p>Total Awards</p>
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
