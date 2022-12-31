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
const GlobalContext_1 = require("../context/GlobalContext");
;
const Card = ({ first, setFirst }) => {
    const { state } = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
    const { datos } = state;
    let character = ")";
    const onSearchCard = (event) => {
        setFirst(event);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, !datos
        ? "Loading"
        : datos
            .filter((item) => {
            let searchTerm = "";
            let x = first;
            searchTerm = (x === null || x === void 0 ? void 0 : x.toLowerCase()) || "";
            const theemail = item.email.toLowerCase() || "";
            const theid = item.id.toString();
            return (searchTerm &&
                (theid.includes(searchTerm) || theemail.includes(searchTerm)) &&
                (theemail || theid));
        })
            .slice(0, 10)
            .filter((y) => y["state"] === true)
            .map((item, index) => (react_1.default.createElement("div", { onClick: () => onSearchCard(item.email), className: "divRows", key: index },
            item.id,
            " ",
            character,
            " \u00A0 ",
            item.email)))));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map