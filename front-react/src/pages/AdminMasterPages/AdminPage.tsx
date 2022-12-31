import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const AdminPage = () => {

  const {oneUser, state } = useContext(GlobalContext);

  const { name } = oneUser;

  return (
    <>
      <h1>Welcome {name} in Admin Page!</h1>
      <div className="divAdmin">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Email</th>
              <th>password</th>
              <th> Active</th>
            </tr>
          </thead>
          <tbody>
            {state.datos.map((item: any) => (
              <tr className="myTr" key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.state ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPage