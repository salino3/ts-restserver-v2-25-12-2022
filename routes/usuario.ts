import { Router } from "express";
import {
  getUsuarios,
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario,
  destroyUsuario,
} from "../controllers/usuarios";

const router = Router();

router.get("/",       getUsuarios);

router.get("/:id",    getUsuario);

router.post("/",      postUsuario);

router.put("/:id",    putUsuario);

router.patch("/:id", deleteUsuario);

router.delete("/:id", destroyUsuario);

export default router;






