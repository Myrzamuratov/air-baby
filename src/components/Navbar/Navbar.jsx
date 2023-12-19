import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import logo from "../../images/Logo (1).png";
import logo2 from "../../images/Logo (4).png";
import { useAuth } from "../../context/AuthContextProvider";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useLang } from "../../context/LangContextProvider";

const Navbar = () => {
  const { getUser, logout, checkAuth, users, currentUser } = useAuth();
  const location = useLocation();
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

  const getNavbarStyles = () => {
    if (location.pathname === "/contactus") {
      return {
        backgroundColor: "#0079a1",
        color: "white",
      };
    }
    return {};
  };
  const getNavLinkStyles = (link) => {
    if (location.pathname === link) {
      return {
        backgroundColor: "rgba(0, 120.97, 161.29, 0.10)",
        color: "#0079a1",
        borderBottom: "10px solid #0079a1",
      };
    } else {
      return {};
    }
  };
  const getNavLinkStyles2 = (link) => {
    if (location.pathname === link) {
      return {
        backgroundColor: "white",
        color: "#0079a1",
        borderBottom: "10px solid #7fcbe4",
      };
    } else {
      return {};
    }
  };

  const getLogoSource = () => {
    return location.pathname === "/contactus" ? logo2 : logo;
  };

  return (
    <div>
      <div className="navbar_main_container" style={getNavbarStyles()}>
        <NavLink className="navbar_logo_container" to="/">
          <img src={getLogoSource()} alt="My_Air_Baby" />
        </NavLink>
        <div className="navbar_navigate_container" style={getNavbarStyles()}>
          <ul>
            {navigateElements[lang].map((item) => (
              <li
                style={
                  item.link === "/contactus"
                    ? getNavLinkStyles2(item.link)
                    : getNavLinkStyles(item.link)
                }
                key={item.id}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {currentUser ? (
          <div
            className="navbar_authButton_container"
            style={getNavbarStyles()}
          >
            {profileElements[lang].map((item) => (
              <NavLink
                to={item.link === "/log" ? "/login" : item.link}
                key={item.id}
                className="navbar_authButton_container_button"
                activeClassName="active"
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
                activeClassName="active"
                style={getNavbarStyles()}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}

        <div className="burgerMenu">
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
