import React from "react";
import "./ChangeLang.css";
import { useLang } from "../../context/LangContextProvider";

const ChangeLang = () => {
  const { changeLang } = useLang();
  const lang = localStorage.getItem("language");

  return (
    <div className="langChange">
      <select onChange={(e) => changeLang(e.target.value)} value={lang || ""}>
        <option value="" disabled hidden></option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="ch">CH</option>
      </select>
    </div>
  );
};

export default ChangeLang;
