import React, { useEffect } from "react";
import "./SurrogacuAppForms.css";
import { useForm } from "../../../context/FormContextProvider";
import { useLang } from "../../../context/LangContextProvider";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "white" ? "white" : "white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function SurrogacuAppForms({ donorAppID }) {
  const { mySurrogacyApp, getOneSurrogacyApp } = useForm();
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setExpanded(false);
  }, []);

  useEffect(() => {
    getOneSurrogacyApp();
  }, [donorAppID]);

  const openImage = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  const { myFormLang, translationEgg } = useLang();
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      style={{ color: "#0079A1", width: "100%" }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography
          sx={{
            color: "#0079A1",
            fontSize: "Tilda Sans VF",
            fontSize: "24px",
          }}
        >
          {myFormLang.youSurrogacyApp}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="myForm_donor">
          <h3 className="main_h3">{myFormLang.youSurrogacyApp}</h3>
          {mySurrogacyApp ? (
            <div className="myForm_donor_body">
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.firstName}: </label>
                  <p>{mySurrogacyApp.first_name}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.lastName}: </label>
                  <p>{mySurrogacyApp.last_name}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.dateOfBirth}: </label>
                  <p>{mySurrogacyApp.date_of_birth}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.nationality}: </label>
                  <p>{mySurrogacyApp.nationality}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.famStatus}: </label>
                  <p>{mySurrogacyApp.family_status}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.country}: </label>
                  <p>{mySurrogacyApp.country_of_residence}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.address}: </label>
                  <p>{mySurrogacyApp.address}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.education}: </label>
                  <p>{mySurrogacyApp.education}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.currentJob}: </label>
                  <p>{mySurrogacyApp.current_job}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.height}: </label>
                  <p>{mySurrogacyApp.height}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.weight}: </label>
                  <p>{mySurrogacyApp.weight}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.howPregnancy}: </label>
                  <p>{mySurrogacyApp.hows_pregnancy_g}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.bloodPresure}: </label>
                  <p>{mySurrogacyApp.arterial_pressure}</p>
                </div>
              </div>
              <h3>{myFormLang.children}</h3>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.howMany}: </label>
                  <p>{mySurrogacyApp.children.length}</p>
                </div>
              </div>
              {mySurrogacyApp.children.map((item) => (
                <div className="donor_body_info" id={item.id}>
                  <div className="donor_body_info_item">
                    <label>{myFormLang.dateOfBirth}: </label>
                    <p>{item.date_of_birth}</p>
                  </div>
                  <div className="donor_body_info_item">
                    <label>{myFormLang.name}: </label>
                    <p>{item.child_name}</p>
                  </div>
                  <div className="donor_body_info_item">
                    <label>{myFormLang.whatStage}: </label>
                    <p>{item.what_stage_was_birth}</p>
                  </div>
                  <div className="donor_body_info_item">
                    <label>{myFormLang.delivery}: </label>
                    <p>{item.how_born}</p>
                  </div>
                  <br />
                </div>
              ))}

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.breastfedrecentlyAndWhen}:</label>
                  <p>
                    {mySurrogacyApp.breastfeeding},{" "}
                    {mySurrogacyApp.when_breast_feed}
                  </p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.hormonalContraceptives}: </label>
                  <p>{mySurrogacyApp.usage_hormon_contr}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.bloodType}: </label>
                  <p>{mySurrogacyApp.blood_type}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.menstrualCycle}: </label>
                  <p>{mySurrogacyApp.menstrual_cycle}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.dateLastMenstrualCycle}: </label>
                  <p>{mySurrogacyApp.last_menstrual_cycle}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.prevGynecologyDiseases}: </label>
                  <p>{mySurrogacyApp.gynecological_history}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.transmittedDisseases}: </label>
                  <p>{mySurrogacyApp.sexually_transmitted_diseases}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.surrogacyExperience}: </label>
                  <p>{mySurrogacyApp.surrogacy_experience}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.doYouSmoke}: </label>
                  <p>{mySurrogacyApp.smoking}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.doYouDrink}: </label>
                  <p>{mySurrogacyApp.alcohol}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.surgeries}: </label>
                  <p>{mySurrogacyApp.operations_which_when}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.famHistory}: </label>
                  <p>{mySurrogacyApp.family_medical_history}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.multiplyPregnancy}: </label>
                  <p>{mySurrogacyApp.multiple_pregnancies_in_family}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.reasonSurrogacy}: </label>
                  <p>{mySurrogacyApp.why_surrogate_mother}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.whereYouKnow}: </label>
                  <p>{mySurrogacyApp.how_learned_about_surrogacy_program}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.famAgree}: </label>
                  <p>{mySurrogacyApp.family_approval}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.criminal}: </label>
                  <p>{mySurrogacyApp.legal_issues}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.phoneNumber}: </label>
                  <p>{mySurrogacyApp.phone_number}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.managerName}: </label>
                  <p>{mySurrogacyApp.manager_name}</p>
                </div>
              </div>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.tunduk}: </label>
                  <p>{mySurrogacyApp.tunduk_account}</p>
                </div>
              </div>
              <div className="donor_body_info">
                <div className="donor_body_info_item" id="image_div">
                  <label>{myFormLang.passportPhoto}: </label>
                  <img
                    src={`https://api.myairbaby.net${mySurrogacyApp.passport_photo}`}
                    alt="Passport"
                    className="img-round"
                    onClick={() =>
                      openImage(
                        `https://api.myairbaby.net${mySurrogacyApp.passport_photo}`
                      )
                    }
                  />
                </div>
                <div className="donor_body_info_item" id="image_div">
                  <label>{myFormLang.facePhoto}: </label>
                  <img
                    src={`https://api.myairbaby.net${mySurrogacyApp.face_photo}`}
                    alt="Face"
                    className="img-round"
                    onClick={() =>
                      openImage(
                        `https://api.myairbaby.net${mySurrogacyApp.face_photo}`
                      )
                    }
                  />
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item" id="image_div">
                  <label>{myFormLang.fullBodyPhoto}: </label>
                  <img
                    src={`https://api.myairbaby.net${mySurrogacyApp.full_body_selfie}`}
                    alt="Body"
                    className="img-round"
                    onClick={() =>
                      openImage(
                        `https://api.myairbaby.net${mySurrogacyApp.full_body_selfie}`
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
