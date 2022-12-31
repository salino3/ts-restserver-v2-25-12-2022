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
exports.RegisterPage = void 0;
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Paths_1 = require("../config-Paths/Paths");
const GlobalContext_1 = require("../context/GlobalContext");
const RegisterPage = () => {
    const { addStudent } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [first, setFirst] = (0, react_1.useState)({
        name: "",
        email: "",
        password: "",
        rol: "",
    });
    function handleChange(event) {
        setFirst(Object.assign(Object.assign({}, first), { [event === null || event === void 0 ? void 0 : event.target.name]: event === null || event === void 0 ? void 0 : event.target.value }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        addStudent(first);
        navigate(Paths_1.LOGIN);
    }
    ;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "divRP" },
            react_1.default.createElement("h1", null, "Register Page"),
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "registerForm" },
                react_1.default.createElement("label", { htmlFor: "password" }, "What's your Name?"),
                react_1.default.createElement("br", null),
                react_1.default.createElement("input", { type: "text", name: "name", placeholder: "Text your name", onChange: handleChange, required: true }),
                " ",
                react_1.default.createElement("br", null),
                " ",
                react_1.default.createElement("br", null),
                react_1.default.createElement("label", { htmlFor: "password" }, "What's your email?"),
                react_1.default.createElement("br", null),
                react_1.default.createElement("input", { type: "email", name: "email", placeholder: "Text your email", onChange: handleChange, required: true }),
                " ",
                react_1.default.createElement("br", null),
                " ",
                react_1.default.createElement("br", null),
                " ",
                react_1.default.createElement("label", { htmlFor: "password" }, "Choose your password"),
                " ",
                react_1.default.createElement("br", null),
                react_1.default.createElement("input", { type: "password", name: "password", placeholder: "Text your password", onChange: handleChange, required: true }),
                " ",
                react_1.default.createElement("br", null),
                " ",
                react_1.default.createElement("br", null),
                react_1.default.createElement("label", { htmlFor: "rol" }, "What's your Rol?"),
                " ",
                react_1.default.createElement("br", null),
                react_1.default.createElement("select", { placeholder: "Text your email", onChange: handleChange, required: true, name: "rol" },
                    react_1.default.createElement("option", { value: "" }, "- -"),
                    react_1.default.createElement("option", { value: "user" }, "User"),
                    react_1.default.createElement("option", { value: "admin" }, "Admin"),
                    react_1.default.createElement("option", { value: "web_master" }, "Web Master")),
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null),
                react_1.default.createElement("button", { className: "btn-RP" }, "Submit")))));
};
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=RegisterPage.js.map