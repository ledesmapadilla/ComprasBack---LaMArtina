import { Router } from "express";
import usuarioRoutes from "./usuario.routes.js";
import proveedorRoutes from "./proveedor.routes.js";
import berdinaPedidoRoutes from "./berdinaPedido.routes.js";

const router = Router();
router.use("/usuarios", usuarioRoutes);
router.use("/proveedores", proveedorRoutes);
router.use("/berdina/pedidos", berdinaPedidoRoutes);

export default router;
