"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("node_ts", "root", "Salerno1", {
    host: "localhost",
    dialect: "mysql",
    port: 3307,
    //logging: false  
});
exports.default = db;
//# sourceMappingURL=connection.js.map