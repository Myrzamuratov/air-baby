import React, { useState } from "react";
import "./ProfileMenu.css";
import { useLang } from "../../../context/LangContextProvider";
import { ReactComponent as AppFormIcon } from "../../../images/Profile/Мои анкеты.svg";
import { ReactComponent as DonorsIcon } from "../../../images/Profile/grid-8.svg";

const ProfileMenu = ({ setChangeElement }) => {
  const { profile } = useLang();
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const menuElements = [
    {
      id: 1,
      name: profile.appForm,
      icon: <AppFormIcon className="profile_menu_icon" />,
      route: "/appForm",
    },
    {
      id: 2,
      name: profile.donors,
      icon: <DonorsIcon className="profile_menu_icon" />,
      route: "/donors",
    },
  ];

  const handleMenuItemClick = (item) => {
    setChangeElement(item.route);
    setActiveMenuItem(item.id);
    // Дополнительная логика обработки нажатия на элемент меню, если необходимо
  };

  return (
    <ul className="profile_menu_main">
      {menuElements.map((item) => (
        <li
          className={`profile_menu_element ${
            activeMenuItem === item.id ? "active" : ""
          }`}
          key={item.id}
          onClick={() => handleMenuItemClick(item)}
        >
          {item.icon}
          <h3>{item.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default ProfileMenu;
