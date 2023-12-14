import React, { useEffect } from "react";
import "./SurrogacuAppForms.css";
import { useForm } from "../../../context/FormContextProvider";

const SurrogacuAppForms = ({ donorAppID }) => {
  const { mySurrogacyApp, getOneSurrogacyApp } = useForm();

  useEffect(() => {
    getOneSurrogacyApp();
  }, [donorAppID]);

  return (
    <div className="myForm_main">
      <div className="myForm_donor">
        <h3 className="main_h3">Your Surrogacy Application form</h3>
        {mySurrogacyApp ? (
          <div className="myForm_donor_body">
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>First Name: </label>
                <p>{mySurrogacyApp.first_name}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Last Name: </label>
                <p>{mySurrogacyApp.last_name}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Date of Birth: </label>
                <p>{mySurrogacyApp.date_of_birth}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Nationality: </label>
                <p>{mySurrogacyApp.nationality}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Family status: </label>
                <p>{mySurrogacyApp.family_status}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Country of Residence: </label>
                <p>{mySurrogacyApp.family_status}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Residential address: </label>
                <p>{mySurrogacyApp.family_status}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Education: </label>
                <p>{mySurrogacyApp.family_status}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Current Job: </label>
                <p>{mySurrogacyApp.family_status}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Height: </label>
                <p>{mySurrogacyApp.family_status}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Weight: </label>
                <p>{mySurrogacyApp.family_status}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>How is your pregnancy going?: </label>
                <p>{mySurrogacyApp.family_status}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>What is your working blood pressure: </label>
                <p>{mySurrogacyApp.family_status}</p>
              </div>
            </div>
            <h3>Children</h3>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>How many?: </label>
                <p>{mySurrogacyApp.children.length}</p>
              </div>
            </div>
            {mySurrogacyApp.children.map((item) => (
              <div className="donor_body_info" id={item.id}>
                <div className="donor_body_info_item">
                  <label>Date of Birth: </label>
                  <p>{item.date_of_birth}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>Name: </label>
                  <p>{item.child_name}</p>
                </div>
                <div className="donor_body_info_item">
                  <label>At what stage did you give birth?: </label>
                  <p>{item.what_stage_was_birth}</p>
                </div>
                <br />
              </div>
            ))}

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>
                  Have you breastfed recently, how long ago did you finish
                  lactation, if your children are younger?:
                </label>
                <p>
                  {mySurrogacyApp.breastfeeding},{" "}
                  {mySurrogacyApp.when_breast_feed}
                </p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Have you used hormonal contraceptives: </label>
                <p>{mySurrogacyApp.usage_hormon_contr}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Blood type rh factor:</label>
                <p>{mySurrogacyApp.blood_type}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Menstrual cycle, how often?: </label>
                <p>{mySurrogacyApp.menstrual_cycle}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Date of the beginning of the last menstruation: </label>
                <p>{mySurrogacyApp.last_menstrual_cycle}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Previous gynecological diseases: </label>
                <p>{mySurrogacyApp.gynecological_history}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Were there any sexually transmitted diseases?: </label>
                <p>{mySurrogacyApp.sexually_transmitted_diseases}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>
                  Experience of participation in surrogacy proggrams?:{" "}
                </label>
                <p>{mySurrogacyApp.surrogacy_experience}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Do you smoke?: </label>
                <p>{mySurrogacyApp.smoking}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Do you drink alcohol?: </label>
                <p>{mySurrogacyApp.alcohol}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Have you had an surgeries? Which ones and when?: </label>
                <p>{mySurrogacyApp.operations_which_when}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>
                  Family history (presence of diseases in relatives?):{" "}
                </label>
                <p>{mySurrogacyApp.family_medical_history}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Do relatives have multiple pregnancies?: </label>
                <p>{mySurrogacyApp.multiple_pregnancies_in_family}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Why do you want to become a surrogate mother?: </label>
                <p>{mySurrogacyApp.why_surrogate_mother}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>
                  Where did you find out about the surrogacy program?:{" "}
                </label>
                <p>{mySurrogacyApp.how_learned_about_surrogacy_program}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>
                  Does you husband and other family members agree to participate
                  in the program?:{" "}
                </label>
                <p>{mySurrogacyApp.family_approval}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>
                  Have you been subject to disciplinary, administrative or
                  criminal liability?:{" "}
                </label>
                <p>{mySurrogacyApp.legal_issues}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Phone number: </label>
                <p>{mySurrogacyApp.phone_number}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Manager Name: </label>
                <p>{mySurrogacyApp.manager_name}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Photo of an international passport: </label>
                <img src={mySurrogacyApp.passport_photo} alt="Passport" />
              </div>
              <div className="donor_body_info_item">
                <label>Photo of the face: </label>
                <img src={mySurrogacyApp.face_photo} alt="Face" />
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Photo of the full body: </label>
                <img src={mySurrogacyApp.full_body_selfie} alt="Body" />
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SurrogacuAppForms;
