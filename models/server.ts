import express, {Application} from 'express';
import useRoutes from '../routes/usuario';
import cors from "cors";
import db from "../db/connection";

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: '/api/usuarios'
  };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
    
    this.dbConnection();
    this.middlewares();
    // Definir mis rutas
    this.routes();
   };

// Middleware
middlewares(){
    // CORS
 this.app.use(cors({

 }));
    //Lectura del body
 this.app.use(express.json());

    // Carpeta Publica
 this.app.use(express.static('public'));
};

// todo: conectar base de datos
async dbConnection() {

    try {
       await db.authenticate();
       console.log('Database online!');
    } catch (error: any) {
        throw new Error(error);
    };
};


routes() {
    this.app.use(this.apiPaths.usuarios, useRoutes );
};

    listening() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ' + this.port);
        });
    };
};


export default Server;







