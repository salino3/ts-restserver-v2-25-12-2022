import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ADMIN } from '../../config-Paths/Paths';
import { GlobalContext } from '../../context/GlobalContext';

const WebMasterPage = () => {

          const { state, destroyUser, oneUser, updateUser } =
            useContext(GlobalContext);
          const { name, } = oneUser;
          const { datos } = state;

          const [first, setFirst] = useState<any>(null);
//
  const inputRef = useRef({
    id: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  });

  function CleanInputs(){
            
  if (inputRef.current.id.current) {
    inputRef.current.id.current.value = "";
  }
  if (inputRef.current.email.current) {
    inputRef.current.email.current.value = "";
  }
  if (inputRef.current.password.current) {
    inputRef.current.password.current.value = "";
  }
 };

      function handleSubmit(event: any) {
        event.preventDefault();

        const target = event.target || {};
        let Email = target.email.value;
        let Password = target.password.value;
        let Id = target.id.value;
        let NumId = Number(Id);
        //
        let checkUserEmail: any = "error email";
        let checkUserPsw: any = "error password";

        // checking email
        datos.forEach((object: any) => {
          if (object.email === Email) {
            //
            checkUserEmail = object;
          }
        });

        // checking password
        datos.forEach((object: any) => {
          if (object.password === Password) {
            //
            checkUserPsw = object;
          }
        });

        if (
          checkUserEmail === checkUserPsw &&
          checkUserPsw.email !== undefined &&
          checkUserEmail.id === NumId
        ) {
          CleanInputs();
          if (NumId === oneUser.id) {
            return alert("In this page you can not delete your account");
          }
          destroyUser(Id);

        } else {
          CleanInputs();
          alert("The data does not match");
        }
      };

function toggleChange(item: any) {
  setFirst({
    ...item,
    state: !item.state,
  });
  console.log({first})
}

useEffect(() => {
  if(first !== null){
  updateUser(String(first.id), first);
}
}, [first])


    console.log("dentro WebMasterPage");
  return (
    <div className="divMayorWM">
      <Link to={`${ADMIN}`}>
        <button>Go to Admin Page</button>
      </Link>
      <h1>Welcome {name} inside Web Master Page</h1>

      <div className="divDelete">
        <b>Delete a user account</b>

        <form onSubmit={handleSubmit}>
          <div className="divInputs">
            <div>
              <label>Number id</label>
              <br />
              <input
                type="number"
                name="id"
                ref={inputRef.current.id}
                placeholder={"What's the number id?"}
                required
              />{" "}
            </div>
            <div>
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                ref={inputRef.current.email}
                placeholder={"What's the email?"}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                ref={inputRef.current.password}
                placeholder={"Text the password?"}
                required
              />
            </div>
          </div>
          <br />
          <button type="submit">Delete Account</button>
        </form>
        <div className="divAdmin">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                <th>password</th>
                <th>rol</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.datos.map((item: any) => (
                <tr className="myTr" key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.rol}</td>
                  <td>{item.state ? "Yes" : "No"}</td>
                  <td>
                    <button onClick={() => toggleChange(item)}>
                      {item.state ? "Deactivate" : "Activate"} user
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WebMasterPage