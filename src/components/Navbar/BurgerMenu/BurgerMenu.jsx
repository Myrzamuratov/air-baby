import React, { useState } from "react";
import "./BurgerMenu.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useLang } from "../../../context/LangContextProvider";
import { useAuth } from "../../../context/AuthContextProvider";

const BurgerMenu = ({ navigateElements, authElements }) => {
  const { logout } = useAuth();
  const { lang } = useLang();
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  function burgerMenuOpen() {
    setOpenBurgerMenu(true);
  }

  function closeBurgerMenu() {
    setOpenBurgerMenu(false);
  }
  const email = localStorage.getItem("email");
  console.log(email);
  return (
    <div>
      {openBurgerMenu ? null : (
        <div onClick={burgerMenuOpen} className="burgermenu_icon">
          <MenuIcon style={{ fontSize: "40px" }} />
        </div>
      )}
      {openBurgerMenu ? (
        <div className="burger_main">
          <div onClick={closeBurgerMenu} className="burgermenu_icon_close">
            {lang === "en" ? (
              <h3>Menu</h3>
            ) : lang === "ru" ? (
              <h3>Меню</h3>
            ) : (
              <h3>菜单</h3>
            )}
          </div>
          <ul className="navigateContainer">
            {navigateElements.map((item) => (
              <li key={item.id}>
                <Link onClick={closeBurgerMenu} to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="navigateContainer">
            {authElements.map((item) => (
              <li key={item.id}>
                <Link
                  onClick={() => {
                    closeBurgerMenu && closeBurgerMenu();
                    if (item.link === "") {
                      logout();
                    }
                  }}
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="language_burger">
            <li>{lang}</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default BurgerMenu;
