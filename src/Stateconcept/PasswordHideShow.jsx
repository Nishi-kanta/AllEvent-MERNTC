import React from "react";

const PasswordHideShow = () => {
  return (
    <div>
      <input
        type="password"
        placeholder="enterpassword"
        className="border-[2px] solid border-black p-3"
      />

      <button className="p-3 border-[2px] border-black ml-3">Show</button>
    </div>
  );
};

export default PasswordHideShow;
