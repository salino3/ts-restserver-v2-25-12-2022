import * as React from "react";
import { Link } from "react-router-dom";
import { LOGIN, REGISTER } from "../config-Paths/Paths";

export const Home = () => {
  return (
    <>
      <h1>
        <u>Welcome</u>
      </h1>
      <h2>Home</h2>
      <div className="divHome">
        <div className="divLinks">
          <div>
            <p>The register page:</p>{" "}
            <Link className="LinkLogin" to={`${REGISTER}`}>
              Go to Register
            </Link>
          </div>
          <br />
          <div>
            <p>The login page:</p> &nbsp; &nbsp;
            <Link to={`${LOGIN}`}>Go to Login</Link>
          </div>
        </div>
        <div className="thelogo">
          <img src="../logo512.png" alt="Logo" width="220" />
        </div>
      </div>
    </>
  );
};
