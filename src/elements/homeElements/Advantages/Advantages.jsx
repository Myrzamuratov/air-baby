import React from "react";
import "./Advantages.css";
import group1 from "../../../images/HomePageImages/Group1.png";
import group2 from "../../../images/HomePageImages/Group2.png";
import group3 from "../../../images/HomePageImages/Group3.png";
import group4 from "../../../images/HomePageImages/Group4.png";
const Advantages = () => {
  const advanteges = [
    {
      id: 1,
      name: "Free Examination",
      text: "We guarantee a full range of examinations required for donation at our expense.",
      img: group1,
    },
    {
      id: 2,
      name: "Legal support",
      text: "All legal aspects of egg donation are regulated by the legislation of Georgia.",
      img: group2,
    },
    {
      id: 3,
      name: "Compensation",
      text: "You are guaranteed to receive cash reward for participating in the egg donation program.",
      img: group3,
    },
    {
      id: 4,
      name: "100% anonymity",
      text: "All information about donor programs is kept strictly confidential.",
      img: group4,
    },
  ];

  return (
    <div className="advantegesDiv">
      <div className="mainText">
        <h2>Our Advanteges</h2>
      </div>
      <div className="listDiv">
        <ul>
          {advanteges.map((item) => (
            <li className="advanteges_list_li" id={item.id}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
