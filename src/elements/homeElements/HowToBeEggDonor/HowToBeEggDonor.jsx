import React from "react";
import "./HowToBeEggDonor.css";

const instruction = [
  {
    id: 1,
    header: "Appointment for consultation and visit",
    text1:
      "Registration for primary gynecological examination and delivery of tests. You need to make an appointment in the absence of lactation (do not breastfeed). You will be met by a personal coordinator and escorted to an appointment.",
    text2:
      "You need to have the following documents with you: passport, identification code, birth certificate of the child / children, marriage / divorce certificate (if any), your children’s photos.",
  },
  {
    id: 2,
    header: "Medical examination and stimulation",
    text1:
      "In the clinic, you undergo an initial examination, ultrasound diagnostics, a consultation with a geneticist, pass the necessary tests. After passing the examination, the doctor gives a conclusion about the possibility of your participation in the egg donation program and stimulation is carried out.",
    text2:
      "Medical examinations and tests for candidates for oocyte donors are carried out free of charge.",
  },
  {
    id: 3,
    header: "Oocyte sampling and monetary compensation",
    text1:
      "Upon completion of the ovulation stimulation protocol, a puncture (egg collection from an oocyte donor) takes place under the control of ultrasound. The puncture is performed by qualified and experienced doctors of the department. The procedure takes place under general anesthesia.",
    text2: "Monetary compensation is carried out.",
  },
];

const HowToBeEggDonor = () => {
  return (
    <div className="howToBe_main">
      <div className="howToBe_header">
        <h3>How To Become An Egg Donor?</h3>
      </div>
      <ul className="howToBe_ul">
        {instruction.map((item) => (
          <li className="howToBe_li" id={item.id}>
            <h4>{item.id}</h4>
            <div className="howToBe_li_text">
              <h5>{item.header}</h5>
              <p>
                {item.text1}
                <br />
                <strong>{item.text2}</strong>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowToBeEggDonor;
