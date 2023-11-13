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
      <div className="contact_form">
        <header className="contact_form_header">
          <h4>{contactUsElements.getInTouch.toUpperCase()}</h4>
          <h3>{contactUsElements.contactUs.toUpperCase()}</h3>
        </header>
        <form className="contact_form_input">
          <input type="text" placeholder={contactUsElements.name} />

          <input type="email" placeholder={contactUsElements.email} />

          <input
            type="text"
            placeholder={contactUsElements.subject}
            id="inputBig"
          />

          <textarea placeholder={contactUsElements.message}></textarea>
          <button>{contactUsElements.submit}</button>
        </form>
      </div>

      <aside className="contact_info">
        <ul className="contact_info_ul">
          <li>
            <PhoneIcon className="svg" />
            <span>{contactUsElements.emergency}</span>
            <p>+996 (000) 000 000 </p>
            <p>+996 (000) 000 000 </p>
          </li>
          <li>
            <LocationIcon className="svg" />
            <span>{contactUsElements.location}</span>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </li>
          <li>
            <EmailIcon className="svg" />
            <span>{contactUsElements.email}</span>
            <p>email@email.com</p>
          </li>
          <li>
            <WorkHourIcon className="svg" />
            <span>{contactUsElements.workingHours}</span>
            <p>{contactUsElements.workDay} 09:00-20:00</p>
            <p>{contactUsElements.restDay}</p>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default ContactUs;
