import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not_found">
      <h2>Page Not Found</h2>
      <button onClick={() => navigate("/")}>Back to main</button>
    </div>
  );
};

export default NotFound;
