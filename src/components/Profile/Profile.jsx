import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfileMenu from "../../elements/profileElements/ProfileMenu/ProfileMenu";
import { useAuth } from "../../context/AuthContextProvider";
import { useLang } from "../../context/LangContextProvider";
import ProfileAppForms from "./ProfileAppForms/ProfileAppForms";

const Profile = () => {
  const { getUser, userData } = useAuth();
  const { profile } = useLang();
  const [changeElement, setChangeElement] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile_main">
      <ProfileMenu setChangeElement={setChangeElement} />

      <div className="profile_elements">
        {!userData ? (
          <p>Loading...</p>
        ) : (
          <>
            {!changeElement ? (
              <h3>
                {profile.welcome}! {userData.email}
              </h3>
            ) : changeElement === "/appForm" ? (
              <ProfileAppForms userData={userData} />
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
