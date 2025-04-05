import React, { useState } from "react";

const GenderSelection = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedSkillsObject, setSelectedSkillsObject] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    // setSelectedSkillsObject((prev) => {
    //   return { ...prev, [name]: checked };
    // });
    setSelectedSkills((prevSelected) => {
      if (checked) {
        // Add gender to the array if checked
        return [...prevSelected, name];
      } else {
        // Remove gender from the array if unchecked
        return prevSelected.filter((gender) => gender !== name);
      }
    });
  };
  //   console.log("selecteSkillsObject", selectedSkillsObject);
  return (
    <div>
      <h3>Select Gender:</h3>
      <label>
        <input
          type="checkbox"
          name="Mongoose"
          checked={selectedSkills.includes("Mongoose")}
          onChange={handleCheckboxChange}
        />
        Mongoose
      </label>

      <label>
        <input
          type="checkbox"
          name="Nodejs"
          checked={selectedSkills.includes("Nodejs")}
          onChange={handleCheckboxChange}
        />
        Nodejs
      </label>

      <label>
        <input
          type="checkbox"
          name="React"
          checked={selectedSkills.includes("React")}
          onChange={handleCheckboxChange}
        />
        React
      </label>

      <h4>Selected Genders: {selectedSkills.join(", ") || "None"}</h4>
    </div>
  );
};

export default GenderSelection;