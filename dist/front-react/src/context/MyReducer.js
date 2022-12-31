"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReducer = void 0;
//?
function MyReducer(state, action) {
    //* Actions Loading 
    switch (action.type) {
        case "LOAD_DATA":
            return Object.assign(Object.assign({}, state), { datos: action.payload });
        case "LOAD_USER_CHECK":
            return Object.assign(Object.assign({}, state), { userCheck: action.payload });
        //* Actions Changing
        case "UPDATE_USER_CHECK_TRUE":
            return Object.assign(Object.assign({}, state), { userCheck: action.payload });
        case "UPDATE_USER_CHECK_FALSE":
            return Object.assign(Object.assign({}, state), { userCheck: action.payload });
        default:
            return state;
    }
}
exports.MyReducer = MyReducer;
//# sourceMappingURL=MyReducer.js.map