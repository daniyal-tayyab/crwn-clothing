import React, { useState, useContext } from "react";

import { UserContext } from "../../contexts/userContext";

import Button from "../button/Button";
import FormInput from "../formInput/FormInput";

import "./SignUpForm.styles.scss";

const defaultFormFields = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  //here we destructre these form fields
  const { userName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCurrentUser(formFields);
    resetFormFields();
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="User Name"
          type="text"
          required
          onChange={handleChange}
          name="userName"
          value={userName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
