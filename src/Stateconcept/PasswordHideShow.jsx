import React, { useState } from "react";

const PasswordHideShow = () => {
   const [isshow,setIsShow] =useState(false);
  return (
    <div>
      <input
        type={`${isshow ?'text':'password'}`}
        placeholder="enterpassword"
        className="border-[2px] solid border-black p-3"
      />

      <button  onClick={()=>setIsShow(!isshow)} className="p-3 border-[2px] border-black ml-3">Show</button>
    </div>
  );
};

export default PasswordHideShow;
