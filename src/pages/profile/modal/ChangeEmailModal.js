import React, { useState } from "react";

const ChangeEmail = ({ onCancel, onNext }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const [shouldShowOtpBox, setShouldShowOtpBox] = useState(false);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!emailError) {
      //   onNext(email); // Call the onNext prop with the email
      setShouldShowOtpBox(true);
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    if (e.target.value.length !== 6) {
      setOtpError("OTP must be 6 digits");
    } else {
      setOtpError("");
    }
  };

  const handleOtpSubmit = () => {
    if (!otp) {
      setOtpError("OTP is required");
      return;
    }
    if (!otpError) {
      onNext(email, otp); // Proceed with OTP validation
    }
  };

  return (
    <div className="md:w-[650px]">
      <h2 className="text-start text-xl font-bold">Update Email</h2>
      <div className="mt-4">
        {shouldShowOtpBox ? (
          <>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter OTP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
              maxLength={6}
            />
            {otpError && <p className="text-red-500 text-xs">{otpError}</p>}
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={()=> setShouldShowOtpBox(false)}
                className="px-4 py-2 border rounded text-gray-700 border-gray-300 hover:bg-gray-100 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleOtpSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Verify
              </button>
            </div>
          </>
        ) : (
          <>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={onCancel}
                className="px-4 py-2 border rounded text-gray-700 border-gray-300 hover:bg-gray-100 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChangeEmail;
