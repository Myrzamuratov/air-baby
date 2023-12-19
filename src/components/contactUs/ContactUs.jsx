import React from "react";
import "./ContactUs.css";
import { useLang } from "../../context/LangContextProvider";
import { ReactComponent as PhoneIcon } from "../../images/ContactUs/ContactPhone.svg";
import { ReactComponent as LocationIcon } from "../../images/ContactUs/ContactLocation.svg";
import { ReactComponent as EmailIcon } from "../../images/ContactUs/ContactEmail.svg";
import { ReactComponent as WorkHourIcon } from "../../images/ContactUs/ContactWorkHour.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "../../images/Social Icons.svg";

const ContactUs = () => {
  const { contactUsElements } = useLang();

  return (
    <section className="contact_main">
      <aside className="contact_form">
        <header className="contact_form_header">
          <h4>{contactUsElements.getInTouch}</h4>
          <h3>{contactUsElements.contactUs}</h3>
        </header>
        <div className="contact_form_input">
          <WhatsAppIcon fontSize="large" />
          <a target="_blank" href="https://wa.me/+996500531131">
            +996 (500) 531 131
          </a>
        </div>
        <div className="contact_form_input">
          <img src={TikTokIcon} alt="TikTok" />
          <a
            target="_blank"
            href="https://www.tiktok.com/@my_air_baby?_t=8iJhxL5a0Th&_r=1"
          >
            @MY_AIR_BABY
          </a>
        </div>
        <div className="contact_form_input">
          <InstagramIcon fontSize="large" />
          <a
            target="_blank"
            href="https://www.instagram.com/myairbaby?igshid=OGQ5ZDc2ODk2ZA=="
          >
            @MYAIRBABY
          </a>
        </div>
      </aside>
      <aside className="contact_info">
        <ul className="contact_info_ul">
          <li>
            <PhoneIcon className="svg" />
            <span>{contactUsElements.emergency}</span>
            <p>+996 (500) 531 131 </p>
            <p>+996 (557) 180 804 </p>
          </li>
          <li>
            <LocationIcon className="svg" />
            <span>{contactUsElements.location}</span>
            <p>{contactUsElements.address}</p>
            <p>{contactUsElements.country}</p>
          </li>
          <li>
            <EmailIcon className="svg" />
            <span>{contactUsElements.email}</span>
            <a type="email">myairbaby@gmail.com</a>
          </li>
          <li>
            <WorkHourIcon className="svg" />
            <span>{contactUsElements.workingHours}</span>
            <p>{contactUsElements.workDay} 09:00-18:00</p>
            <p>{contactUsElements.restDay}</p>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default ContactUs;
