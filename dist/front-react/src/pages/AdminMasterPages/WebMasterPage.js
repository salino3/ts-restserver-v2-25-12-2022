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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Paths_1 = require("../../config-Paths/Paths");
const GlobalContext_1 = require("../../context/GlobalContext");
const WebMasterPage = () => {
    const { state, destroyUser, oneUser, updateUser } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const { name, } = oneUser;
    const { datos } = state;
    const [first, setFirst] = (0, react_1.useState)(null);
    //
    const inputRef = (0, react_1.useRef)({
        id: (0, react_1.useRef)(null),
        email: (0, react_1.useRef)(null),
        password: (0, react_1.useRef)(null),
    });
    function CleanInputs() {
        if (inputRef.current.id.current) {
            inputRef.current.id.current.value = "";
        }
        if (inputRef.current.email.current) {
            inputRef.current.email.current.value = "";
        }
        if (inputRef.current.password.current) {
            inputRef.current.password.current.value = "";
        }
    }
    ;
    function handleSubmit(event) {
        event.preventDefault();
        const target = event.target || {};
        let Email = target.email.value;
        let Password = target.password.value;
        let Id = target.id.value;
        let NumId = Number(Id);
        //
        let checkUserEmail = "error email";
        let checkUserPsw = "error password";
        // checking email
        datos.forEach((object) => {
            if (object.email === Email) {
                //
                checkUserEmail = object;
            }
        });
        // checking password
        datos.forEach((object) => {
            if (object.password === Password) {
                //
                checkUserPsw = object;
            }
        });
        if (checkUserEmail === checkUserPsw &&
            checkUserPsw.email !== undefined &&
            checkUserEmail.id === NumId) {
            CleanInputs();
            if (NumId === oneUser.id) {
                return alert("In this page you can not delete your account");
            }
            destroyUser(Id);
        }
        else {
            CleanInputs();
            alert("The data does not match");
        }
    }
    ;
    function toggleChange(item) {
        setFirst(Object.assign(Object.assign({}, item), { state: !item.state }));
        console.log({ first });
    }
    (0, react_1.useEffect)(() => {
        if (first !== null) {
            updateUser(String(first.id), first);
        }
    }, [first]);
    console.log("dentro WebMasterPage");
    return (react_1.default.createElement("div", { className: "divMayorWM" },
        react_1.default.createElement(react_router_dom_1.Link, { to: `${Paths_1.ADMIN}` },
            react_1.default.createElement("button", null, "Go to Admin Page")),
        react_1.default.createElement("h1", null,
            "Welcome ",
            name,
            " inside Web Master Page"),
        react_1.default.createElement("div", { className: "divDelete" },
            react_1.default.createElement("b", null, "Delete a user account"),
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement("div", { className: "divInputs" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", null, "Number id"),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("input", { type: "number", name: "id", ref: inputRef.current.id, placeholder: "What's the number id?", required: true }),
                        " "),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", null, "Email"),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("input", { type: "email", name: "email", ref: inputRef.current.email, placeholder: "What's the email?", required: true })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("label", null, "Password"),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("input", { type: "password", name: "password", ref: inputRef.current.password, placeholder: "Text the password?", required: true }))),
                react_1.default.createElement("br", null),
                react_1.default.createElement("button", { type: "submit" }, "Delete Account")),
            react_1.default.createElement("div", { className: "divAdmin" },
                react_1.default.createElement("table", null,
                    react_1.default.createElement("thead", null,
                        react_1.default.createElement("tr", null,
                            react_1.default.createElement("th", null, "Code"),
                            react_1.default.createElement("th", null, "Name"),
                            react_1.default.createElement("th", null, "Email"),
                            react_1.default.createElement("th", null, "password"),
                            react_1.default.createElement("th", null, "rol"),
                            react_1.default.createElement("th", null, "Active"),
                            react_1.default.createElement("th", null, "Actions"))),
                    react_1.default.createElement("tbody", null, state.datos.map((item) => (react_1.default.createElement("tr", { className: "myTr", key: item.id },
                        react_1.default.createElement("td", null, item.id),
                        react_1.default.createElement("td", null, item.name),
                        react_1.default.createElement("td", null, item.email),
                        react_1.default.createElement("td", null, item.password),
                        react_1.default.createElement("td", null, item.rol),
                        react_1.default.createElement("td", null, item.state ? "Yes" : "No"),
                        react_1.default.createElement("td", null,
                            react_1.default.createElement("button", { onClick: () => toggleChange(item) },
                                item.state ? "Deactivate" : "Activate",
                                " user")))))))))));
};
exports.default = WebMasterPage;
//# sourceMappingURL=WebMasterPage.js.map