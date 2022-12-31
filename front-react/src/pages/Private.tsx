import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const Private = () => {

      const { state, loadUser, oneUser } = useContext(GlobalContext);
      const { userCheck} = state;

useEffect(() => {
if (userCheck) {
  // without refresh the page, moving in another page,
  // the value of userChek will be 'string'  
  loadUser(String(userCheck));
} 
}, [userCheck])


const mynum = Number(userCheck);
 
  return (
    <>
      <h1>Private Page</h1>

      <div>
        {" "}
        <h3>User nº {mynum}</h3>
      </div>
      <hr className="hrPrivatePage" />
      <div className="divInfo">
        <p>
          <b>Name:</b> <span>{oneUser.name}</span>
        </p>
        <p>
          <b>Email:</b> <span>{oneUser.email}</span>
        </p>
        <p>
          <b>Rol:</b> <span>{oneUser.rol}</span>{" "}
        </p>
      </div>
    </>
  );
}
