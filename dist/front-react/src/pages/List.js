"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_router_dom_1 = require("react-router-dom");
const GlobalContext_1 = require("../context/GlobalContext");
const List = () => {
    const { state } = (0, react_2.useContext)(GlobalContext_1.GlobalContext);
    const { userCheck } = state;
    const { id } = (0, react_router_dom_1.useParams)();
    let myId = Number(id);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "List"),
        react_1.default.createElement("div", { className: "divAdmin" },
            react_1.default.createElement("div", { className: "divUser" },
                react_1.default.createElement("h5", null, myId ? `user nº ${id} in red ${String(userCheck) === id ? " << you" : ""}` : "")),
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", null, "Code"),
                        react_1.default.createElement("th", null, "Name"),
                        react_1.default.createElement("th", null, "Email"))),
                react_1.default.createElement("tbody", null, state.datos
                    .filter((x) => x["state"] === true)
                    .map((item) => (react_1.default.createElement("tr", { key: item.id, className: item.id === myId ? "this " : "myTr" },
                    react_1.default.createElement("td", null, item.id),
                    react_1.default.createElement("td", null, item.name),
                    react_1.default.createElement("td", null, item.email)))))))));
};
exports.List = List;
//# sourceMappingURL=List.js.map