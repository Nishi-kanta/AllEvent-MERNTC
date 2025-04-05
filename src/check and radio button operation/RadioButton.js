import React, { useState } from "react";

const RadioButton = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <h3>Select Gender:</h3>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={selectedGender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={selectedGender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Others"
          checked={selectedGender === "Others"}
          onChange={handleChange}
        />
        Others
      </label>

      <h4>Selected Gender: {selectedGender || "None"}</h4>
    </div>
  );
};

export default RadioButton;