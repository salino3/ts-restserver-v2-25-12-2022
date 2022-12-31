import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const EditInfo = () => {

  const {
    state,
    oneUser,
    setOneUser,
    updateUser,
    loginAdmin,
    loginWB,
    logoutWB,
    logoutAdmin
  } = useContext(GlobalContext);
     const { userCheck } = state;


      const [localOneUser, setLocalOneUser] = useState(oneUser);
      const { name, email, password, rol } = localOneUser;

function handleChange(event: any) {
  setLocalOneUser({ ...localOneUser, [event.target.name]: event.target.value });
}

  const handleSubmit = (event: any) => {
    event.preventDefault();
updateUser(String(userCheck), localOneUser)
 setOneUser(localOneUser);   
};

useEffect(() => {
  switch (rol) {
    case "user":
      logoutWB();
      logoutAdmin();
      break;
    case "admin":
      logoutWB();
      loginAdmin();
      break;
    case "web_master":
      loginWB();
      logoutAdmin();
      break;

    default:
      break;
  }
    
}, [oneUser.rol])



  return (
    <>
      <h1>Edit Info</h1>

      <div className="divEdit">
        <form onSubmit={handleSubmit}>
          <div className="myInfo">
            <div>
              <label>Name:</label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="What's your name?"
                onChange={handleChange}
                value={name || ""}
                required
              />{" "}
              <p>{name}</p>
            </div>
            <div>
              <label>Email:</label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="What's your email?"
                onChange={handleChange}
                value={email || ""}
                required
              />{" "}
              <p>{email}</p>
            </div>
            <div>
              <label>Password:</label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="What's will be your password?"
                onChange={handleChange}
                value={password || ""}
                required
              />{" "}
              <p>{password}</p>
            </div>
            <div>
              <label>Rol:</label>
            </div>
            <div>
              <select
                className="mySelect"
                placeholder="Text your email"
                onChange={handleChange}
                value={rol || ""}
                required
                name="rol"
              >
                <option value="">- -</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="web_master">Web Master</option>
              </select>{" "}
              <p>{rol}</p>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
