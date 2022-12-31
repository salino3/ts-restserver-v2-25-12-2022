// npm i -g typescript
// npm init -y
// tsc --init
// npm i tslint --save-dev
// npm i typescript --save-dev
// ./node_modules/.bin/tslint --init
// npm i express cors dotenv
// npm i --save-dev @types/express
// tsc --watch
// npm i --save-dev @types/cors
// npm install --save sequelize
// npm install --save mysql2

//*> para iniciar: nodemon dist/app.js   
//*> tsc --watch --jsx react //<- para que modificando el código, se actulize el proyecto 

import dotenv from 'dotenv';
import Server from './models/server';

// Configurar dotenv 
dotenv.config();

// Crear Objeto server con class Server
const server = new Server();

server.listening();
  