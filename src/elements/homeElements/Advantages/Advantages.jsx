import React from "react";
import "./Advantages.css";
import group1 from "../../../images/HomePageImages/Group1.png";
import group2 from "../../../images/HomePageImages/Group2.png";
import group3 from "../../../images/HomePageImages/Group3.png";
import group4 from "../../../images/HomePageImages/Group4.png";
import { useLang } from "../../../context/LangContextProvider";
const Advantages = () => {
  const { lang } = useLang();
  const advanteges = {
    en: [
      {
        id: 1,
        name: "Free Examination",
        text: "We guarantee the conduct of a comprehensive examination at our expense.",
        img: group1,
      },
      {
        id: 2,
        name: "Legal support",
        text: "All legal aspects of egg donation are regulated by the legislation of Kyrgyzstan and Georgia.",
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
    ],
    ru: [
      {
        id: 1,
        name: "Бесплатное обследование",
        text: "Мы гарантируем проведение полного комплекса обследований за наш счет.",
        img: group1,
      },
      {
        id: 2,
        name: "Юридическая поддержка",
        text: "Все правовые аспекты донорства яйцеклеток регулируются законодательством КР и Грузии.",
        img: group2,
      },
      {
        id: 3,
        name: "Компенсация",
        text: "Вы гарантированно получите денежное вознаграждение за участие в программе донорства яйцеклеток.",
        img: group3,
      },
      {
        id: 4,
        name: "100% анонимность",
        text: "Вся информация о донорских программах хранится в строгом секрете.",
        img: group4,
      },
    ],
    ch: [
      {
        id: 1,
        name: "免费考试",
        text: "我们保证进行全面的检查，费用由我们承担。",
        img: group1,
      },
      {
        id: 2,
        name: "法律支持",
        text: "卵子捐赠的所有法律方面都受到吉尔吉斯斯坦和格鲁吉亚的法律规定。",
        img: group2,
      },
      {
        id: 3,
        name: "赔偿",
        text: "参加捐卵计划，您将保证获得现金奖励。",
        img: group3,
      },
      {
        id: 4,
        name: "100% 匿名",
        text: "有关捐助计划的所有信息均严格保密。",
        img: group4,
      },
    ],
  };

  return (
    <div className="advantegesDiv">
      <div className="mainText">
        {lang === "en" ? (
          <h2>Advantages</h2>
        ) : lang === "ru" ? (
          <h2>Наши преимущества</h2>
        ) : (
          <h2>我们的优势</h2>
        )}
      </div>
      <div className="listDiv">
        <ul>
          {advanteges[lang].map((item) => (
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
