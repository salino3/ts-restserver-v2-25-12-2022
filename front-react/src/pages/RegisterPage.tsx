import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../config-Paths/Paths";
import { GlobalContext } from "../context/GlobalContext";

export const RegisterPage = () => {
  const { addStudent } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [first, setFirst] = useState({
    name: "",
    email: "",
    password: "",
    rol: "",
  });

  function handleChange(event: any) {
    setFirst({ ...first, [event?.target.name]: event?.target.value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    addStudent(first);
    navigate(LOGIN);
  };

  return (
    <>
      <div className="divRP">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit} className="registerForm">
          <label htmlFor="password">What's your Name?</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Text your name"
            onChange={handleChange}
            required
          />{" "}
          <br /> <br />
          <label htmlFor="password">What's your email?</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Text your email"
            onChange={handleChange}
            required
          />{" "}
          <br /> <br /> <label htmlFor="password">Choose your password</label>{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Text your password"
            onChange={handleChange}
            required
          />{" "}
          <br /> <br />
          <label htmlFor="rol">What's your Rol?</label> <br />
          <select
            placeholder="Text your email"
            onChange={handleChange}
            required
            name="rol"
          >
            <option value="">- -</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="web_master">Web Master</option>
          </select>
          <br />
          <br />
          <button className="btn-RP">Submit</button>
        </form>
      </div>
    </>
  );
};
