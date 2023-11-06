import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import logo from "../../images/Logo (1).png";
import { useAuth } from "../../context/AuthContextProvider";

const Navbar = () => {
  const navigateElements = [
    { name: "Home", link: "/", id: 1 },
    { name: "Egg donation", link: "/eggdonation", id: 2 },
    { name: "Surrogacy", link: "/surrogacy", id: 5 },
    { name: "News", link: "/news", id: 3 },
    { name: "Contact us", link: "/contactus", id: 4 },
  ];
  const authElements = [
    { name: "Log in", link: "/login", id: 10 },
    { name: "Sing Up", link: "/register", id: 11 },
  ];
  const profileElements = [
    { name: "Profile", link: "/profile", id: 12 },
    { name: "Log Out", link: "/log", id: 13 },
  ];
  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButtonId(id);
  };
  const { getUser, logout, checkAuth, users, currentUser } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  return (
    <div>
      <div className="navbar_main_container">
        <div className="navbar_logo_container">
          <img src={logo} alt="My_Air_Baby" />
        </div>
        <div className="navbar_navigate_container">
          <ul>
            {navigateElements.map((item) => (
              <li key={item.id}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {currentUser ? (
          <div className="navbar_authButton_container">
            {profileElements.map((item) => (
              <NavLink
                to={item.link === "/log" ? "/login" : item.link}
                key={item.id}
                className="navbar_authButton_container_button"
                activeclassname="active"
                onClick={() => (item.link !== "/log" ? null : logout())}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="navbar_authButton_container">
            {authElements.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className="navbar_authButton_container_button"
                activeclassname="active"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
