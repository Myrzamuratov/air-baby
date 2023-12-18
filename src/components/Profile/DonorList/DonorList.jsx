import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useLang } from "../../../context/LangContextProvider";

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

export default function DonorList({ donor }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    setExpanded(false);
  }, []);
  const openImage = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  const { myFormLang } = useLang();
  return (
    <div style={{ width: "100%", background: "white" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{ color: "#0079A1" }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            sx={{
              color: "#0079A1",
              fontSize: "Tilda Sans VF",
              fontSize: "24px",
            }}
          >
            {myFormLang.specialCode}: {donor.special_code}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="myForm_donor_body">
            <h3>{myFormLang.donor}</h3>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>ID: </label>
                <p>{donor.id}</p>
              </div>
              <div className="donor_body_info_item">
                <label>{myFormLang.specialCode}: </label>
                <p>{donor.special_code}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Age: </label>
                <p>{donor.age}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.dateOfBirth}: </label>
                <p>{donor.special_code}</p>
              </div>
              <div className="donor_body_info_item">
                <label>{myFormLang.dateOfMenstrualCycle}: </label>
                <p>{donor.date_of_menstrual_cycle}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.country}: </label>
                <p>{donor.country_of_residence}</p>
              </div>
              <div className="donor_body_info_item">
                <label>{myFormLang.nationality}: </label>
                <p>{donor.nationality}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.education}: </label>
                <p>{donor.education}</p>
              </div>
              <div className="donor_body_info_item">
                <label>{myFormLang.currentJob}: </label>
                <p>{donor.current_job}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.maritalStatus}: </label>
                <p>{donor.marital_status}</p>
              </div>
              <div className="donor_body_info_item">
                <label>{myFormLang.expOfDonation}: </label>
                <p>{donor.experience_of_donation}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.willingnessToTravel}: </label>
                <p>{donor.willingness_to_travel}</p>
              </div>
            </div>
            <h3>{myFormLang.physicalCharacteristics}</h3>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.height}: </label>
                <p>{donor.height}</p>
                <div className="donor_body_info_item">
                  <label>{myFormLang.weight}: </label>
                  <p>{donor.weight}</p>
                </div>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.bloodType}: </label>
                <p>{donor.physical_characteristics}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.fathersHairColor}: </label>
                <p>{donor.fathers_hair_colour}</p>
                <div className="donor_body_info_item">
                  <label>{myFormLang.fathersEyeColor}: </label>
                  <p>{donor.fathers_eye_colour}</p>
                </div>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.mothersHairColor}: </label>
                <p>{donor.mothers_hair_colour}</p>
                <div className="donor_body_info_item">
                  <label>{myFormLang.mothersEyeColor}: </label>
                  <p>{donor.mothers_eye_colour}</p>
                </div>
              </div>
            </div>

            <h3>{myFormLang.childrenFam}</h3>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.numberOfChildren}: </label>
                <p>{donor.children}</p>
                <div className="donor_body_info_item">
                  <label>{myFormLang.numberOfSiblings}: </label>
                  <p>{donor.brothers_sisters}</p>
                </div>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.personalityType}: </label>
                <p>{donor.personality_type}</p>
                <div className="donor_body_info_item">
                  <label>{myFormLang.hobby}: </label>
                  <p>{donor.hobby}</p>
                </div>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.healthStatus}: </label>
                <p>{donor.health_status}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item" id="image_div">
                <label>{myFormLang.facePhoto}: </label>
                <img
                  src={donor.photo_fas}
                  alt="face"
                  className="img-round"
                  onClick={() => openImage(`${donor.facePhoto}`)}
                />
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item" id="image_div">
                <label>{myFormLang.fullBodyPhoto}: </label>
                <img
                  src={donor.photo_full}
                  alt="full body"
                  className="img-round"
                  onClick={() => openImage(`${donor.photo_full}`)}
                />
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>{myFormLang.sidePhoto}: </label>
                <img
                  src={donor.photo_side}
                  alt="side photo"
                  className="img-round"
                  onClick={() => openImage(`${donor.sidePhoto}`)}
                />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
