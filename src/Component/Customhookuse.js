import React from "react";
import CustomeHook from "../hooks/CustomeHook";

const customhookuse = () => {
  const [count, setcount] = CustomeHook();
  return (
    <div>
      <h1>the count value as per the customhook is :-{count}</h1>
      <button onClick={setcount}>increase countvalue by customhook</button>
    </div>
  );
};

export default customhookuse;
