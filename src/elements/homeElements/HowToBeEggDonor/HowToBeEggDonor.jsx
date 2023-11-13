import React from "react";
import "./HowToBeEggDonor.css";
import { useLang } from "../../../context/LangContextProvider";

const instruction = {
  en: [
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
  ],
  ru: [
    {
      id: 1,
      header: "Запись на консультацию и посещение",
      text1:
        "Запись на первичный гинекологический осмотр и сдачу анализов. Запись на прием необходима при отсутствии лактации (не кормите грудью). Вас встретит персональный координатор и сопроводит на прием.",
      text2:
        "При себе необходимо иметь следующие документы: паспорт, идентификационный код, свидетельство о рождении ребенка/детей, свидетельство о браке/разводе (при наличии), фотографии ваших детей.",
    },
    {
      id: 2,
      header: "Медицинское обследование и стимуляция",
      text1:
        "В клинике Вы проходите первичный осмотр, УЗИ-диагностику, консультацию генетика, сдаете необходимые анализы. После прохождения обследования врач дает заключение о возможности Вашего участия в программе донорства яйцеклеток и проводится стимуляция.",
      text2:
        "Медицинские обследования и анализы для кандидатов в доноры ооцитов проводятся бесплатно.",
    },
    {
      id: 3,
      header: "Забор ооцитов и денежная компенсация",
      text1:
        "По завершении протокола стимуляции овуляции под контролем УЗИ проводится пункция (забор яйцеклеток у донора ооцитов). Пункцию выполняют квалифицированные и опытные врачи отделения. Процедура проводится под общей анестезией.",
      text2: "Осуществляется денежная компенсация.",
    },
  ],
  ch: [
    {
      id: 1,
      header: "预约咨询和参观",
      text1:
        "初级妇科检查和送检登记。无哺乳期（不哺乳）者需提前预约。将有专人接待您并陪同您前往预约地点。",
      text2:
        "您需要携带以下文件：护照、身份代码、孩子的出生证明、结婚证/离婚证（如有）、孩子的照片。",
    },
    {
      id: 2,
      header: "医疗检查和刺激",
      text1:
        "在诊所，您将接受初步检查、超声波诊断、遗传学家咨询，并通过必要的测试。通过检查后，医生会对您参加捐卵计划的可能性做出结论，并进行促排卵。",
      text2: "免费为卵细胞捐献者候选人进行体检和测试。",
    },
    {
      id: 3,
      header: "卵母细胞取样和货币补偿",
      text1:
        "完成促排卵方案后，在超声波控制下进行穿刺（从卵细胞捐献者处采集卵子）。穿刺由该科经验丰富的合格医生进行。手术在全身麻醉下进行。",
      text2: "进行货币补偿。",
    },
  ],
};

const HowToBeEggDonor = () => {
  const { lang } = useLang();
  return (
    <div className="howToBe_main">
      <div className="howToBe_header">
        {lang === "en" ? (
          <h3>How To Become An Egg Donor?</h3>
        ) : lang === "ru" ? (
          <h3>Как стать донором яйцеклеток?</h3>
        ) : (
          <h3>如何成为卵子捐赠者？</h3>
        )}
      </div>
      <ul className="howToBe_ul">
        {instruction[lang].map((item) => (
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
