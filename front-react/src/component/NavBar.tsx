import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DELETE, EDIT, LIST, LOGIN, PRIVATE, REGISTER } from "../config-Paths/Paths";
import { GlobalContext } from "../context/GlobalContext";
import Input from "./Input";

const NavBar = () => {
  const {
    state,
    logout,
    logoutUser,
    logoutWB,
    logoutAdmin,
    loadUser,
    oneUser,
  } = useContext(GlobalContext);
  const { userCheck } = state;
  let { rol } = oneUser;

    useEffect(() => {
      if (userCheck) {
        loadUser(String(userCheck));
      }

    }, [userCheck]);



  function handleLogout() {
    logout();
    logoutUser();
    logoutWB();
    logoutAdmin();
  };

  //
  let route = "";

  switch (rol) {
    case "user":
      route = "";
      break;
    case "admin":
      route = "Administrator";
      break;
    case "web_master":
      route = "Web_Master";      
      break;

    default:
      break;
  }

  return (
    <>
      <nav className="myNav">
        <div className="divBlock1">
          <div className="div1nav">
            <div>
              <Link to={"/"}>
                <button className="btn_start">Home</button>
              </Link>
            </div>
            <div>{userCheck ? <h4>You are Logged!</h4> : ""}</div>
          </div>
          <div className="div2nav">
            <div>
              <ul>
                <li>
                  {userCheck ? (
                    <Link to={`${PRIVATE}${EDIT}`}>Edit Info</Link>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  {userCheck ? (
                    <Link to={`${PRIVATE}${LIST}/all`}>All list</Link>
                  ) : (
                    <Link to={`${LIST}/all`}>All list</Link>
                  )}
                </li>
                <li>
                  {" "}
                  {userCheck ? (
                    <Link to={`${PRIVATE}`}>My Info</Link>
                  ) : (
                    <Link to={`${LOGIN}`}>Login</Link>
                  )}
                </li>
                <li>
                  {userCheck ? (
                    <Link to={`${PRIVATE}${DELETE}/${userCheck}`}>
                      Delete account
                    </Link>
                  ) : (
                    <Link to={`${REGISTER}`}>Register</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divBlock2">
          <div className="div3nav">
            <div className="divLog">
              {userCheck ? (
                <button className="btn_logout" onClick={() => handleLogout()}>
                  Logout
                </button>
              ) : (
                <Link to={`${LOGIN}`}>
                  <button className="btn_login">Login</button>
                </Link>
              )}
            </div>
            <div>
              {(rol === "admin" || rol === "web_master") && userCheck ? (
                <Link to={`${PRIVATE}/${route}`}>
                  <button className="btn_logout">{route}</button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="div4nav">
            <Input />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
