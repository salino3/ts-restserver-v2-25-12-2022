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
const GlobalContext_1 = require("../../context/GlobalContext");
const AdminPage = () => {
    const { oneUser, state } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const { name } = oneUser;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null,
            "Welcome ",
            name,
            " in Admin Page!"),
        react_1.default.createElement("div", { className: "divAdmin" },
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", null, "Code"),
                        react_1.default.createElement("th", null, "Name"),
                        react_1.default.createElement("th", null, "Email"),
                        react_1.default.createElement("th", null, "password"),
                        react_1.default.createElement("th", null, " Active"))),
                react_1.default.createElement("tbody", null, state.datos.map((item) => (react_1.default.createElement("tr", { className: "myTr", key: item.id },
                    react_1.default.createElement("td", null, item.id),
                    react_1.default.createElement("td", null, item.name),
                    react_1.default.createElement("td", null, item.email),
                    react_1.default.createElement("td", null, item.password),
                    react_1.default.createElement("td", null, item.state ? "Yes" : "No")))))))));
};
exports.default = AdminPage;
//# sourceMappingURL=AdminPage.js.map