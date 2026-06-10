import { Router } from "express";
import usuarioRoutes from "./usuario.routes.js";
import proveedorRoutes from "./proveedor.routes.js";

const router = Router();
router.use("/usuarios", usuarioRoutes);
router.use("/proveedores", proveedorRoutes);

export default router;
