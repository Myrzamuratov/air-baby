import React, { useEffect } from "react";
import { useForm } from "../../../context/FormContextProvider";
import "./ProfileAppForms.css";

const ProfileAppForms = ({ donorAppID }) => {
  console.log(donorAppID);
  const { getOneDonorApp, myDonorApp } = useForm();
  useEffect(() => {
    getOneDonorApp(donorAppID);
  }, [donorAppID]);
  return (
    <div className="myForm_main">
      <div className="myForm_donor">
        <h3 className="main_h3">Your Surrogacy Application form</h3>
        {myDonorApp ? (
          <div className="myForm_donor_body">
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>First Name: </label>
                <p>{myDonorApp.first_name}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Last Name: </label>
                <p>{myDonorApp.last_name}</p>
              </div>
            </div>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Date of birth: </label>
                <p>{myDonorApp.date_of_birth}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Nationality: </label>
                <p>{myDonorApp.nationality}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Country of Residence: </label>
                <p>{myDonorApp.country_of_residence}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Residential address: </label>
                <p>{myDonorApp.address}</p>
              </div>
            </div>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Education: </label>
                <p>{myDonorApp.education}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Current job: </label>
                <p>{myDonorApp.current_job}</p>
              </div>
            </div>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Marital Status: </label>
                <p>{myDonorApp.height}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Experience of Donation: </label>
                <p>{myDonorApp.experience_of_donation}</p>
              </div>
            </div>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Willingness to Travel: </label>
                <p>{myDonorApp.willingness_to_travel}</p>
              </div>
            </div>
            <h3>Physical Characteristics</h3>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Weight: </label>
                <p>{myDonorApp.weight}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Height: </label>
                <p>{myDonorApp.height}</p>
              </div>
            </div>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Blood type: </label>
                <p>{myDonorApp.physical_characteristics}</p>
              </div>
            </div>

            <h3>Children/family</h3>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Number of Children: </label>
                <p>{myDonorApp.children}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Number of Siblings: </label>
                <p>{myDonorApp.brothers_sisters}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Mother’s Hair color: </label>
                <p>{myDonorApp.mothers_hair_colour}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Mother’s Eye color: </label>
                <p>{myDonorApp.mothers_eye_colour}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Father’s Hair color: </label>
                <p>{myDonorApp.fathers_hair_colour}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Father’s Eye color: </label>
                <p>{myDonorApp.fathers_eye_colour}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Hobby: </label>
                <p>{myDonorApp.hobby}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Personality type: </label>
                <p>{myDonorApp.personality_type}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Health Status: </label>
                <p>{myDonorApp.health_status}</p>
              </div>
            </div>
            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Photo of the face: </label>
                <img src={myDonorApp.photo_fas} />
              </div>
              <div className="donor_body_info_item">
                <label>Photo of the full body: </label>
                <img src={myDonorApp.photo_full} />
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Phone Number: </label>
                <p>{myDonorApp.phone_number}</p>
              </div>
              <div className="donor_body_info_item">
                <label>Email: </label>
                <p>{myDonorApp.user}</p>
              </div>
            </div>

            <div className="donor_body_info">
              <div className="donor_body_info_item">
                <label>Comment or Message: </label>
                <p>{myDonorApp.comment}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="myForm_surrogacy"></div>
    </div>
  );
};

export default ProfileAppForms;
