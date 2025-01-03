import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handelnavigate = () => {
    navigate("/dashboard");
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p>Landing Screen</p>
      <button
        className="bg-green-700 p-3 rounded-lg text-white "
        onClick={() => handelnavigate("/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
};

export default LandingPage;
