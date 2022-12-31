import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ADMIN, DELETE, EDIT, LIST, LOGIN, PRIVATE, REGISTER, WEB_MASTER } from '../config-Paths/Paths';
import AdminPage from '../pages/AdminMasterPages/AdminPage';
import WebMasterPage from '../pages/AdminMasterPages/WebMasterPage';
import { DeletePage, EditInfo, Home, List, LoginPage, PageNotFound, Private, RegisterPage } from '../pages/index';
import { PrivateRouteAdmin, PrivateRoutes, PrivateRouteWebMaster, PublicRoutes } from './router-Path';




const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path={"/"} element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path={`${LIST}/:id`} element={<List />} />
          <Route path={`${LOGIN}`} element={<LoginPage />} />
          <Route path={`${REGISTER}`} element={<RegisterPage />} />
          <Route path={`/*`} element={<PageNotFound />} />
          PageNotFound
        </Route>
        {/* Private Routes */}
        <Route path={`${PRIVATE}`} element={<PrivateRoutes />}>
          <Route path={`${PRIVATE}`} element={<Private />} />
          <Route path={`${PRIVATE}${DELETE}/:id`} element={<DeletePage />} />
          <Route path={`${PRIVATE}${LIST}/:id`} element={<List />} />
          <Route path={`${PRIVATE}${EDIT}`} element={<EditInfo />} />
          <Route path={`${PRIVATE}/*`}element={<PageNotFound />}
          />

          {/* Web Master Route */}
          <Route path={`${WEB_MASTER}`} element={<PrivateRouteWebMaster />}>
            <Route path={`${WEB_MASTER}`} element={<WebMasterPage />} />
          </Route>
          {/* Admin Route */}
          <Route path={`${ADMIN}`} element={<PrivateRouteAdmin />}>
            <Route path={`${ADMIN}`} element={<AdminPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter