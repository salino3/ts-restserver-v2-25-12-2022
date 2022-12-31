import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PRIVATE } from '../../config-Paths/Paths';
import { GlobalContext } from '../../context/GlobalContext';


export const PublicRoutes = () => {

    const {isAuthenticated} = useContext(GlobalContext);

  if (isAuthenticated) {
   return <Navigate to={PRIVATE} />; 
 };

  return (
    <Outlet/>
  )
}
