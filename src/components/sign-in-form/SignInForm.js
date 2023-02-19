import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";

import Button from "../button/Button";
import FormInput from "../formInput/FormInput";

import "./SignInForm.styles.scss";

const defaultFields = {
  userName: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFields);
  const { userName, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setCurrentUser(formFields));
    resetFormFields();
  };

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
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
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
