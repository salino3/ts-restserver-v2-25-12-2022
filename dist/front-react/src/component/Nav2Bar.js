"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const NavBar = () => {
    return (react_1.default.createElement("nav", { className: "nav2" },
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", null, "Button 1"),
            react_1.default.createElement("button", null, "Button 2")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("input", { type: "text" }),
            react_1.default.createElement("button", null, "Button 3")),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/link1" }, "Link 1")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/link2" }, "Link 2")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/link3" }, "Link 3")))));
};
exports.default = NavBar;
//# sourceMappingURL=Nav2Bar.js.map