"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFound = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const PageNotFound = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "divPNF" },
            react_1.default.createElement("li", { onClick: () => navigate(-1) },
                react_1.default.createElement("u", null, "Go Back")),
            react_1.default.createElement("img", { src: "/assets/pagenotfound.jfif", alt: "Page Not Found" }))));
};
exports.PageNotFound = PageNotFound;
//# sourceMappingURL=PageNotFound.js.map