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
exports.DeletePage = void 0;
const react_1 = __importStar(require("react"));
const GlobalContext_1 = require("../context/GlobalContext");
const DeletePage = () => {
    const { deleteUser, oneUser } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const { name, email, password, id } = oneUser;
    function handleSubmit(event) {
        event.preventDefault();
        let Email = event.target.email.value;
        let Password = event.target.password.value;
        if (Email === email && Password === password) {
            deleteUser(id);
        }
        else {
            alert("The data does not match");
        }
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "Delete Page"),
        react_1.default.createElement("h2", null,
            "Here ",
            name,
            " is for delete your account"),
        react_1.default.createElement("div", { className: "divDelete" },
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement("label", null, "Your Email"),
                react_1.default.createElement("br", null),
                react_1.default.createElement("input", { type: "email", name: "email", placeholder: "What's your email?", required: true }),
                react_1.default.createElement("br", null),
                " ",
                react_1.default.createElement("br", null),
                react_1.default.createElement("label", null, "Your Password"),
                react_1.default.createElement("br", null),
                react_1.default.createElement("input", { type: "password", name: "password", placeholder: "Text your password?", required: true }),
                react_1.default.createElement("br", null),
                " ",
                react_1.default.createElement("br", null),
                react_1.default.createElement("button", { type: "submit" }, "Delete Account")))));
};
exports.DeletePage = DeletePage;
//# sourceMappingURL=DeletePage.js.map