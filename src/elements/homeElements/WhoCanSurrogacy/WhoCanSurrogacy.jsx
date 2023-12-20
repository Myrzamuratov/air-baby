import React from "react";
import "./WhoCanSurrogacy.css";
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
      text: "A woman aged 21-35, maximum 37 years.",
    },
    {
      id: 2,
      img: group8,
      text: "Blood type and Rh factor should be positive.",
    },
    {
      id: 3,
      img: group9,
      text: "Be sure to give birth and no more than one Caesarean, if it was then explain the reason.",
    },
    {
      id: 4,
      img: group10,
      text: "Without hereditary diseases.",
    },
    {
      id: 5,
      img: group11,
      text: "Has no medical contraindications to surrogacy.",
    },
    {
      id: 6,
      img: group12,
      text: "Should not have any bad habits: smoking, alcohol, drugs.",
    },
  ],
  ru: [
    {
      id: 1,
      img: group7,
      text: "Женщина в возрасте от 21 до 35 лет, максимум 37 лет.",
    },
    {
      id: 2,
      img: group8,
      text: "Группа крови и резус-фактор должны быть положительными.",
    },
    {
      id: 3,
      img: group9,
      text: "Обязательно должна родить и не более одного кесарева сечения; если было кесарево сечение, пожалуйста, объясните причину.",
    },
    {
      id: 4,
      img: group10,
      text: "Без наличия наследственных заболеваний.",
    },
    {
      id: 5,
      img: group11,
      text: "Не имеет медицинских противопоказаний к суррогатному материнству.",
    },
    {
      id: 6,
      img: group12,
      text: "Без вредных привычек: курение, алкоголь, наркотики.",
    },
  ],
  ch: [
    {
      id: 1,
      img: group7,
      text: "年龄在21岁至35岁之间的女性，最大不超过37岁。",
    },
    {
      id: 2,
      img: group8,
      text: "血型和Rh因子应为阳性。",
    },
    {
      id: 3,
      img: group9,
      text: "务必要有生育经验，最多只能有一次剖腹产；如果有剖腹产经历，请解释原因。",
    },
    {
      id: 4,
      img: group10,
      text: "没有遗传疾病。",
    },
    {
      id: 5,
      img: group11,
      text: "没有代孕的医学禁忌。",
    },
    {
      id: 6,
      img: group12,
      text: "不应该有不良嗜好：吸烟、酗酒、吸毒。",
    },
  ],
};

const WhoCanSurrogacy = () => {
  const { lang } = useLang();
  return (
    <div className="whoCanMain">
      {lang === "en" ? (
        <div className="whoCanMain_header">
          <h3>Who Can Become A Surrogate Mother?</h3>
          <p>
            A surrogate mother can be a woman aged 21-35 maximum 37, be sure to
            have given birth, not more than one cesarean and if it was, then for
            what reason
          </p>
        </div>
      ) : lang === "ru" ? (
        <div className="whoCanMain_header">
          <h3>Кто может стать суррогатной матерью?</h3>
          <p>
            Суррогатная матерь должна быть женщиной в возрасте от 21 до 35 лет,
            с максимальным возрастом 37 лет. Важно, чтобы суррогатная мать уже
            родила ребенка и не имела более одного кесарева сечения. Если
            кесарево сечение было выполнено, то необходимо указать причину этой
            процедуры.
          </p>
        </div>
      ) : (
        <div className="whoCanMain_header">
          <h3>谁可以成为代孕母亲？</h3>
          <p>
            代孕母亲的要求包括年龄在21岁至35岁之间，最大不超过37岁。必须确保代孕母亲已经生过孩子，且剖腹产不得超过一次。如果进行过剖腹产手术，需要提供手术原因的详细信息。
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

export default WhoCanSurrogacy;
