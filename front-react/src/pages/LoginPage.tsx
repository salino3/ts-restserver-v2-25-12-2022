import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const LoginPage = () => {
  const { state, login, loginUser, loginWB, loginAdmin } = useContext(GlobalContext);
  const { datos } = state;

  function handleSubmit(event: any) {
    event.preventDefault();

    let InfoInput = event.target.email.value;
    let InfoInput2 = event.target.password.value;
    let checkUserEmail: any = "error email";
    let checkUserPsw: any = "error psw";

    // checking email
    datos.forEach((object: any) => {
      if (object.email === InfoInput) {
        //
        checkUserEmail = object;
      }
    });
    // checking password
    datos.forEach((object: any) => {
      if (object.password === InfoInput2) {
        //
        checkUserPsw = object;
      }
    });
    //

    if (
      checkUserEmail === checkUserPsw &&
      checkUserPsw.email !== undefined ) {

        if(checkUserPsw.state === false){
          return alert('This user account has been delete')
        }

      if (checkUserEmail.rol === "web_master") {
        loginWB();
      }
      if (checkUserEmail.rol === "admin") {
        loginAdmin();
      }

      login();
      alert("Logged!");

      loginUser(checkUserPsw.id);
    } else {
      alert("Sorry the password it's incorrect");
    }
  }

  return (
    <>
      <h1>Login Page</h1>
      <div className="divLogin">
        <form onSubmit={handleSubmit}>
          <label>Your Email</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder={"What's your email?"}
            autoComplete="email"
            required
          />
          <br /> <br />
          <label>Your Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder={"Text your password?"}
            autoComplete="current-password"
            required
          />
          <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
