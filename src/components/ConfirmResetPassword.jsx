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
    setPassword(event.target.value);
    if (password.length >= 8 && password.length <= 15) {
      setPassword(password.slice(0, 15));
      setValidationError("");
    } else {
      setValidationError("Password must be between 8 and 15 characters.");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (confirmPassword.length >= 8 && confirmPassword.length <= 15) {
      setPassword(confirmPassword.slice(0, 15));
      setValidationError("");
    } else {
      setValidationError("Password must be between 8 and 15 characters.");
    }
  };

  const handleConfirmButtonClick = () => {
    if (password === confirmPassword) {
      window.location.href = "/login";
    } else {
      setValidationError("Password does not match!");
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

  return (
    <section className="grid h-screen place-content-center bg-slate-900 text-slate-300">
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
