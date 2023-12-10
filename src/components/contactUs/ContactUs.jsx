import React from "react";
import "./ContactUs.css";
import { useLang } from "../../context/LangContextProvider";
import { ReactComponent as PhoneIcon } from "../../images/ContactUs/ContactPhone.svg";
import { ReactComponent as LocationIcon } from "../../images/ContactUs/ContactLocation.svg";
import { ReactComponent as EmailIcon } from "../../images/ContactUs/ContactEmail.svg";
import { ReactComponent as WorkHourIcon } from "../../images/ContactUs/ContactWorkHour.svg";

const ContactUs = () => {
  const { contactUsElements } = useLang();

  return (
    <section className="contact_main">
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
