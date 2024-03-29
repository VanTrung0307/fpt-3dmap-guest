/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const ConfirmResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    if (confirmPassword !== "" && password !== confirmPassword) {
      setValidationError("Password does not match!");
    } else if (!passwordRegex.test(password)) {
      setValidationError(
        "Password must be 8-15 characters long, contain one uppercase letter, one lowercase letter, and one special symbol."
      );
    } else {
      setValidationError("");
    }
  }, [password, confirmPassword]);

  const handlePasswordChange = (event) => {
    const value = event.target.value.slice(0, 15);
    setPassword(value);

    if (value.length >= 8 && value.length <= 15) {
      setValidationError("");
    } else {
      setValidationError("Password must be between 8 and 15 characters.");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value.slice(0, 15));
  };

  const handleConfirmButtonClick = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    if (password === confirmPassword && passwordRegex.test(password)) {
      window.location.href = "/login";
    } else {
      setValidationError(
        "Password does not match or does not meet the requirements!"
      );
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      confirmPasswordInput.type = "text";
    } else {
      passwordInput.type = "password";
      confirmPasswordInput.type = "password";
    }
  };

  const handleExitToMainPage = () => {
    window.location.href = "/main";
  };

  return (
    <section className="grid h-screen place-content-center bg-slate-900 text-slate-300">
      <button
        className="absolute top-4 right-4 bg-black text-white rounded-full p-2 hover:bg-blue-500 transition duration-200"
        onClick={handleExitToMainPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house h-6 w-6"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          <title>Main</title>
        </svg>
      </button>
      <div className="mb-10 text-center text-indigo-400">
        <h1 className="text-3xl font-bold tracking-widest">RESET</h1>
        <p>
          <span className="font-bold">Password</span> and{" "}
          <span className="font-bold">Confirm</span> validation.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
        />
        <div>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-80 appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <p className="text-center text-orange-500 italic text-sm">
          {validationError}
        </p>
        <button
          type={passwordVisible ? "text" : "password"}
          id="showPw"
          className="rounded-full bg-indigo-500 p-2 px-4 text-white hover:bg-orange-500"
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? "Hide" : "Show"} Password
        </button>
        <button
          id="showPw"
          className="rounded-full bg-indigo-500 p-2 px-4 text-white hover:bg-orange-500"
          onClick={handleConfirmButtonClick}
        >
          Confirm
        </button>
      </div>
    </section>
  );
};

export default ConfirmResetPassword;
