import { Router } from "express";
import { login, getAll, crear, actualizar, borrar } from "../controllers/usuario.controller.js";
import { verificarToken, soloRoles } from "../middleware/auth.js";

const router = Router();

router.post("/login", login);
router.get("/", verificarToken, soloRoles("superadmin"), getAll);
router.post("/", verificarToken, soloRoles("superadmin"), crear);
router.put("/:id", verificarToken, soloRoles("superadmin"), actualizar);
router.delete("/:id", verificarToken, soloRoles("superadmin"), borrar);

export default router;
