import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="d-flex justify-content-center container text-white mt-10">
      <form className="m-3 p-5 bg-dark">
        <h2 className="fs-2 text-center">Register</h2>

        <div className="mb-3">
          <label for="exampleInputName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <div className="">
            <p>Have an account? <Link to='/login'>Login</Link></p>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
