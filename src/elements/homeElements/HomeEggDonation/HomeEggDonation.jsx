import React from "react";
import "./HomeEggDonation.css";
import { useNavigate } from "react-router-dom";

const HomeEggDonation = () => {
  const navigate = useNavigate();
  return (
    <div className="mainDiv">
      <div className="contentDiv">
        <div className="contentDiv_text">
          <h1>Egg Donation</h1>
          <h3>Give life to someone</h3>
        </div>
        <div className="contentDiv_button">
          <button onClick={() => navigate("/eggdonation")}>
            Application form
          </button>
        </div>
      </div>
      <div className="vectorDiv"></div>
    </div>
  );
};

export default HomeEggDonation;
