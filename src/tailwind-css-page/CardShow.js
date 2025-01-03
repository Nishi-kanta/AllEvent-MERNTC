import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { profiledata, profiledata2 } from "./profiledata";
import Popup from "../commen/Popup";

const CardShow = () => {
  const [userdetails, setUserdetails] = useState(null);
  const handleButtonClick = (action, user) => {
    if (action === "alert1") {
      setUserdetails(user);
    } else if (action === "navigate") {
      alert("navigate to new page!!");
    } else {
      alert("Unknown action");
    }
  };

  return (
    <>
      <div>
        <h1>Heading One</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 m-10 gap-5 grid-cols-1">
          <ProfileCard
            data={profiledata}
            onButtonClick={(action, user) => handleButtonClick(action, user)}
          />
        </div>
      </div>
      <div>
        <h1>Heading Two</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 m-10 gap-5 grid-cols-1">
          <ProfileCard data={profiledata2} onButtonClick={handleButtonClick} />
        </div>
      </div>
      {/* User Details Section */}
      <Popup userdetails={userdetails} setUserdetails={setUserdetails} />
    </>
  );
};

export default CardShow;
