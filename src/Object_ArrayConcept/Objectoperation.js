import React, { useState } from 'react'

const Objectoperation = () => {
    const [puserval,setUserVal]= useState([]);

    const data = {
        known: [
          { name: "Punam", age: 25, email: "punam@example.com" },
          { name: "Deva", age: 28, email: "deva@example.com" },
        ],
        unknown: [
          { name: "Ravi", age: 30, email: "ravi@example.com" },
          { name: "Anjali", age: 22, email: "anjali@example.com" },
        ],
        guest: [
          { name: "Kiran", age: 35, email: "kiran@example.com" },
          { name: "Ritu", age: 27, email: "ritu@example.com" },
        ],
      };
      function getUsersByType(type) {
        setUserVal(data[type])
        // return data[type] || `No users found with type ${type}.`;
      }
      
      const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 15px',
        cursor: 'pointer',
      };

  return (
    <div>Objectoperation &nbsp;
      <button style={buttonStyle} onClick={() => getUsersByType('known')}>
      Get Val
    </button>
       <ul>
       {
        puserval?.map((val,index) => (
            <React.Fragment key={index}>
            <li>{val.name}</li>
            <li>{val.age}</li>
            <li>{val.email}</li>
            </React.Fragment>

        ))
       }
       </ul>

    </div>
  )
}

export default Objectoperation