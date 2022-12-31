"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Paths_1 = require("../config-Paths/Paths");
const AdminPage_1 = __importDefault(require("../pages/AdminMasterPages/AdminPage"));
const WebMasterPage_1 = __importDefault(require("../pages/AdminMasterPages/WebMasterPage"));
const index_1 = require("../pages/index");
const router_Path_1 = require("./router-Path");
const AppRouter = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(router_Path_1.PublicRoutes, null) },
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(index_1.Home, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.LIST}/:id`, element: react_1.default.createElement(index_1.List, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.LOGIN}`, element: react_1.default.createElement(index_1.LoginPage, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.REGISTER}`, element: react_1.default.createElement(index_1.RegisterPage, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: `/*`, element: react_1.default.createElement(index_1.PageNotFound, null) }),
                "PageNotFound"),
            react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.PRIVATE}`, element: react_1.default.createElement(router_Path_1.PrivateRoutes, null) },
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.PRIVATE}`, element: react_1.default.createElement(index_1.Private, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.PRIVATE}${Paths_1.DELETE}/:id`, element: react_1.default.createElement(index_1.DeletePage, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.PRIVATE}${Paths_1.LIST}/:id`, element: react_1.default.createElement(index_1.List, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.PRIVATE}${Paths_1.EDIT}`, element: react_1.default.createElement(index_1.EditInfo, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.PRIVATE}/*`, element: react_1.default.createElement(index_1.PageNotFound, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.WEB_MASTER}`, element: react_1.default.createElement(router_Path_1.PrivateRouteWebMaster, null) },
                    react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.WEB_MASTER}`, element: react_1.default.createElement(WebMasterPage_1.default, null) })),
                react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.ADMIN}`, element: react_1.default.createElement(router_Path_1.PrivateRouteAdmin, null) },
                    react_1.default.createElement(react_router_dom_1.Route, { path: `${Paths_1.ADMIN}`, element: react_1.default.createElement(AdminPage_1.default, null) }))))));
};
exports.default = AppRouter;
//# sourceMappingURL=AppRouter.js.map