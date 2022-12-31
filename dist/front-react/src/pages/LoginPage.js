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
exports.LoginPage = void 0;
const react_1 = __importStar(require("react"));
const GlobalContext_1 = require("../context/GlobalContext");
const LoginPage = () => {
    const { state, login, loginUser, loginWB, loginAdmin } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const { datos } = state;
    function handleSubmit(event) {
        event.preventDefault();
        let InfoInput = event.target.email.value;
        let InfoInput2 = event.target.password.value;
        let checkUserEmail = "error email";
        let checkUserPsw = "error psw";
        // checking email
        datos.forEach((object) => {
            if (object.email === InfoInput) {
                //
                checkUserEmail = object;
            }
        });
        // checking password
        datos.forEach((object) => {
            if (object.password === InfoInput2) {
                //
                checkUserPsw = object;
            }
        });
        //
        if (checkUserEmail === checkUserPsw &&
            checkUserPsw.email !== undefined) {
            if (checkUserPsw.state === false) {
                return alert('This user account has been delete');
            }
            if (checkUserEmail.rol === "web_master") {
                loginWB();
            }
            if (checkUserEmail.rol === "admin") {
                loginAdmin();
            }
            login();
            alert("Logged!");
            loginUser(checkUserPsw.id);
        }
        else {
            alert("Sorry the password it's incorrect");
        }
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "Login Page"),
        react_1.default.createElement("div", { className: "divLogin" },
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement("label", null, "Your Email"),
                react_1.default.createElement("br", null),
                react_1.default.createElement("input", { type: "text", name: "email", placeholder: "What's your email?", autoComplete: "email", required: true }),
                react_1.default.createElement("br", null),
                " ",
                react_1.default.createElement("br", null),
                react_1.default.createElement("label", null, "Your Password"),
                react_1.default.createElement("br", null),
                react_1.default.createElement("input", { type: "password", name: "password", placeholder: "Text your password?", autoComplete: "current-password", required: true }),
                react_1.default.createElement("br", null),
                " ",
                react_1.default.createElement("br", null),
                react_1.default.createElement("button", { type: "submit" }, "Submit")))));
};
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map