import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    function checkUser() {
      if (!localStorage.getItem("username")) {
        navigate("/");
      }
    }
    checkUser();
  }, [navigate]);

  function handleSignOut() {
    localStorage.removeItem("username");
    navigate("/");
  }

  return (
    <div className="dashboard">
      <h2 style={{ marginBottom: "30px" }}>
        Howdy, {localStorage.getItem("username")}
      </h2>
      <button className="signOutBtn" onClick={handleSignOut}>
        SIGN OUT
      </button>
    </div>
  );
}

export default Dashboard;
