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
exports.Private = void 0;
const react_1 = __importStar(require("react"));
const GlobalContext_1 = require("../context/GlobalContext");
const Private = () => {
    const { state, loadUser, oneUser } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const { userCheck } = state;
    (0, react_1.useEffect)(() => {
        if (userCheck) {
            // without refresh the page, moving in another page,
            // the value of userChek will be 'string'  
            loadUser(String(userCheck));
        }
    }, [userCheck]);
    const mynum = Number(userCheck);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "Private Page"),
        react_1.default.createElement("div", null,
            " ",
            react_1.default.createElement("h3", null,
                "User n\u00BA ",
                mynum)),
        react_1.default.createElement("hr", { className: "hrPrivatePage" }),
        react_1.default.createElement("div", { className: "divInfo" },
            react_1.default.createElement("p", null,
                react_1.default.createElement("b", null, "Name:"),
                " ",
                react_1.default.createElement("span", null, oneUser.name)),
            react_1.default.createElement("p", null,
                react_1.default.createElement("b", null, "Email:"),
                " ",
                react_1.default.createElement("span", null, oneUser.email)),
            react_1.default.createElement("p", null,
                react_1.default.createElement("b", null, "Rol:"),
                " ",
                react_1.default.createElement("span", null, oneUser.rol),
                " "))));
};
exports.Private = Private;
//# sourceMappingURL=Private.js.map