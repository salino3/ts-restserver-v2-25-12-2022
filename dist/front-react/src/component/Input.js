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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const GlobalContext_1 = require("../context/GlobalContext");
const Card_1 = __importDefault(require("./Card"));
const Input = () => {
    const { state } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const { datos, userCheck } = state;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [first, setFirst] = (0, react_1.useState)();
    const handleChange = (event) => {
        setFirst(event.target.value || "");
    };
    const onSearch = (event) => {
        event.preventDefault();
        //
        let Searching = "";
        if (event &&
            event.target &&
            event.target.searching &&
            event.target.searching.value) {
            Searching = event.target.searching.value;
        }
        if (!Searching) {
            return;
        }
        // 
        let checkUserName = {
            email: "",
            id: "",
        };
        datos.forEach((object) => {
            if (object.email === Searching || object.id.toString() === Searching) {
                checkUserName = object;
            }
        });
        if ((checkUserName.email === Searching ||
            checkUserName.id.toString() === Searching) &&
            Searching !== "") {
            if (userCheck) {
                setFirst("" || undefined);
                return navigate(`/private/list/${checkUserName.id}`);
            }
            navigate(`/list/${checkUserName.id}`);
        }
        else {
            alert("Sorry, we don't have this email in the database");
        }
        setFirst("" || undefined);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("form", { onSubmit: onSearch },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: "divLabel" },
                        react_1.default.createElement("label", null, "Look for a user(active accounts)")),
                    react_1.default.createElement("input", { onChange: handleChange, value: first || "", type: "text", name: "searching", placeholder: "email or code.." }),
                    react_1.default.createElement("button", { onClick: () => onSearch(first), className: "btnNav" }, "Search"),
                    react_1.default.createElement("div", { className: "divCard" },
                        react_1.default.createElement(Card_1.default, { first: first, setFirst: setFirst })))))));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map