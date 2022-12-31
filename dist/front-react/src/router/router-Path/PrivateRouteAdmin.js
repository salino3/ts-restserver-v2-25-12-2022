"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateRouteAdmin = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Paths_1 = require("../../config-Paths/Paths");
const GlobalContext_1 = require("../../context/GlobalContext");
const PrivateRouteAdmin = () => {
    const { isAuthenticated, webMaster, Admin } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    if (!webMaster && !Admin) {
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: `${Paths_1.PRIVATE}` });
    }
    if (!isAuthenticated) {
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: Paths_1.LOGIN });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
};
exports.PrivateRouteAdmin = PrivateRouteAdmin;
//# sourceMappingURL=PrivateRouteAdmin.js.map