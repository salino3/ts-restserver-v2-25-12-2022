"use strict";
// npm i -g typescript
// npm init -y
// tsc --init
// npm i tslint --save-dev
// npm i typescript --save-dev
// ./node_modules/.bin/tslint --init
// tsc <- otra vez, para traducir y aplicar todos los archivos TS a JS
// npm i express cors dotenv
// npm i --save-dev @types/express
// tsc --watch
// npm i --save-dev @types/cors
// npm install --save sequelize
// npm install --save mysql2
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//*> para iniciar: nodemon dist/app.js   
//*> tsc --watch --jsx react //<- para que modificando el código, se actulize el proyecto 
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
// Configurar dotenv 
dotenv_1.default.config();
// Crear Objeto server con class Server
const server = new server_1.default();
server.listening();
//# sourceMappingURL=app.js.map