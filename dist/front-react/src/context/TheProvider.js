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
exports.TheProvider = exports.GlobalContexts = void 0;
const react_1 = __importStar(require("react"));
// Contexto global creado con createContext()
exports.GlobalContexts = (0, react_1.createContext)([]);
// Reducer que maneja las acciones de carga de datos y modifica el estado
function reducer(state, action) {
    switch (action.type) {
        case "LOAD_DATA":
            // Modifica el estado con los datos cargados de la API
            return Object.assign(Object.assign({}, state), { data: action.payload });
        default:
            return state;
    }
}
;
;
// Provider que inicializa el estado y el reducer y realiza la llamada a la API
const TheProvider = ({ children }) => {
    // Inicializa el estado y el reducer con useReducer
    const [state, dispatch] = (0, react_1.useReducer)(reducer, { data: [] });
    // Realiza la llamada a la API al montar el componente
    (0, react_1.useEffect)(() => {
        fetch("http://localhost:8000/api/usuarios")
            .then((response) => response.json())
            .then((data) => {
            // Envía la acción de carga de datos al reducer
            dispatch({
                type: "LOAD_DATA",
                payload: data,
            });
        });
    }, []);
    // Renderiza el Provider con el contexto y el estado actualizado
    return (react_1.default.createElement(exports.GlobalContexts.Provider, { value: {} }, children));
};
exports.TheProvider = TheProvider;
//# sourceMappingURL=TheProvider.js.map