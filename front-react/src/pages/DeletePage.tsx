import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const DeletePage = () => {

          const { deleteUser, oneUser } = useContext(GlobalContext);

  const { name, email, password, id } = oneUser;

    function handleSubmit(event: any) {
      event.preventDefault();

      let Email = event.target.email.value;
      let Password = event.target.password.value;

      if (Email === email && Password === password) {
        deleteUser(id);
      } else {
        alert("The data does not match");
      }
    }

  return (
    <>
      <h1>Delete Page</h1>
<h2>Here {name} is for delete your account</h2>
   
      <div className="divDelete">
        <form onSubmit={handleSubmit}>
          <label>Your Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder={"What's your email?"}
            required
          />
          <br /> <br />
          <label>Your Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder={"Text your password?"}
            required
          />
          <br /> <br />
          <button type="submit">Delete Account</button>
        </form>
      </div>
    </>
  );
}
