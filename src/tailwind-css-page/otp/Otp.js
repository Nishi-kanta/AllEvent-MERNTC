import { useState, useEffect, useRef } from "react";

const Otp = () => {
  const length = 6;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [isStarted, setIsStarted] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    let value = e.target.value;
    // If the user tries to enter data in any input field except index 0 before starting
    if (!isStarted && index !== 0) {
      alert("Please start by entering data in the first input field.");
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
      return;
    }
    if (value.match(/^[0-9]$/)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (!isStarted) setIsStarted(true);

      // Move focus to the next input field if possible
      if (index < length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }

      // If all fields are filled, show the alert and handle the API call or other actions
      if (newOtp.length === length && !newOtp.includes("")) {
        setTimeout(() => {
          alert(`Entered OTP: ${newOtp.join("")}`);
          // Call your API or other actions here
          handleApiCall(newOtp.join(""));
        }, 200);
      }
    }
  };

  // You can create a separate function to handle the API call or other actions
  const handleApiCall = (otpValue) => {
    console.log("Handling API call with OTP:", otpValue);

    // Add your API call logic here

    // After the API call, reset OTP fields
    setOtp(Array(length).fill(""));
    inputRefs.current.forEach((input) => {
      if (input) {
        input.value = "";
        inputRefs.current[0]?.focus();
        setIsStarted(false);
      }
    });
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      let newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index === 0) {
        setIsStarted(false);
      }
      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    let pastedData = e.clipboardData.getData("text").trim();

    // Check if pasted data is exactly a 6-digit OTP
    if (!pastedData.match(/^\d{6}$/)) {
      alert("Only 6-digit numeric OTP is allowed!");
      return;
    }

    let newOtp = pastedData.split("");
    setOtp(newOtp); // Update the OTP state with the new OTP value

    // Fill in the input fields with the pasted OTP digits
    newOtp.forEach((digit, idx) => {
      if (inputRefs.current[idx]) {
        inputRefs.current[idx].value = digit;
      }
    });

    setIsStarted(true);

    // Show alert and call API after pasting the OTP
    setTimeout(() => {
      alert(`Pasted OTP: ${newOtp.join("")}`);

      // If all OTP fields are filled, make the API call
      if (newOtp.length === 6 && !newOtp.includes("")) {
        handleApiCall(newOtp.join("")); // Call your API with the pasted OTP
      }
    }, 200);

    // Move focus to the last input field
    inputRefs.current[5]?.focus();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold text-center mb-4">Enter OTP</h2>
        <div className="flex space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Otp;