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
exports.Home = void 0;
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Paths_1 = require("../config-Paths/Paths");
const Home = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null,
            React.createElement("u", null, "Welcome")),
        React.createElement("h2", null, "Home"),
        React.createElement("div", { className: "divHome" },
            React.createElement("div", { className: "divLinks" },
                React.createElement("div", null,
                    React.createElement("p", null, "The register page:"),
                    " ",
                    React.createElement(react_router_dom_1.Link, { className: "LinkLogin", to: `${Paths_1.REGISTER}` }, "Go to Register")),
                React.createElement("br", null),
                React.createElement("div", null,
                    React.createElement("p", null, "The login page:"),
                    " \u00A0 \u00A0",
                    React.createElement(react_router_dom_1.Link, { to: `${Paths_1.LOGIN}` }, "Go to Login"))),
            React.createElement("div", { className: "thelogo" },
                React.createElement("img", { src: "../logo512.png", alt: "Logo", width: "220" })))));
};
exports.Home = Home;
//# sourceMappingURL=Home.js.map