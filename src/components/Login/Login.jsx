import React, { useEffect, useState } from "react";
import "./Login.css";
import image from "../../images/Vector.png";
import CircularProgress from "@mui/material/CircularProgress";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
const Login = () => {
  const { handleLogin, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty."
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

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

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  function handleSave() {
    if (!email.trim() || !password.trim()) {
      alert("Fill in the fields");
    }
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email);
  }
  return (
    <div className="mainBackground">
      <div className="registerModalContainer">
        <div className="registerFormContainer">
          <h2>Welcome back!</h2>
          <h3>Please sing in to continue.</h3>
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

            <Button
              className="button"
              disabled={!formValid}
              onClick={handleSave}
            >
              Sign in
            </Button>
          </form>
          {loading ? <CircularProgress /> : null}
          <h4>Don't have an account?</h4>
          <NavLink
            to={"/register"}
            className="sing_nav"
            ba
            style={{
              textDecoration: "underline",
              color: "blue",
              background: "none",
            }}
          >
            Sing up
          </NavLink>
        </div>
      </div>

      <div className="vectorBackground">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Login;
