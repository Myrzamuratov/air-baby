import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import logo from "../../images/Logo (1).png";
import { useAuth } from "../../context/AuthContextProvider";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useLang } from "../../context/LangContextProvider";

const Navbar = () => {
  const { getUser, logout, checkAuth, users, currentUser } = useAuth();
  useEffect(() => {
    checkAuth();
  }, []);
  const { lang, changeLang } = useLang();

  const navigateElements = {
    en: [
      { name: "Home", link: "/", id: 1 },
      { name: "Egg donation", link: "/eggdonation", id: 2 },
      { name: "Surrogacy", link: "/surrogacy", id: 5 },
      { name: "News", link: "/news", id: 3 },
      { name: "Contact us", link: "/contactus", id: 4 },
    ],
    ru: [
      { name: "Главная", link: "/", id: 1 },
      { name: "Донорство", link: "/eggdonation", id: 2 },
      { name: "Сурр. материнство", link: "/surrogacy", id: 5 },
      { name: "Новости", link: "/news", id: 3 },
      { name: "Контакты", link: "/contactus", id: 4 },
    ],
    ch: [
      { name: "主页", link: "/", id: 1 },
      { name: "卵子捐赠", link: "/eggdonation", id: 2 },
      { name: "代孕", link: "/surrogacy", id: 5 },
      { name: "新闻", link: "/news", id: 3 },
      { name: "联系我们", link: "/contactus", id: 4 },
    ],
  };

  const authElements = {
    en: [
      { name: "Log in", link: "/login", id: 10 },
      { name: "Sign Up", link: "/register", id: 11 },
    ],
    ru: [
      { name: "Войти", link: "/login", id: 10 },
      { name: "Регистрация", link: "/register", id: 11 },
    ],
    ch: [
      { name: "登录", link: "/login", id: 10 },
      { name: "注册", link: "/register", id: 11 },
    ],
  };

  const profileElements = {
    en: [
      { name: "Profile", link: "/profile", id: 12 },
      { name: "Log Out", link: "", id: 13 },
    ],
    ru: [
      { name: "Профиль", link: "/profile", id: 12 },
      { name: "Выйти", link: "", id: 13 },
    ],
    ch: [
      { name: "个人资料", link: "/profile", id: 12 },
      { name: "退出", link: "", id: 13 },
    ],
  };

  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButtonId(id);
  };

  return (
    <div>
      <div className="navbar_main_container">
        <div className="navbar_logo_container">
          <img src={logo} alt="My_Air_Baby" />
        </div>
        <div className="navbar_navigate_container">
          <ul>
            {navigateElements[lang].map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {currentUser ? (
          <div className="navbar_authButton_container">
            {profileElements[lang].map((item) => (
              <NavLink
                to={item.link === "/log" ? "/login" : item.link}
                key={item.id}
                className="navbar_authButton_container_button"
                activeclassname="active"
                onClick={item.link === "" ? logout : undefined}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="navbar_authButton_container">
            {authElements[lang].map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className="navbar_authButton_container_button"
                activeClassName="active" // Заменил "activeclassname" на "activeClassName"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}

        <div className="burgerMenu">
          {" "}
          <BurgerMenu
            navigateElements={navigateElements[lang]}
            authElements={
              currentUser ? profileElements[lang] : authElements[lang]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
