import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export const List = () => {
  const { state } = useContext(GlobalContext);
  const { userCheck } = state;

    const { id } = useParams();

    let myId = Number(id);

  return (
    <>
      <h1>List</h1>
      <div className="divAdmin">
        <div className="divUser">
          <h5>
            {myId ? `user nº ${id} in red ${String(userCheck) === id ? " << you" : ""}`: ""}
          </h5>
        </div>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {state.datos
              .filter((x: any) => x["state"] === true)
              .map((item: any) => (
                <tr key={item.id} className={item.id === myId ? "this " : "myTr"}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

