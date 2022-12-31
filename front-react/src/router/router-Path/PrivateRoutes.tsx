import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

export const PrivateRoutes = () => {

    const { isAuthenticated } = useContext(GlobalContext);


  if (!isAuthenticated) {
     return <Navigate to={'/'} />;    

  }

  return <Outlet />;
};
