import { Router } from "express";
import { login, getAll, crear, actualizar, borrar } from "../controllers/usuario.controller.js";

const router = Router();

router.post("/login", login);
router.get("/", getAll);
router.post("/", crear);
router.put("/:id", actualizar);
router.delete("/:id", borrar);

export default router;
