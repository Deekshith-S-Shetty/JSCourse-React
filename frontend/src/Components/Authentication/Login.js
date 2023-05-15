import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="d-flex justify-content-center container text-white mt-10">
          <form className="m-3 p-5 bg-dark">
            <h2 className="fs-2 text-center">Login</h2>

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
    
            <div className="">
                <p>Don't have an account? <Link to='/Register'>Register</Link></p>
            </div>
    
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
};

export default Login;
