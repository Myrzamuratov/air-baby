import React, { useEffect, useState } from "react";
import "./Register.css";
import image from "../../images/Vector.png";
import CircularProgress from "@mui/material/CircularProgress";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { Password } from "@mui/icons-material";

const Register = () => {
  const { handleRegister, handleLogin, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [password2Dirty, setPassword2Dirty] = useState(false);

  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty."
  );
  const [password2Error, setPassword2Error] = useState(
    "Password cannot be empty."
  );

  const [checkbox, setCheckbox] = useState(false);
  const [checkCheckbox, setCheckCheckbox] = useState(true);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || password2Error || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, password2Error]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (e.target.value.length > 129) {
      setPasswordError("Password is too long");
    } else {
      setPasswordError("");
    }
  };

  const password2Handler = (e) => {
    setPassword2(e.target.value);
    if (e.target.value !== password) {
      setPassword2Error("Passwords do not match");
    } else {
      setPassword2Error("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "password2":
        setPassword2Dirty(true);
        break;
    }
  };
  const form = { email: email, password: password };

  function handleSave() {
    if (!checkbox) {
      setCheckCheckbox(false);
      return;
    }
    if (!email.trim() || !password.trim() || !password2.trim()) {
      alert("Fill in the fields");
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", password2);
    handleRegister(formData);
    handleLogin(form, email);
  }
  return (
    <div className="mainBackground">
      <div className="registerModalContainer">
        <div className="registerFormContainer">
          <h2>Welcome!</h2>
          <h3>Please sing up to continue.</h3>
          <form className="registerFormContainer_form">
            {emailDirty && emailError && (
              <div className="inputError">{emailError}</div>
            )}
            <input
              onChange={(e) => emailHandler(e)}
              onBlur={(e) => blurHandler(e)}
              value={email}
              name="email"
              type="email"
              placeholder="Enter your email"
            />

            {passwordDirty && passwordError && (
              <div className="inputError">{passwordError}</div>
            )}
            <input
              onChange={(e) => passwordHandler(e)}
              onBlur={(e) => blurHandler(e)}
              value={password}
              name="password"
              type="password"
              placeholder="Enter password"
            />
            {password2Dirty && password2Error && (
              <div className="inputError">{password2Error}</div>
            )}
            <input
              onChange={(e) => password2Handler(e)}
              onBlur={(e) => blurHandler(e)}
              value={password2}
              name="password2"
              type="password"
              placeholder="Repeat password"
            />
            <div className="checkbox">
              <input
                type="checkbox"
                id="ch1"
                onClick={() => setCheckbox(true)}
              />
              <label className={checkCheckbox ? null : "errCheckbox"}>
                I agree with the privacy policy
              </label>
            </div>
            <Button disabled={!formValid} onClick={handleSave}>
              Sing up
            </Button>
          </form>
          {loading ? <CircularProgress /> : null}
          <h4>Already have an account or our card?</h4>
          <NavLink
            to={"/login"}
            style={{ textDecoration: "underline", color: "blue" }}
          >
            Sing in
          </NavLink>
        </div>
      </div>

      <div className="vectorBackground">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Register;
