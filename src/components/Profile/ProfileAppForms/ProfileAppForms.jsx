import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useForm } from "../../../context/FormContextProvider";
import "./ProfileAppForms.css";
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

export default function ProfileAppForms({ donorAppID }) {
  console.log(donorAppID);
  const { getOneDonorApp, myDonorApp } = useForm();
  useEffect(() => {
    getOneDonorApp(donorAppID);
  }, [donorAppID]);
  const { myFormLang } = useLang();
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
          {myFormLang.yoDonorAppForm}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <div className="myForm_donor">
          <h3 className="main_h3">{myFormLang.yoDonorAppForm}</h3>
          {myDonorApp ? (
            <div className="myForm_donor_body">
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.firstName}: </label>
                  <p>{myDonorApp.first_name}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.lastName}: </label>
                  <p>{myDonorApp.last_name}</p>
                </div>
              </div>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.dateOfBirth}: </label>
                  <p>{myDonorApp.date_of_birth}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.nationality}: </label>
                  <p>{myDonorApp.nationality}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.country}: </label>
                  <p>{myDonorApp.country_of_residence}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.address}: </label>
                  <p>{myDonorApp.address}</p>
                </div>
              </div>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.education}: </label>
                  <p>{myDonorApp.education}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.currentJob}: </label>
                  <p>{myDonorApp.current_job}</p>
                </div>
              </div>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.maritalStatus}: </label>
                  <p>{myDonorApp.height}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.expOfDonation}: </label>
                  <p>{myDonorApp.experience_of_donation}</p>
                </div>
              </div>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.willingnessToTravel}: </label>
                  <p>{myDonorApp.willingness_to_travel}</p>
                </div>
              </div>
              <h3>{myFormLang.physicalCharacteristics}</h3>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.weight}: </label>
                  <p>{myDonorApp.weight}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.height}: </label>
                  <p>{myDonorApp.height}</p>
                </div>
              </div>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.bloodType}: </label>
                  <p>{myDonorApp.physical_characteristics}</p>
                </div>
              </div>

              <h3>{myFormLang.childrenFam}</h3>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.numberOfChildren}: </label>
                  <p>{myDonorApp.children}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.numberOfSiblings}: </label>
                  <p>{myDonorApp.brothers_sisters}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.mothersHairColor}: </label>
                  <p>{myDonorApp.mothers_hair_colour}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.mothersEyeColor}: </label>
                  <p>{myDonorApp.mothers_eye_colour}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.fathersHairColor}: </label>
                  <p>{myDonorApp.fathers_hair_colour}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.fathersEyeColor}: </label>
                  <p>{myDonorApp.fathers_eye_colour}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.hobby}: </label>
                  <p>{myDonorApp.hobby}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.personalityType}: </label>
                  <p>{myDonorApp.personality_type}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.healthStatus}: </label>
                  <p>{myDonorApp.health_status}</p>
                </div>
              </div>
              <div className="donor_body_info">
                <div className="donor_body_info_item" id="image_div">
                  <label>{myFormLang.facePhoto}: </label>
                  <img
                    src={myDonorApp.photo_fas}
                    alt="face"
                    className="img-round"
                    onClick={() => openImage(`${myDonorApp.photo_fas}`)}
                  />
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.fullBodyPhoto}: </label>
                  <img
                    src={myDonorApp.photo_full}
                    alt="body"
                    className="img-round"
                    onClick={() => openImage(`${myDonorApp.photo_full}`)}
                  />
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.phoneNumber}: </label>
                  <p>{myDonorApp.phone_number}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>{myFormLang.email}: </label>
                  <p>{myDonorApp.user}</p>
                </div>
              </div>

              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.comments}: </label>
                  <p>{myDonorApp.comment}</p>
                </div>
              </div>
              <div className="donor_body_info">
                <div className="donor_body_info_item">
                  <label>{myFormLang.tunduk}: </label>
                  <p>{myDonorApp.tunduk_account}</p>
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
