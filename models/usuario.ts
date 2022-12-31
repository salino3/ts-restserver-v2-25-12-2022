import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Usuario = db.define("Usuario", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.BOOLEAN,
  },
  rol: {
    type: DataTypes.STRING,
  },
});

export default Usuario;

