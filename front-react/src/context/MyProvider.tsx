import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import { MyReducer } from './MyReducer';
import axios from 'axios';
import { T } from './Interfaces';

interface Props {
  children?: JSX.Element | JSX.Element[];
};

const MyProvider = ({children}: Props) => {
  const [oneUser, setOneUser] = useState({});
  //
  //* Personal ID during Login
  let userID = "USERID";
  const [userCheck, setUserCheck] = useState(
    window.localStorage.getItem(userID)
  );

  //
  const [state, dispatch] = useReducer(MyReducer, {
    datos: [],
    userCheck: null,
  });

  //* API call
  const fetchApi = useCallback(async () => {
    fetch("http://localhost:8000/api/usuarios")
      .then((response) => response.json())
      .then((data) => {
        // Envía la acción de carga de datos al reducer
        dispatch({
          type: "LOAD_DATA",
          payload: data,
        });
      });
  }, []);

  useEffect(() => {
    fetchApi();
  }, []);

  // Actualiza el valor de userCheck en 'state'
  useEffect(() => {
    dispatch({
      type: "LOAD_USER_CHECK",
      payload: userCheck,
    });
  }, [userCheck]);

  //* my Actions
  //
  //* loginUser
  const loginUser = useCallback(function (info: any) {
    dispatch({
      type: "UPDATE_USER_CHECK_TRUE",
      payload: window.localStorage.setItem(userID, JSON.stringify(info)),
    });
    setUserCheck(info);
  }, []);

  //* logoutUser
  const logoutUser = useCallback(function () {
    dispatch({
      type: "UPDATE_USER_CHECK_FALSE",
      payload: window.localStorage.removeItem(userID),
    });
    setUserCheck("");
  }, []);

  //* Add a user
  const addStudent = useCallback(async (userData: any) => {
    try {
      await axios.post("http://localhost:8000/api/usuarios", userData);
      fetchApi();
      alert("User registered!");
    } catch (error) {
      console.log(error);
      alert("There has been an error!");
    }
  }, []);

  //* View User info
  const loadUser = useCallback(async (id: T) => {
    try {
      //
      const result = await axios.get(
        `http://localhost:8000/api/usuarios/${id}`
      );
      console.log(result);
      setOneUser(result.data);
    } catch (error) {
      console.log(error);
      alert("User with this code is not in the database");
    }
  }, []);

  //* Delete a User
  const deleteUser = useCallback(async (id: T) => {
    try {
      await axios.patch(`http://localhost:8000/api/usuarios/${id}`);
      logoutWB();
      logoutAdmin();
      logout();
      logoutUser();
      fetchApi();
      alert("Deleted the account successfully");
    } catch (error) {
      alert("There has been an error!");
      console.log(error);
    }
  }, []);

  //* Modify data student
  const updateUser = useCallback(async (id: T, user: any) => {
    try {
      await axios.put(`http://localhost:8000/api/usuarios/${id}`, user);

      fetchApi();
      alert("Modified!");
    } catch (error) {
      alert("There has been an error!");
      console.log(error);
    }
  }, []);

  //* Delete a User from Web Master
  const destroyUser = useCallback(async (id: T) => {
    try {
      await axios.delete(`http://localhost:8000/api/usuarios/${id}`);

      fetchApi();
      alert("User Deleted!");
    } catch (error) {
      alert("There has been an error!");
      console.log(error);
    }
  }, []);

  //* isAuthenticated
  let user = "USER";

  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(user) ?? false
  );

  const login = useCallback(function () {
    window.localStorage.setItem(user, "true");
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(user);
    setIsAuthenticated(false);
  }, []);

  //* Rol Web Master
  let rolWebMaster = "web_master";

  const [webMaster, setWebMaster] = useState(
    window.localStorage.getItem(rolWebMaster) ?? false
  );

  const loginWB = useCallback(function () {
    window.localStorage.setItem(rolWebMaster, "true");
    setWebMaster(true);
    console.log("Executing loginWB");
  }, []);

  const logoutWB = useCallback(function () {
    window.localStorage.removeItem(rolWebMaster);
    setWebMaster(false);
    console.log("Executing logoutWB");
  }, []);

  //* Rol Admin
  let rolAdmin = "admin";

  const [Admin, setAdmin] = useState(
    window.localStorage.getItem(rolAdmin) ?? false
  );

  const loginAdmin = useCallback(function () {
    window.localStorage.setItem(rolAdmin, "true");
    setAdmin(true);
    console.log("Executing loginAdmin");
  }, []);

  const logoutAdmin = useCallback(function () {
    window.localStorage.removeItem(rolAdmin);
    setAdmin(false);
    console.log("Executing logoutAdmin");
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        //
        state,
        loginUser,
        logoutUser,
        isAuthenticated,
        login,
        logout,
        updateUser,
        setOneUser,
        //
        addStudent,
        loadUser,
        oneUser,
        deleteUser,
        destroyUser,
        // rols
        webMaster,
        loginWB,
        logoutWB,
        Admin,
        loginAdmin,
        logoutAdmin,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default MyProvider