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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const GlobalContext_1 = require("./GlobalContext");
const MyReducer_1 = require("./MyReducer");
const axios_1 = __importDefault(require("axios"));
;
const MyProvider = ({ children }) => {
    var _a, _b, _c;
    const [oneUser, setOneUser] = (0, react_1.useState)({});
    //
    //* Personal ID during Login
    let userID = "USERID";
    const [userCheck, setUserCheck] = (0, react_1.useState)(window.localStorage.getItem(userID));
    //
    const [state, dispatch] = (0, react_1.useReducer)(MyReducer_1.MyReducer, {
        datos: [],
        userCheck: null,
    });
    //* API call
    const fetchApi = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        fetch("http://localhost:8000/api/usuarios")
            .then((response) => response.json())
            .then((data) => {
            // Envía la acción de carga de datos al reducer
            dispatch({
                type: "LOAD_DATA",
                payload: data,
            });
        });
    }), []);
    (0, react_1.useEffect)(() => {
        fetchApi();
    }, []);
    // Actualiza el valor de userCheck en 'state'
    (0, react_1.useEffect)(() => {
        dispatch({
            type: "LOAD_USER_CHECK",
            payload: userCheck,
        });
    }, [userCheck]);
    //* my Actions
    //
    //* logoutUser
    const loginUser = (0, react_1.useCallback)(function (info) {
        dispatch({
            type: "UPDATE_USER_CHECK_TRUE",
            payload: window.localStorage.setItem(userID, JSON.stringify(info)),
        });
        setUserCheck(info);
    }, []);
    //* logoutUser
    const logoutUser = (0, react_1.useCallback)(function () {
        dispatch({
            type: "UPDATE_USER_CHECK_FALSE",
            payload: window.localStorage.removeItem(userID),
        });
        setUserCheck("");
    }, []);
    //* Add a user
    const addStudent = (0, react_1.useCallback)((userData) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios_1.default.post("http://localhost:8000/api/usuarios", userData);
            fetchApi();
            alert("User registered!");
        }
        catch (error) {
            console.log(error);
            alert("There has been an error!");
        }
    }), []);
    //* View User info
    const loadUser = (0, react_1.useCallback)((id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            //
            const result = yield axios_1.default.get(`http://localhost:8000/api/usuarios/${id}`);
            console.log(result);
            setOneUser(result.data);
        }
        catch (error) {
            console.log(error);
            alert("User with this code is not in the database");
        }
    }), []);
    //* Delete a User
    const deleteUser = (0, react_1.useCallback)((id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios_1.default.patch(`http://localhost:8000/api/usuarios/${id}`);
            logoutWB();
            logoutAdmin();
            logout();
            logoutUser();
            fetchApi();
            alert("Deleted the account successfully");
        }
        catch (error) {
            alert("There has been an error!");
            console.log(error);
        }
    }), []);
    //* Modify data student
    const updateUser = (0, react_1.useCallback)((id, user) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios_1.default.put(`http://localhost:8000/api/usuarios/${id}`, user);
            fetchApi();
            alert("Modified!");
        }
        catch (error) {
            alert("There has been an error!");
            console.log(error);
        }
    }), []);
    //* Delete a User from Web Master
    const destroyUser = (0, react_1.useCallback)((id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios_1.default.delete(`http://localhost:8000/api/usuarios/${id}`);
            fetchApi();
            alert("User Deleted!");
        }
        catch (error) {
            alert("There has been an error!");
            console.log(error);
        }
    }), []);
    //* isAuthenticated
    let user = "USER";
    const [isAuthenticated, setIsAuthenticated] = (0, react_1.useState)((_a = window.localStorage.getItem(user)) !== null && _a !== void 0 ? _a : false);
    const login = (0, react_1.useCallback)(function () {
        window.localStorage.setItem(user, "true");
        setIsAuthenticated(true);
    }, []);
    const logout = (0, react_1.useCallback)(function () {
        window.localStorage.removeItem(user);
        setIsAuthenticated(false);
    }, []);
    //* Rol Web Master
    let rolWebMaster = "web_master";
    const [webMaster, setWebMaster] = (0, react_1.useState)((_b = window.localStorage.getItem(rolWebMaster)) !== null && _b !== void 0 ? _b : false);
    const loginWB = (0, react_1.useCallback)(function () {
        window.localStorage.setItem(rolWebMaster, "true");
        setWebMaster(true);
        console.log("Executing loginWB");
    }, []);
    const logoutWB = (0, react_1.useCallback)(function () {
        window.localStorage.removeItem(rolWebMaster);
        setWebMaster(false);
        console.log("Executing logoutWB");
    }, []);
    //* Rol Admin
    let rolAdmin = "admin";
    const [Admin, setAdmin] = (0, react_1.useState)((_c = window.localStorage.getItem(rolAdmin)) !== null && _c !== void 0 ? _c : false);
    const loginAdmin = (0, react_1.useCallback)(function () {
        window.localStorage.setItem(rolAdmin, "true");
        setAdmin(true);
        console.log("Executing loginAdmin");
    }, []);
    const logoutAdmin = (0, react_1.useCallback)(function () {
        window.localStorage.removeItem(rolAdmin);
        setAdmin(false);
        console.log("Executing logoutAdmin");
    }, []);
    return (react_1.default.createElement(GlobalContext_1.GlobalContext.Provider, { value: {
            //
            state,
            loginUser,
            logoutUser,
            isAuthenticated,
            login,
            logout,
            updateUser,
            setOneUser,
            //
            addStudent,
            loadUser,
            oneUser,
            deleteUser,
            destroyUser,
            // rols
            webMaster,
            loginWB,
            logoutWB,
            Admin,
            loginAdmin,
            logoutAdmin,
        } }, children));
};
exports.default = MyProvider;
//# sourceMappingURL=MyProvider.js.map