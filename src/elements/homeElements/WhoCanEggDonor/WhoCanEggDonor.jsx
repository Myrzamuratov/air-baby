import React from "react";
import "./WhoCanEggDonor.css";
import group7 from "../../../images/HomePageImages/Group 7.svg";
import group8 from "../../../images/HomePageImages/Group 8.svg";
import group9 from "../../../images/HomePageImages/Group9.svg";
import group10 from "../../../images/HomePageImages/Group 10.svg";
import group11 from "../../../images/HomePageImages/Group 11.svg";
import group12 from "../../../images/HomePageImages/Group 12.svg";
const requirements = [
  {
    id: 1,
    img: group7,
    text: "A woman with a pleasant appearance from 18 to 30 years old.",
  },
  {
    id: 2,
    img: group8,
    text: "Mentally healthy woman.",
  },
  {
    id: 3,
    img: group9,
    text: "A woman who has a healthy child.",
  },
  {
    id: 4,
    img: group10,
    text: "Without hereditary diseases.",
  },
  {
    id: 5,
    img: group11,
    text: "Has no medical contraindications to donation.",
  },
  {
    id: 6,
    img: group12,
    text: "Without bad habits: smoking, alcohol, drugs.",
  },
];

const WhoCanEggDonor = () => {
  return (
    <div className="whoCanMain">
      <div className="whoCanMain_header">
        <h3>Who Can Become An Egg Donor?</h3>
        <p>
          An egg donor can be a woman aged 18 to 30 years, mentally and
          physically healthy, without bad habits.In order to become a donor, you
          need to undergo a medical examination.
        </p>
      </div>
      <ul className="whoCanMain_ul">
        {requirements.map((item) => (
          <li className="whoCanMain_li" id={item.id}>
            <img src={item.img} alt={item.id} />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhoCanEggDonor;
