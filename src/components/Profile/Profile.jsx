import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfileMenu from "../../elements/profileElements/ProfileMenu/ProfileMenu";
import { useAuth } from "../../context/AuthContextProvider";
import { useLang } from "../../context/LangContextProvider";
import { useForm } from "../../context/FormContextProvider";
import ProfileAppForms from "./ProfileAppForms/ProfileAppForms";
import SurrogacuAppForms from "./SurrogacuAppForms/SurrogacuAppForms";
import DonorList from "./DonorList/DonorList";

const Profile = () => {
  const { getUser, userData } = useAuth();
  const { donorListForAlowwed, donorList } = useForm();
  const { profile } = useLang();
  const [changeElement, setChangeElement] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    donorListForAlowwed();
  }, []); // Вызываем donorListForAlowwed без условия

  const isCentered =
    !changeElement ||
    (!userData && <p>Loading...</p>) ||
    (changeElement === "/appForm" &&
      userData &&
      userData.donor_applications &&
      userData.surrogacy_applications &&
      userData.donor_applications.length === 0 &&
      userData.surrogacy_applications.length === 0);

  return (
    <div className="profile_main">
      <ProfileMenu setChangeElement={setChangeElement} />

      <div
        className="profile_elements"
        style={{
          justifyContent: isCentered ? "center" : "start",
        }}
      >
        {!userData ? (
          <p>Loading...</p>
        ) : (
          <>
            {!changeElement ? (
              <h3>
                {profile.welcome}! {userData.email}
              </h3>
            ) : changeElement === "/appForm" ? (
              userData.donor_applications
                .map((item) => (
                  <ProfileAppForms donorAppID={item.id} key={item.id} />
                ))
                .concat(
                  userData.surrogacy_applications.map((item) => (
                    <SurrogacuAppForms donorAppID={item.id} key={item.id} />
                  ))
                )
            ) : userData.is_allowed ? (
              donorList && donorList.results && donorList.results.length > 0 ? (
                donorList.results.map((item) => (
                  <DonorList donor={item} key={item.id} />
                ))
              ) : (
                <p>No donors available.</p>
              )
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
