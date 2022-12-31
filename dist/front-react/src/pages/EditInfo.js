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
exports.EditInfo = void 0;
const react_1 = __importStar(require("react"));
const GlobalContext_1 = require("../context/GlobalContext");
const EditInfo = () => {
    const { state, oneUser, setOneUser, updateUser, loginAdmin, loginWB, logoutWB, logoutAdmin } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const { userCheck } = state;
    const [localOneUser, setLocalOneUser] = (0, react_1.useState)(oneUser);
    const { name, email, password, rol } = localOneUser;
    function handleChange(event) {
        setLocalOneUser(Object.assign(Object.assign({}, localOneUser), { [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(String(userCheck), localOneUser);
        setOneUser(localOneUser);
    };
    (0, react_1.useEffect)(() => {
        switch (rol) {
            case "user":
                logoutWB();
                logoutAdmin();
                break;
            case "admin":
                logoutWB();
                loginAdmin();
                break;
            case "web_master":
                loginWB();
                logoutAdmin();
                break;
            default:
                break;
        }
    }, [oneUser.rol]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "Edit Info"),
        react_1.default.createElement("div", { className: "divEdit" },
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement("div", { className: "myInfo" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", null, "Name:")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("input", { type: "text", name: "name", placeholder: "What's your name?", onChange: handleChange, value: name || "", required: true }),
                        " ",
                        react_1.default.createElement("p", null, name)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", null, "Email:")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("input", { type: "email", name: "email", placeholder: "What's your email?", onChange: handleChange, value: email || "", required: true }),
                        " ",
                        react_1.default.createElement("p", null, email)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", null, "Password:")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("input", { type: "password", name: "password", placeholder: "What's will be your password?", onChange: handleChange, value: password || "", required: true }),
                        " ",
                        react_1.default.createElement("p", null, password)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", null, "Rol:")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("select", { className: "mySelect", placeholder: "Text your email", onChange: handleChange, value: rol || "", required: true, name: "rol" },
                            react_1.default.createElement("option", { value: "" }, "- -"),
                            react_1.default.createElement("option", { value: "user" }, "User"),
                            react_1.default.createElement("option", { value: "admin" }, "Admin"),
                            react_1.default.createElement("option", { value: "web_master" }, "Web Master")),
                        " ",
                        react_1.default.createElement("p", null, rol))),
                react_1.default.createElement("button", { type: "submit" }, "Submit")))));
};
exports.EditInfo = EditInfo;
//# sourceMappingURL=EditInfo.js.map