import React from "react";
import "./WhoCanEggDonor.css";
import group7 from "../../../images/HomePageImages/Group 7.svg";
import group8 from "../../../images/HomePageImages/Group 8.svg";
import group9 from "../../../images/HomePageImages/Group9.svg";
import group10 from "../../../images/HomePageImages/Group 10.svg";
import group11 from "../../../images/HomePageImages/Group 11.svg";
import group12 from "../../../images/HomePageImages/Group 12.svg";
import { useLang } from "../../../context/LangContextProvider";
const requirements = {
  en: [
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
  ],
  ru: [
    {
      id: 1,
      img: group7,
      text: "Женщина приятной внешности от 18 до 30 лет.",
    },
    {
      id: 2,
      img: group8,
      text: "Психически здоровая женщина.",
    },
    {
      id: 3,
      img: group9,
      text: "Женщина, родившая здорового ребенка.",
    },
    {
      id: 4,
      img: group10,
      text: "Без наследственных заболеваний.",
    },
    {
      id: 5,
      img: group11,
      text: "Не имеет медицинских противопоказаний к донорству.",
    },
    {
      id: 6,
      img: group12,
      text: "Без вредных привычек: курения, алкоголя, наркотиков.",
    },
  ],
  ch: [
    {
      id: 1,
      img: group7,
      text: "女性，相貌清秀，18 至 30 岁。",
    },
    {
      id: 2,
      img: group8,
      text: "一个精神健康的女人",
    },
    {
      id: 3,
      img: group9,
      text: "一个生下健康宝宝的女人。",
    },
    {
      id: 4,
      img: group10,
      text: "无遗传性疾病",
    },
    {
      id: 5,
      img: group11,
      text: "无捐献禁忌症。",
    },
    {
      id: 6,
      img: group12,
      text: "无不良嗜好：吸烟、酗酒、吸毒。",
    },
  ],
};

const WhoCanEggDonor = () => {
  const { lang } = useLang();
  return (
    <div className="whoCanMain">
      {lang === "en" ? (
        <div className="whoCanMain_header">
          <h3>Who Can Become An Egg Donor?</h3>
          <p>
            An egg donor can be a woman aged 18 to 30 years, mentally and
            physically healthy, without bad habits.In order to become a donor,
            you need to undergo a medical examination.
          </p>
        </div>
      ) : lang === "ru" ? (
        <div className="whoCanMain_header">
          <h3>Кто может стать донором яйцеклетки?</h3>
          <p>
            Донором яйцеклетки может стать женщина в возрасте от 18 до 30 лет,
            психически и физически здоровая, без вредных привычек. физически
            здоровая, без вредных привычек.Для того чтобы стать донором,
            необходимо необходимо пройти медицинское обследование.
          </p>
        </div>
      ) : (
        <div className="whoCanMain_header">
          <h3>谁可以成为卵子捐献者？</h3>
          <p>
            18 至 30 岁的女性可以成为卵子捐献者、
            身心健康，无不良嗜好。要成为捐卵者，必须接受体检。
          </p>
        </div>
      )}
      <ul className="whoCanMain_ul">
        {requirements[lang].map((item) => (
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
