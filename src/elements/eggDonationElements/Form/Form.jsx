import React, { useEffect, useState } from "react";
import "./Form.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import { useForm } from "../../../context/FormContextProvider";
import { useLang } from "../../../context/LangContextProvider";
import { logRoles } from "@testing-library/react";
import ExamplePhotos from "../../ExamplePhotos/ExamplePhotos";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [birthDate, setBirthDate] = useState("");
  const [dateOfMenstrualCycle, setDateOfMenstrualCycle] = useState("");
  const [nationality, setNationality] = useState("");
  const [countryOfResidence, setCountryOfResidence] = useState("");
  const [education, setEducation] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [donationExp, setDonationExp] = useState("");
  const [address, setAddress] = useState("");
  const [travel, setTravel] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [height, setHeght] = useState(160);
  const [weight, setWeight] = useState(50);
  const [eyeColor, setEyeColor] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [children, setChildren] = useState(0);
  const [siblings, setSiblings] = useState(0);
  const [motherHair, setMotherHair] = useState("");
  const [fatherHair, setFatherHair] = useState("");
  const [motherEye, setMotherEye] = useState("");
  const [fatherEye, setFatherEye] = useState("");
  const [hobby, setHobby] = useState("");
  const [personalityType, setPersonalityType] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [facePhoto, setFacePhoto] = useState();
  const [sidePhoto, setSidePhoto] = useState();
  const [fullBodyPhoto, setFullBodyPhoto] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const { createDonnorApplication } = useForm();

  function handleSave() {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !age ||
      !birthDate.trim() ||
      !dateOfMenstrualCycle.trim() ||
      !nationality.trim() ||
      !countryOfResidence.trim() ||
      !education.trim() ||
      !currentJob.trim() ||
      !martialStatus.trim() ||
      !donationExp.trim() ||
      !travel.trim() ||
      !bloodType.trim() ||
      !motherHair.trim() ||
      !fatherHair.trim() ||
      !motherEye.trim() ||
      !fatherEye.trim() ||
      !hobby.trim() ||
      !personalityType.trim() ||
      !healthStatus.trim() ||
      !phoneNumber.trim() ||
      !comment.trim()
    ) {
      alert("Fill in the fields");
      return;
    }
    const formData = new FormData();
    formData.append("owner_email", email);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("age", age);
    formData.append("date_of_birth", birthDate);
    formData.append("date_of_menstrual_cycle", dateOfMenstrualCycle);
    formData.append("nationality", nationality);
    formData.append("country_of_residence", countryOfResidence);
    formData.append("education", education);
    formData.append("current_job", currentJob);
    formData.append("address", address);
    formData.append("marital_status", martialStatus);
    formData.append("experience_of_donation", donationExp);
    formData.append("willingness_to_travel", travel);
    formData.append("physical_characteristics", bloodType);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("mothers_hair_colour", motherHair);
    formData.append("mothers_eye_colour", motherEye);
    formData.append("children", children);
    formData.append("brothers_sisters", siblings);
    formData.append("fathers_hair_colour", fatherHair);
    formData.append("fathers_eye_colour", fatherEye);
    formData.append("health_status", healthStatus);
    formData.append("personality_type", personalityType);
    formData.append("hobby", hobby);
    formData.append("phone_number", phoneNumber);
    formData.append("comment", comment);
    formData.append("photo_fas", facePhoto);
    formData.append("photo_full", fullBodyPhoto);
    formData.append("photo_side", sidePhoto);
    createDonnorApplication(formData);
  }

  useEffect(() => {
    const calculateAge = (birthdate) => {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();

      // Учёт месяца рождения и текущего месяца
      const birthMonth = birthDate.getMonth();
      const currentMonth = today.getMonth();
      if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return age;
    };

    if (birthDate) {
      const newAge = calculateAge(birthDate);
      setAge(newAge);
    }
  }, [birthDate]);

  const [facePhotoPreview, setFacePhotoPreview] = useState(null);
  const [sidePhotoPreview, setSidePhotoPreview] = useState(null);
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
      case "sidePhoto":
        setSidePhoto(selectedFile);
        if (selectedFile) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setSidePhotoPreview(e.target.result);
          };
          reader.readAsDataURL(selectedFile);
        } else {
          setSidePhotoPreview(null);
        }
        break;
      case "fullbodyPhoto":
        setFullBodyPhoto(selectedFile);
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
      default:
        // Действие по умолчанию, если имя инпута не соответствует ни одному из случаев
        break;
    }
  };
  useEffect(() => {
    console.log(education);
  }, [education]);
  const { lang, translationsEgg } = useLang();
  return (
    <div className="eggDonationMainDiv">
      <div className="eggDonationForm">
        <h3 className="eggDonationFormHeader">
          {translationsEgg.donationForm}
        </h3>
        <div className="eggDonationFormBody">
          <div className="inputDiv">
            <label>{translationsEgg.firstName}</label>
            <input
              type="text"
              placeholder={translationsEgg.firstName}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.lastName}</label>
            <input
              type="text"
              placeholder={translationsEgg.lastName}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.dateOfBirth}</label>
            <input
              name="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder="YYYY/MM/DD"
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.dateOfMenstrualCycle}</label>
            <input
              name="menstrualDate"
              type="date"
              value={dateOfMenstrualCycle}
              onChange={(e) => setDateOfMenstrualCycle(e.target.value)}
              placeholder="YYYY/MM/DD"
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.nationality}</label>
            <input
              type="text"
              placeholder="Type"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.countryOfResidence}</label>
            <input
              type="text"
              placeholder="Type"
              value={countryOfResidence}
              onChange={(e) => setCountryOfResidence(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.education}</label>
            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            >
              <option value="">Type</option>
              {translationsEgg.educationValues.map((item) => (
                <option key={item.name} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.currentJob}</label>
            <input
              type="text"
              placeholder="Type"
              value={currentJob}
              onChange={(e) => setCurrentJob(e.target.value)}
            />
          </div>
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.address}</label>
            <input
              type="text"
              placeholder="Type"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="inputDiv" id="checkboxDiv">
            <label style={{ textAlign: "start" }}>
              {translationsEgg.maritalStatus}
            </label>
            <FormControlLabel
              style={{ display: "flex", justifyContent: "start" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={martialStatus === "single"}
                  onClick={() => setMartialStatus("single")}
                  name="Single"
                />
              }
              label={
                lang === "en"
                  ? "Single"
                  : lang === "ru"
                  ? "Холост/Не замужем"
                  : "单身"
              }
            />
            <FormControlLabel
              style={{ display: "flex", justifyContent: "start" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={martialStatus === "married"}
                  onClick={() => setMartialStatus("married")}
                  name="Married"
                />
              }
              label={
                lang === "en"
                  ? "Married"
                  : lang === "ru"
                  ? "Замужем/Женат"
                  : "已婚"
              }
            />
            <FormControlLabel
              style={{ display: "flex", justifyContent: "start" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={martialStatus === "widowed"}
                  onClick={() => setMartialStatus("widowed")}
                  name="Widowed"
                />
              }
              label={
                lang === "en"
                  ? "Widowed"
                  : lang === "ru"
                  ? "Вдовец/Вдова"
                  : "寡居"
              }
            />
            <FormControlLabel
              style={{ display: "flex", justifyContent: "start" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={martialStatus === "divorced"}
                  onClick={() => setMartialStatus("divorced")}
                  name="Divorced"
                />
              }
              label={
                lang === "en"
                  ? "Divorced"
                  : lang === "ru"
                  ? "Разведен/Разведена"
                  : "离婚"
              }
            />
          </div>
          <div className="inputDiv" id="checkboxDiv">
            <label style={{ textAlign: "start" }}>
              {translationsEgg.experienceOfDonation}
            </label>
            <FormControlLabel
              style={{ display: "flex", justifyContent: "start" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={donationExp === "yes"}
                  onClick={() => setDonationExp("yes")}
                  name="Yes"
                />
              }
              label={lang === "en" ? "Yes" : lang === "ru" ? "Да" : "是"}
            />
            <FormControlLabel
              style={{ display: "flex", justifyContent: "start" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={donationExp === "no"}
                  onClick={() => setDonationExp("no")}
                  name="No"
                />
              }
              label={lang === "en" ? "No" : lang === "ru" ? "Нет" : "没有"}
            />
          </div>
          <div className="inputDiv" id="checkboxDiv">
            <label style={{ textAlign: "start" }}>
              {translationsEgg.willingnessToTravel}
            </label>
            <FormControlLabel
              style={{ display: "flex", justifyContent: "start" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={travel === "yes"}
                  onClick={() => setTravel("yes")}
                  name="Yes"
                />
              }
              label={lang === "en" ? "Yes" : lang === "ru" ? "Да" : "是"}
            />
            <FormControlLabel
              style={{ display: "flex", justifyContent: "start" }}
              control={
                <Checkbox
                  id="checkbox"
                  checked={travel === "no"}
                  onClick={() => setTravel("no")}
                  name="No"
                />
              }
              label={lang === "en" ? "No" : lang === "ru" ? "Нет" : "没有"}
            />
          </div>
        </div>
      </div>
      <div className="eggDonationForm">
        <h3 className="eggDonationFormHeader">
          {translationsEgg.physicalCharacteristics}
        </h3>
        <div className="eggDonationFormBody">
          <div className="inputDiv" id="bigInput">
            <label>{translationsEgg.bloodType}</label>
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              id="aloneInput"
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
            <label>
              {translationsEgg.height} {height} sm
            </label>
            <Slider
              style={{ color: "#0079A1" }}
              value={height}
              onChange={(e) => setHeght(e.target.value)}
              valueLabelDisplay="auto"
              min={160}
              max={200}
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
              min={50}
              max={100}
              step={1}
              valueLabelFormat={(value) => `${value} kg`}
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.eyeColor}</label>
            <input
              type="text"
              placeholder="Type"
              value={eyeColor}
              onChange={(e) => setEyeColor(e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <label>{translationsEgg.hairColor}</label>
            <input
              type="text"
              placeholder="Type"
              value={hairColor}
              onChange={(e) => setHairColor(e.target.value)}
            />
          </div>
        </div>
        <div className="eggDonationForm">
          <h3 className="eggDonationFormHeader">
            {translationsEgg.infoAboutChildren}
          </h3>
          <div className="eggDonationFormBody">
            <div className="inputDiv">
              <label>
                {translationsEgg.numberOfChildren}: {children}
              </label>
              <Slider
                style={{ color: "#0079A1" }}
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                step={1}
                valueLabelFormat={(value) => `${value}`}
              />
            </div>
            <div className="inputDiv">
              <label>
                {translationsEgg.numberOfSiblings}: {siblings}{" "}
              </label>
              <Slider
                style={{ color: "#0079A1" }}
                value={siblings}
                onChange={(e) => setSiblings(e.target.value)}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                step={1}
                valueLabelFormat={(value) => `${value}`}
              />
            </div>
            <div className="inputDiv">
              <label>{translationsEgg.mothersHairColor}</label>
              <input
                type="text"
                placeholder="Type"
                value={motherHair}
                onChange={(e) => setMotherHair(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label>{translationsEgg.mothersEyeColor}</label>
              <input
                type="text"
                placeholder="Type"
                value={motherEye}
                onChange={(e) => setMotherEye(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label>{translationsEgg.fathersHairColor}</label>
              <input
                type="text"
                placeholder="Type"
                value={fatherHair}
                onChange={(e) => setFatherHair(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label>{translationsEgg.fathersEyeColor}</label>
              <input
                type="text"
                placeholder="Type"
                value={fatherEye}
                onChange={(e) => setFatherEye(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label>{translationsEgg.hobby}</label>
              <input
                type="text"
                placeholder="Type"
                value={hobby}
                onChange={(e) => setHobby(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label>{translationsEgg.personalityType}</label>
              <select
                value={personalityType}
                onChange={(e) => setPersonalityType(e.target.value)}
              >
                <option value="">Type</option>
                {translationsEgg.personalityTypeValues.map((item) => (
                  <option key={item.name} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputDiv" id="bigInput">
              <label style={{ textAlign: "start" }}>
                {translationsEgg.healthStatus}
              </label>
              <FormControlLabel
                style={{ display: "flex", justifyContent: "start" }}
                control={
                  <Checkbox
                    id="checkbox"
                    checked={healthStatus === "healthy"}
                    onClick={() => setHealthStatus("healthy")}
                    name="Healthy"
                  />
                }
                label={
                  lang === "en"
                    ? "Healthy"
                    : lang === "ru"
                    ? "Здоровый"
                    : "健康"
                }
              />
              <FormControlLabel
                style={{ display: "flex", justifyContent: "start" }}
                id="aloneInput"
                control={
                  <Checkbox
                    id="checkbox"
                    checked={healthStatus === "not_healthy"}
                    onClick={() => setHealthStatus("not_healthy")}
                    name="Not healthy"
                  />
                }
                label={
                  lang === "en"
                    ? "Not healthy"
                    : lang === "ru"
                    ? "Нездоровый"
                    : "不健康"
                }
              />
            </div>
            <div className="image_input_div">
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

            <div className="image_input_div">
              <label>{translationsEgg.sidePhoto}</label>

              <div className="image_input">
                <input
                  type="file"
                  onChange={handleFileChange}
                  name="sidePhoto"
                  placeholder="Type"
                />
                {sidePhotoPreview ? (
                  <div className="image_div">
                    <img src={sidePhotoPreview} alt="Side photo Preview" />
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
                  name="fullbodyPhoto"
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
            <ExamplePhotos />
          </div>
        </div>
        <div className="eggDonationForm">
          <h3 className="eggDonationFormHeader">
            {translationsEgg.contactData}
          </h3>
          <div className="eggDonationFormBody">
            <div className="inputDiv">
              <label>{translationsEgg.phoneNumber}</label>
              <input
                type="text"
                value={phoneNumber}
                placeholder="+996 (000) 000-000"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label>{translationsEgg.email}</label>
              <input
                type="email"
                value={email}
                placeholder="Email (optional)"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputDiv" id="bigInput">
              <label>{translationsEgg.comment}</label>
              <input
                type="text"
                value={comment}
                placeholder="Type"
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <button className="surrogacy_button" onClick={handleSave}>
            {translationsEgg.submitButton}
          </button>
          <button className="surrogacy_button">
            {translationsEgg.saveButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
