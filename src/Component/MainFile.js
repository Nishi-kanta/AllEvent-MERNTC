import React, { useState } from "react";
import FirstPage from "./FirstPage";
import ChildOne from "./ChildOne";

const MainFile = () => {
  const [isSubmit, setIsSubmit] = useState(true);
  const [dynavalue, setdynavalue] = useState("babul");
  const childpage = () => {
    setIsSubmit(false);
  };
  return (
    <div>
      <h1>in parent secton dynavalue is:-{dynavalue}</h1>
      {isSubmit ? (
        <FirstPage
          val={dynavalue}
          setdynavalue={setdynavalue}
          childpage={childpage}
        />
      ) : (
        <ChildOne
          val={dynavalue}
          setdynavalue={setdynavalue}
          setIsSubmit={setIsSubmit}
        />
      )}
    </div>
  );
};

export default MainFile;
