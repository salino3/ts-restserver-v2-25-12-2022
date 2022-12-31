import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN, PRIVATE } from "../../config-Paths/Paths";
import { GlobalContext } from "../../context/GlobalContext";

export const PrivateRouteWebMaster = () => {

  const { isAuthenticated, webMaster } = useContext(GlobalContext);

  if (!webMaster) {
    return <Navigate to={`${PRIVATE}`} />;
  }

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

