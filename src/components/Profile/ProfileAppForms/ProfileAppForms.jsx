import React from "react";

const ProfileAppForms = ({ userData }) => {
  return (
    <div className="myForm_main">
      <div className="myForm_donor">
        <h3>Your Surrogacy Application form</h3>
        {userData.donor_applications.map((item) => (
          <div></div>
        ))}
      </div>
      <div className="myForm_surrogacy"></div>
    </div>
  );
};

export default ProfileAppForms;
