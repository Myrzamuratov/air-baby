import React, { useEffect } from "react";
import "./SurrogacyForm.css";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm } from "../../context/FormContextProvider";
import Slider from "@mui/material/Slider";

const SurrogacyForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [familyStatus, setFamilyStatus] = useState("");
  const [adress, setAdress] = useState("");
  const [education, setEducation] = useState("");
  const [job, setJob] = useState("");
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(40);
  const [howsPregnancy, setHowsPregnancy] = useState("");
  const [arterialPressure, setArterialPressure] = useState("");
  const [children, setChildren] = useState([]);
  const [breastfeeding, setBreastfeeding] = useState("");
  const [whenBreastFeed, setWhenBreastFeed] = useState("");
  const [hormonControll, setHormonControll] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [menstrualCycle, setMenstrualCycle] = useState("");
  const [lastMenstrualCycle, setLastMenstrualCycle] = useState("");
  const [gynecologyHistory, setGynecologyHistory] = useState("");
  const [sexuallyTransmittedDiseases, setSexuallyTransmittedDiseases] =
    useState("");
  const [miscarriagesAbortions, setMiscarriagesAbortions] = useState("");
  const [abTerm, setAbTerm] = useState("");
  const [abQuanity, setAbQuanity] = useState("");
  const [abYear, setAbYear] = useState("");
  const [surrogacyExperience, setSurrogacyExperience] = useState("");
  const [smoking, setSmoking] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [chronicDiseases, setChronicDiseases] = useState("");
  const [operation, setOperation] = useState("");
  const [familyMedHistory, setFamilyMedHistory] = useState("");
  const [multiplePregnInFamily, setMultiplePregnInFamily] = useState("");
  const [reasonSurrogacy, setReasonSurrogacy] = useState("");
  const [howLearned, setHowLearned] = useState("");
  const [familyApproval, setFamilyApproval] = useState("");
  const [legalIssues, setLegalIssues] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [facePhoto, setFacePhoto] = useState();
  const [fullbodySelfie, setFullbodySelfie] = useState();
  const [passportPhoto, setPassportPhoto] = useState();
  const [managerName, setManagerName] = useState("");
  const { createSurrogacyApplication } = useForm();

  const createChildrenArray = (count) => {
    const newChildrenArray = [];
    for (let i = 0; i < count; i++) {
      newChildrenArray.push({
        child_name: "",
        date_of_birth: 0,
        what_stage_was_birth: 9,
      });
    }
    setChildren(newChildrenArray);
  };

  const handleInputChange = (index, property, value) => {
    const updatedChildrenArray = [...children];
    updatedChildrenArray[index][property] = value;
    setChildren(updatedChildrenArray);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const inputName = e.target.name;

    switch (inputName) {
      case "facePhoto":
        setFacePhoto(selectedFile);
        break;
      case "fullbodySelfie":
        setFullbodySelfie(selectedFile);
        break;
      case "passportPhoto":
        setPassportPhoto(selectedFile);
        break;
      default:
        // Действие по умолчанию, если имя инпута не соответствует ни одному из случаев
        break;
    }
  };

  function handleSave() {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !birthDate.trim() ||
      !nationality.trim() ||
      !familyStatus.trim() ||
      !adress.trim() ||
      !education.trim() ||
      !job.trim() ||
      !height.trim() ||
      !weight.trim() ||
      !howsPregnancy.trim() ||
      !arterialPressure.trim() ||
      !breastfeeding.trim() ||
      !whenBreastFeed.trim() ||
      !hormonControll.trim() ||
      !bloodType.trim() ||
      !menstrualCycle.trim() ||
      !lastMenstrualCycle.trim() ||
      !gynecologyHistory.trim() ||
      !sexuallyTransmittedDiseases.trim() ||
      !miscarriagesAbortions.trim() ||
      !surrogacyExperience.trim() ||
      !smoking.trim() ||
      !alcohol.trim() ||
      !chronicDiseases.trim() ||
      !operation.trim() ||
      !familyMedHistory.trim() ||
      !multiplePregnInFamily.trim() ||
      !reasonSurrogacy.trim() ||
      !howLearned.trim() ||
      !familyApproval.trim() ||
      !legalIssues.trim() ||
      !phoneNumber.trim()
    ) {
      alert("Fill in the fields");
      return;
    }
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("date_of_birth", birthDate);
    formData.append("nationality", nationality);
    formData.append("family_status", familyStatus);
    formData.append("address", adress);
    formData.append("education", education);
    formData.append("job", job);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("hows_pregnancy_g", howsPregnancy);
    formData.append("arterial_pressure", arterialPressure);
    formData.append("children", JSON.stringify(children));
    formData.append("breastfeeding", breastfeeding);
    formData.append("when_breast_feed", whenBreastFeed);
    formData.append("usage_hormon_contr", hormonControll);
    formData.append("blood_type", bloodType);
    formData.append("menstrual_cycle", menstrualCycle);
    formData.append("last_menstrual_cycle", lastMenstrualCycle);
    formData.append("gynecological_history", gynecologyHistory);
    formData.append(
      "sexually_transmitted_diseases",
      sexuallyTransmittedDiseases
    );
    formData.append("miscarriages_abortions", miscarriagesAbortions);
    formData.append("ab_term", abTerm);
    formData.append("ab_quantity", abQuanity);
    formData.append("ab_year", abYear);
    formData.append("surrogacy_experience", surrogacyExperience);
    formData.append("smoking", smoking);
    formData.append("alcohol", alcohol);
    formData.append("chronic_diseases", chronicDiseases);
    formData.append("operations_which_when", operation);
    formData.append("family_medical_history", familyMedHistory);
    formData.append("multiple_pregnancies_in_family", multiplePregnInFamily);
    formData.append("why_surrogate_mother", reasonSurrogacy);
    formData.append("how_learned_about_surrogacy_program", howLearned);
    formData.append("family_approval", familyApproval);
    formData.append("legal_issues", legalIssues);
    formData.append("phone_number", phoneNumber);
    formData.append("face_photo", facePhoto);
    formData.append("full_body_selfie", fullbodySelfie);
    formData.append("passport_photo", passportPhoto);
    formData.append("manager_name", managerName);
    console.log(formData);
    createSurrogacyApplication(formData);
  }

  const [birthDateError, setBirthDateError] = useState("");

  const [whenBreastFeedError, setWhenBreastFeedError] = useState("");

  const validateWhenBreastFeed = (input) => {
    const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!datePattern.test(input)) {
      setWhenBreastFeedError("Неверный формат даты.");
      return false;
    } else {
      setWhenBreastFeedError("");
      return true;
    }
  };
  const validateBirthDate = (input) => {
    const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;

    if (!datePattern.test(input)) {
      setBirthDateError("Invalid date format. Use YYYY/MM/DD.");
      return false;
    } else {
      setBirthDateError("");
      return true;
    }
  };

  const handleWhenBreastFeedChange = (e) => {
    const value = e.target.value;
    setWhenBreastFeed(value);
    validateWhenBreastFeed(value);
  };

  return (
    <div className="surrogacyMainDiv">
      <div className="surrogacyForm">
        <h3 className="surrogacyFormHeader">Mother form</h3>
        <div className="surrogacyFormBordy">
          <div className="inputDiv">
            <label>First name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="inputDiv">
            <label>Last name </label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <div className="inputDiv">
            <label>Date of birth</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder="YYYY/MM/DD"
            />
          </div>
          <div className="inputDiv">
            <label>Nationality</label>
            <input
              type="text"
              onChange={(e) => setNationality(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>Family status</label>
            <input
              type="text"
              onChange={(e) => setFamilyStatus(e.target.value)}
              placeholder="Type..."
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>Adress</label>
            <input
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              placeholder="Country,street,№"
            />
          </div>
          <div className="inputDiv">
            <label>Education</label>
            <input
              type="text"
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>Current job</label>
            <input
              type="text"
              onChange={(e) => setJob(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>Height {height} sm</label>
            <Slider
              style={{ color: "#0079A1" }}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              valueLabelDisplay="auto"
              min={150}
              max={180}
              step={1}
              valueLabelFormat={(value) => `${value} sm`}
            />
          </div>
          <div className="inputDiv">
            <label>Weight {weight} kg</label>
            <Slider
              style={{ color: "#0079A1" }}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              valueLabelDisplay="auto"
              min={40}
              max={90}
              step={1}
              valueLabelFormat={(value) => `${value} sm`}
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>How is your Pregnancy going?</label>
            <input
              type="text"
              onChange={(e) => setHowsPregnancy(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="aloneInput">
            <label>What is your working blood pressure?</label>
            <input
              type="text"
              onChange={(e) => setArterialPressure(e.target.value)}
              placeholder="Type"
            />
          </div>
        </div>
      </div>
      <div className="surrogacyForm">
        <h3 className="surrogacyFormHeader">Children</h3>
        <div className="surrogacyFormBordy">
          <div className="inputDiv" id="bigInput">
            <label>How many?</label>
            <input
              type="number"
              onChange={(e) => createChildrenArray(e.target.value)}
              placeholder="Type"
            />
          </div>
          {children.map((child, index) => (
            <div className="children" key={index} id={Date.now()}>
              <div className="inputDiv">
                <label>Name</label>
                <input
                  type="text"
                  value={child.child_name}
                  onChange={(e) =>
                    handleInputChange(index, "child_name", e.target.value)
                  }
                  placeholder="Type"
                />
              </div>
              <div className="inputDiv">
                <label>Date of birth</label>
                <input
                  type="text"
                  value={child.date_of_birth}
                  onChange={(e) =>
                    handleInputChange(index, "date_of_birth", e.target.value)
                  }
                />
              </div>
              <div className="inputDiv">
                <label>At what stage did you give birth?</label>
                <input
                  type="text"
                  value={child.what_stage_was_birth}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "what_stage_was_birth",
                      e.target.value
                    )
                  }
                  placeholder="Type"
                />
              </div>
            </div>
          ))}
          <div className="inputDiv">
            <label>Have you breastfed?</label>
            <select
              value={breastfeeding}
              onChange={(e) => setBreastfeeding(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="inputDiv">
            <label>When did you breastfeed?</label>
            <input
              type="date"
              value={whenBreastFeed}
              onChange={(e) => setWhenBreastFeed(e.target.value)}
              placeholder="YYYY/MM/DD"
            />
          </div>
          <div className="inputDiv">
            <label>Have you used hormonal contraceptives?</label>
            <select
              value={hormonControll}
              onChange={(e) => setHormonControll(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="inputDiv">
            <label>Blood type, Rh factor</label>
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
              <option value="">Type</option>
              <option value="o_RhD_positive">O(I)</option>
              <option value="a_RhD_positive">A(II)</option>
              <option value="b_RhD_positive">B(III)</option>
              <option value="ab_RhD_positive">AB(IV)</option>
            </select>
          </div>
          <div className="inputDiv">
            <label>Menstrual cycle, how often?</label>
            <input
              type="text"
              onChange={(e) => setMenstrualCycle(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>Date of the beginning of the last menstruation?</label>
            <input
              type="text"
              onChange={(e) => setLastMenstrualCycle(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>Previous gynecological diseases?</label>
            <input
              type="text"
              id="aloneInput"
              onChange={(e) => setGynecologyHistory(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>Were there any sexually transmitted diseases?</label>
            <input
              type="text"
              onChange={(e) => setSexuallyTransmittedDiseases(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>Have you had any miscarriages, abortions?</label>
            <select
              value={miscarriagesAbortions}
              onChange={(e) => setMiscarriagesAbortions(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          {miscarriagesAbortions === "yes" ? (
            <>
              <div className="inputDiv">
                <label>Abortion term</label>
                <input
                  type="text"
                  onChange={(e) => setAbTerm(e.target.value)}
                  placeholder="Type"
                />
              </div>
              <div className="inputDiv">
                <label>Abortion quanity</label>
                <input
                  type="number"
                  onChange={(e) => setAbQuanity(e.target.value)}
                  placeholder="Type"
                />
              </div>
              <div className="inputDiv" id="bigInput">
                <label>Year of last abortion</label>
                <input
                  id="aloneInput"
                  type="text"
                  onChange={(e) => setAbYear(e.target.value)}
                  placeholder="Type"
                />
              </div>
            </>
          ) : null}
          <div className="inputDiv" id="bigInput">
            <label>Experience of participation in surrogacy programs?</label>
            <select
              value={surrogacyExperience}
              onChange={(e) => setSurrogacyExperience(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="inputDiv">
            <label style={{ textAlign: "center" }}>Do you smoke?</label>
            <FormControlLabel
              style={{ display: "flex", justifyContent: "center" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={smoking === "yes"}
                  onClick={() => setSmoking("yes")}
                  name="yes"
                />
              }
              label="Yes"
            />
            <FormControlLabel
              style={{ display: "flex", justifyContent: "center" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={smoking === "no"}
                  onClick={() => setSmoking("no")}
                  name="no"
                />
              }
              label="No"
            />
          </div>
          <div className="inputDiv">
            <label style={{ textAlign: "center" }}>Do you drink alcohol?</label>
            <FormControlLabel
              style={{ display: "flex", justifyContent: "center" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={alcohol === "yes"}
                  onClick={() => setAlcohol("yes")}
                  name="yes"
                />
              }
              label="Yes"
            />
            <FormControlLabel
              style={{ display: "flex", justifyContent: "center" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={alcohol === "no"}
                  onClick={() => setAlcohol("no")}
                  name="no"
                />
              }
              label="No"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>
              Do you have any chronic diseases? If so, what are they?
            </label>
            <input
              type="text"
              onChange={(e) => setChronicDiseases(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>Have you had any surgeries? Which ones and when?</label>
            <input
              type="text"
              onChange={(e) => setOperation(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>Family history: (presence of diseases in relatives)?</label>
            <input
              type="text"
              onChange={(e) => setFamilyMedHistory(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>Do relatives have multiple pregnancies?</label>
            <select
              value={multiplePregnInFamily}
              onChange={(e) => setMultiplePregnInFamily(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="inputDiv" id="bigInput">
            <label>Why do you want to become a surrogate mother?</label>
            <input
              type="text"
              onChange={(e) => setReasonSurrogacy(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>Where did you find out about the surrogacy program?</label>
            <input
              type="text"
              onChange={(e) => setHowLearned(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>
              Does your husband and other family members agree to participate in
              the program?
            </label>
            <select
              value={familyApproval}
              onChange={(e) => setFamilyApproval(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="inputDiv" id="bigInput">
            <label>
              Have you been subject to disciplinary, administrative or criminal
              liability?
            </label>
            <select
              value={legalIssues}
              onChange={(e) => setLegalIssues(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="inputDiv">
            <label>Photo of an international passport?</label>
            <input
              type="file"
              onChange={handleFileChange}
              name="passportPhoto"
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>Phone number,(Whatsapp)</label>
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>Photo of the face</label>
            <input
              type="file"
              onChange={handleFileChange}
              name="facePhoto"
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>Manager name</label>
            <input
              type="text"
              onChange={(e) => setManagerName(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>Photo of the full body</label>
            <input
              type="file"
              onChange={handleFileChange}
              name="fullbodySelfie"
              placeholder="Type"
            />
          </div>
        </div>
        <div>
          <button className="surrogacy_button" onClick={handleSave}>
            Submit
          </button>
          <button className="surrogacy_button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SurrogacyForm;
