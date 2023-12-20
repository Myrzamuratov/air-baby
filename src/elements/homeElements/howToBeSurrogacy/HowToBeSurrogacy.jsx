import React from "react";
import "./HowToBeSurrogacy.css";
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
      header: "Preparation of a surrogate mother for transfer",
      text1:
        "On the day appointed by the reproductologist, the embryos are transferred into the uterine cavity of the Surrogate mother. Further, in the sixth medical week, pregnancy is confirmed by ultrasound.",
      text2: "",
    },
  ],
  ru: [
    {
      id: 1,
      header: "Запись на консультацию и посещение",
      text1:
        "Регистрация на первичный гинекологический осмотр и сдачу анализов. Необходимо записаться при отсутствии лактации (не кормить грудью). Вас встретит личный координатор и проводит на прием.",
      text2:
        "Необходимо иметь следующие документы: паспорт, идентификационный код, свидетельство о рождении ребенка/детей, свидетельство о браке/разводе (если есть), фотографии ваших детей.",
    },
    {
      id: 2,
      header: "Медицинское обследование и стимуляция",
      text1:
        "В клинике вы проходите начальное обследование, ультразвуковую диагностику, консультацию с генетиком, сдаёте необходимые анализы. После прохождения обследования врач делает заключение о возможности вашего участия в программе донорства яйцеклеток, и проводится стимуляция.",
      text2:
        "Медицинские обследования и тесты для кандидатов на донорство яйцеклеток проводятся бесплатно.",
    },
    {
      id: 3,
      header: "Подготовка суррогатной матери к трансферу.",
      text1:
        "В установленный репродуктологом день эмбрионы переносятся в маточную полость суррогатной матери. Далее, на шестой медицинской неделе, беременность подтверждается ультразвуком.",
      text2: "",
    },
  ],
  ch: [
    {
      id: 1,
      header: "预约咨询和参观",
      text1:
        "注册初次妇科检查和检验。在没有哺乳的情况下，请预约。您将由个人协调员接待并陪同您前往预约。",
      text2:
        "您需要携带以下文件：护照，身份证，孩子/孩子们的出生证明，结婚/离婚证书（如果有的话），您孩子的照片。",
    },
    {
      id: 2,
      header: "医疗检查和刺激",
      text1:
        "在诊所，您将接受初步检查、超声诊断、遗传学专家咨询和必要的检测。在完成检查后，医生将就您参与卵子捐赠计划的可能性做出结论，并进行激素刺激。",
      text2: "卵子捐赠者的医学检查和测试是免费的。",
    },
    {
      id: 3,
      header: "为代孕母亲进行移植准备",
      text1:
        "在生殖学家指定的日期，胚胎将移植到代孕母亲的子宫腔内。此后，在第六个医学周，通过超声检查确认怀孕。",
      text2: "",
    },
  ],
};

const HowToBeSurrogacy = () => {
  const { lang } = useLang();
  return (
    <div className="howToBe_main">
      <div className="howToBe_header">
        {lang === "en" ? (
          <h3>How To Become A Surrogate Mother?</h3>
        ) : lang === "ru" ? (
          <h3>Как стать суррогатной матерью?</h3>
        ) : (
          <h3>如何成为代孕母亲？</h3>
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

export default HowToBeSurrogacy;
