import React from "react";
import FormHandler from "./formHandler";


const SignUpForm = () => {

    const FIELDS = {
        email: {
            value:"",
            validations: [(value) => !!value],
        }
    }

    const {
        fields,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
    } = FormHandler(FIELDS)

  return (
    <>
      <h1>Sign Up</h1>

      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="email" className="">
            Email address
          </label>
          <input
            aria-describedby="emailHelp"
            autoComplete="off"
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={fields.email.value}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <small id="emailErrors" className="form-text text-danger">
            Error
          </small>
        </div>
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
