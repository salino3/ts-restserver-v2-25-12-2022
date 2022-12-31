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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Paths_1 = require("../config-Paths/Paths");
const GlobalContext_1 = require("../context/GlobalContext");
const Input_1 = __importDefault(require("./Input"));
const NavBar = () => {
    const { state, logout, logoutUser, logoutWB, logoutAdmin, loadUser, oneUser, } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const { userCheck } = state;
    let { rol } = oneUser;
    (0, react_1.useEffect)(() => {
        if (userCheck) {
            loadUser(String(userCheck));
        }
    }, [userCheck]);
    function handleLogout() {
        logout();
        logoutUser();
        logoutWB();
        logoutAdmin();
    }
    ;
    //
    let route = "";
    switch (rol) {
        case "user":
            route = "";
            break;
        case "admin":
            route = "Administrator";
            break;
        case "web_master":
            route = "Web_Master";
            break;
        default:
            break;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("nav", { className: "myNav" },
            react_1.default.createElement("div", { className: "divBlock1" },
                react_1.default.createElement("div", { className: "div1nav" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                            react_1.default.createElement("button", { className: "btn_start" }, "Home"))),
                    react_1.default.createElement("div", null, userCheck ? react_1.default.createElement("h4", null, "You are Logged!") : "")),
                react_1.default.createElement("div", { className: "div2nav" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("ul", null,
                            react_1.default.createElement("li", null, userCheck ? (react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.PRIVATE}${Paths_1.EDIT}` }, "Edit Info")) : ("")),
                            react_1.default.createElement("li", null, userCheck ? (react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.PRIVATE}${Paths_1.LIST}/all` }, "All list")) : (react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.LIST}/all` }, "All list"))),
                            react_1.default.createElement("li", null,
                                " ",
                                userCheck ? (react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.PRIVATE}` }, "My Info")) : (react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.LOGIN}` }, "Login"))),
                            react_1.default.createElement("li", null, userCheck ? (react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.PRIVATE}${Paths_1.DELETE}/${userCheck}` }, "Delete account")) : (react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.REGISTER}` }, "Register"))))))),
            react_1.default.createElement("div", { className: "divBlock2" },
                react_1.default.createElement("div", { className: "div3nav" },
                    react_1.default.createElement("div", { className: "divLog" }, userCheck ? (react_1.default.createElement("button", { className: "btn_logout", onClick: () => handleLogout() }, "Logout")) : (react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.LOGIN}` },
                        react_1.default.createElement("button", { className: "btn_login" }, "Login")))),
                    react_1.default.createElement("div", null, (rol === "admin" || rol === "web_master") && userCheck ? (react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.PRIVATE}/${route}` },
                        react_1.default.createElement("button", { className: "btn_logout" }, route))) : (""))),
                react_1.default.createElement("div", { className: "div4nav" },
                    react_1.default.createElement(Input_1.default, null))))));
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map