import React from "react";
import "./ChangeLang.css";
import { useLang } from "../../context/LangContextProvider";

const ChangeLang = () => {
  const { changeLang, lang } = useLang();

  return (
    <div className="langChange">
      <select onChange={(e) => changeLang(e.target.value)}>
        <h5>{lang.toUpperCase()}</h5>

        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="ch">CH</option>
      </select>
    </div>
  );
};

export default ChangeLang;
