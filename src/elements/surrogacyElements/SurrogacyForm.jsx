import React, { useEffect } from "react";
import "./SurrogacyForm.css";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm } from "../../context/FormContextProvider";
import Slider from "@mui/material/Slider";
import { useLang } from "../../context/LangContextProvider";
import { CircularProgress } from "@mui/material";

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
  const [email, setEmail] = useState("");
  const [tunduk, setTunduk] = useState("");
  const { createSurrogacyApplication, loading } = useForm();

  const createChildrenArray = (count) => {
    const newChildrenArray = [];
    for (let i = 0; i < count; i++) {
      newChildrenArray.push({
        child_name: "",
        date_of_birth: 0,
        what_stage_was_birth: 0,
        how_born: "",
      });
    }
    setChildren(newChildrenArray);
  };

  const handleInputChange = (index, property, value) => {
    const updatedChildrenArray = [...children];
    updatedChildrenArray[index][property] = value;
    setChildren(updatedChildrenArray);
  };
  const [facePhotoPreview, setFacePhotoPreview] = useState(null);
  const [passportPhotoPreview, setPassportPhotoPreview] = useState(null);
  const [fullBodyPhotoPreview, setFullBodyPhotoPreview] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const inputName = e.target.name;

    switch (inputName) {
      case "facePhoto":
        setFacePhoto(selectedFile);
        if (selectedFile) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setFacePhotoPreview(e.target.result);
          };
          reader.readAsDataURL(selectedFile);
        } else {
          setFacePhotoPreview(null);
        }
        break;

      case "fullbodySelfie":
        setFullbodySelfie(selectedFile);
        if (selectedFile) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setFullBodyPhotoPreview(e.target.result);
          };
          reader.readAsDataURL(selectedFile);
        } else {
          setFullBodyPhotoPreview(null);
        }
        break;

      case "passportPhoto":
        setPassportPhoto(selectedFile);
        if (selectedFile) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setPassportPhotoPreview(e.target.result);
          };
          reader.readAsDataURL(selectedFile);
        } else {
          setPassportPhotoPreview(null);
        }
        break;
      default:
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
    formData.append("tunduk_account", tunduk);
    formData.append("email", email);
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

  const { lang, translationsEgg } = useLang();
  return (
    <div className="surrogacyMainDiv">
      <div className="surrogacyForm">
        <h3 className="surrogacyFormHeader">{translationsEgg.motherForm}</h3>
        <div className="surrogacyFormBordy">
          <div className="inputDiv">
            <label>{translationsEgg.firstName}</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder={translationsEgg.firstName}
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.lastName}</label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder={translationsEgg.lastName}
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.dateOfBirth}</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder="YYYY/MM/DD"
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.nationality}</label>
            <input
              type="text"
              onChange={(e) => setNationality(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.maritalStatus}</label>
            <input
              type="text"
              onChange={(e) => setFamilyStatus(e.target.value)}
              placeholder="Type..."
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.address}</label>
            <input
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              placeholder="Country,street,№"
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.education}</label>
            <input
              type="text"
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.currentJob}</label>
            <input
              type="text"
              onChange={(e) => setJob(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>
              {translationsEgg.height} {height} sm
            </label>
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
            <label>
              {translationsEgg.weight} {weight} kg
            </label>
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
            <label>{translationsEgg.howPregnancy}</label>
            <input
              type="text"
              onChange={(e) => setHowsPregnancy(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.bloodPresure}</label>
            <input
              type="text"
              id="aloneInput"
              onChange={(e) => setArterialPressure(e.target.value)}
              placeholder="Type"
            />
          </div>
        </div>
      </div>
      <div className="surrogacyForm">
        <div className="surrogacyFormBordy">
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.howMany}</label>
            <input
              type="number"
              onChange={(e) => createChildrenArray(e.target.value)}
              placeholder="Type"
            />
          </div>
          {children.map((child, index) => (
            <div className="children" key={index} id={Date.now()}>
              <div className="inputDiv">
                <label>{translationsEgg.name}</label>
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
                <label>{translationsEgg.dateOfBirth}</label>
                <input
                  type="data"
                  value={child.date_of_birth}
                  onChange={(e) =>
                    handleInputChange(index, "date_of_birth", e.target.value)
                  }
                />
              </div>
              <div className="inputDiv">
                <label>{translationsEgg.whatStage}</label>
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
              <div className="inputDiv">
                <label>{translationsEgg.delivery}</label>
                <select
                  value={child.how_born}
                  onChange={(e) =>
                    handleInputChange(index, "how_born", e.target.value)
                  }
                >
                  <option value="">Type</option>
                  <option value={translationsEgg.cesarean}>
                    {translationsEgg.cesarean}
                  </option>
                  <option value={translationsEgg.natural}>
                    {translationsEgg.natural}
                  </option>
                </select>
              </div>
            </div>
          ))}
          <div className="inputDiv">
            <label>{translationsEgg.breastfed}</label>
            <select
              value={breastfeeding}
              onChange={(e) => setBreastfeeding(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">{translationsEgg.yes}</option>
              <option value="no">{translationsEgg.no}</option>
            </select>
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.whenBreastfed}</label>
            <input
              type="date"
              value={whenBreastFeed}
              onChange={(e) => setWhenBreastFeed(e.target.value)}
              placeholder="YYYY/MM/DD"
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.hormonalContraceptives}</label>
            <select
              value={hormonControll}
              onChange={(e) => setHormonControll(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">{translationsEgg.yes}</option>
              <option value="no">{translationsEgg.no}</option>
            </select>
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.bloodType}</label>
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
              <option value="">Type</option>
              {translationsEgg.bloodTypeValues.map((item) => (
                <option key={item.name} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.howOftenMenstrualCycle}</label>
            <input
              type="text"
              onChange={(e) => setMenstrualCycle(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.dateLastMenstrualCycle}</label>
            <input
              type="date"
              onChange={(e) => setLastMenstrualCycle(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.gynecologyDiseases}</label>
            <input
              type="text"
              id="aloneInput"
              onChange={(e) => setGynecologyHistory(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.sexyalydiseases}</label>
            <input
              type="text"
              onChange={(e) => setSexuallyTransmittedDiseases(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.abortionHave}</label>
            <select
              value={miscarriagesAbortions}
              onChange={(e) => setMiscarriagesAbortions(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">{translationsEgg.yes}</option>
              <option value="no">{translationsEgg.no}</option>
            </select>
          </div>
          {miscarriagesAbortions === "yes" ? (
            <>
              <div className="inputDiv">
                <label>{translationsEgg.abortionTerms}</label>
                <input
                  type="text"
                  onChange={(e) => setAbTerm(e.target.value)}
                  placeholder="Type"
                />
              </div>
              <div className="inputDiv">
                <label>{translationsEgg.abortionQuanity}</label>
                <Slider
                  style={{ color: "#0079A1" }}
                  value={abQuanity}
                  onChange={(e) => setAbQuanity(e.target.value)}
                  valueLabelDisplay="auto"
                  min={0}
                  max={10}
                  step={1}
                  valueLabelFormat={(value) => `${value}`}
                />
              </div>
              <div className="inputDiv" id="bigInput">
                <label>{translationsEgg.lastAbortion}</label>
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
            <label>{translationsEgg.surrogacyExperience}</label>
            <select
              value={surrogacyExperience}
              onChange={(e) => setSurrogacyExperience(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">{translationsEgg.yes}</option>
              <option value="no">{translationsEgg.no}</option>
            </select>
          </div>
          <div className="inputDiv" id="checkboxInput">
            <label style={{ textAlign: "center" }}>
              {translationsEgg.doYouSmoke}
            </label>
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
              label={translationsEgg.yes}
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
              label={translationsEgg.no}
            />
          </div>
          <div className="inputDiv" id="checkboxInput">
            <label style={{ textAlign: "center" }}>
              {translationsEgg.doYouDrink}
            </label>
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
              label={translationsEgg.yes}
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
              label={translationsEgg.no}
            />
          </div>
          <div className="inputDiv" id="checkboxInput">
            <label style={{ textAlign: "center" }}>
              {translationsEgg.tunduk}
            </label>
            <FormControlLabel
              style={{ display: "flex", justifyContent: "center" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={tunduk === "yes"}
                  onClick={() => setTunduk("yes")}
                  name="yes"
                />
              }
              label={translationsEgg.yes}
            />
            <FormControlLabel
              style={{ display: "flex", justifyContent: "center" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={tunduk === "no"}
                  onClick={() => setTunduk("no")}
                  name="no"
                />
              }
              label={translationsEgg.no}
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.chronicDiseases}</label>
            <input
              type="text"
              onChange={(e) => setChronicDiseases(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.haveSurgeries}</label>
            <input
              type="text"
              onChange={(e) => setOperation(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.famHistory}</label>
            <input
              type="text"
              onChange={(e) => setFamilyMedHistory(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.multiplyPregnancy}</label>
            <select
              value={multiplePregnInFamily}
              onChange={(e) => setMultiplePregnInFamily(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">{translationsEgg.yes}</option>
              <option value="no">{translationsEgg.no}</option>
            </select>
          </div>

          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.whySurrogacy}</label>
            <input
              type="text"
              onChange={(e) => setReasonSurrogacy(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.whereYouKnow}</label>
            <input
              type="text"
              onChange={(e) => setHowLearned(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.familyApproval}</label>
            <select
              value={familyApproval}
              onChange={(e) => setFamilyApproval(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">{translationsEgg.yes}</option>
              <option value="no">{translationsEgg.no}</option>
            </select>
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.criminal}</label>
            <select
              value={legalIssues}
              onChange={(e) => setLegalIssues(e.target.value)}
            >
              <option value="">Type</option>
              <option value="yes">{translationsEgg.yes}</option>
              <option value="no">{translationsEgg.no}</option>
            </select>
          </div>
          <div className="inputDiv"></div>

          <div className="image_input_div" id="bigInput">
            <label>{translationsEgg.passportPhoto}</label>
            <div className="image_input">
              <input
                type="file"
                onChange={handleFileChange}
                name="passportPhoto"
                placeholder="Type"
              />
              {passportPhotoPreview ? (
                <div className="image_div">
                  <img
                    src={passportPhotoPreview}
                    alt="Passport photo Preview"
                  />
                </div>
              ) : (
                <div className="image_div">{translationsEgg.photo}</div>
              )}
            </div>
          </div>

          <div className="image_input_div" id="bigInput">
            <label>{translationsEgg.facePhoto}</label>
            <div className="image_input">
              <input
                type="file"
                onChange={handleFileChange}
                name="facePhoto"
                placeholder="Type"
              />
              {facePhotoPreview ? (
                <div className="image_div">
                  <img src={facePhotoPreview} alt="Face photo Preview" />
                </div>
              ) : (
                <div className="image_div">{translationsEgg.photo}</div>
              )}
            </div>
          </div>

          <div className="image_input_div" id="bigInput">
            <label>{translationsEgg.fullBodyPhoto}</label>
            <div className="image_input">
              <input
                type="file"
                onChange={handleFileChange}
                name="fullbodySelfie"
                placeholder="Type"
              />
              {fullBodyPhotoPreview ? (
                <div className="image_div">
                  <img src={fullBodyPhotoPreview} alt="Full photo Preview" />
                </div>
              ) : (
                <div className="image_div">{translationsEgg.photo}</div>
              )}
            </div>
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.managerName}</label>
            <input
              type="text"
              onChange={(e) => setManagerName(e.target.value)}
              placeholder="Type"
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.phoneNumberWhatsApp}</label>
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Type"
            />
          </div>

          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.email}</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type"
            />
          </div>
        </div>
        <div className="button_div">
          {loading ? (
            <CircularProgress />
          ) : (
            <button className="surrogacy_button" onClick={handleSave}>
              {translationsEgg.submitButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurrogacyForm;
