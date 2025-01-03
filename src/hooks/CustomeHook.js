import { useState } from "react";

const CustomeHook = () => {
  const [count, setcount] = useState(0);
  const increasecountvalue = () => {
    setcount(count + 1);
  };
  return [count, increasecountvalue];
};

export default CustomeHook;
