"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Input_1 = __importDefault(require("./Input"));
const Form = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", null,
            react_1.default.createElement(Input_1.default, null))));
};
exports.default = Form;
//# sourceMappingURL=Form.js.map