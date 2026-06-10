import { Router } from "express";
import usuarioRoutes from "./usuario.routes.js";
import proveedorRoutes from "./proveedor.routes.js";
import berdinaPedidoRoutes from "./berdinaPedido.routes.js";
import centroCostoRoutes from "./centroCosto.routes.js";

const router = Router();
router.use("/usuarios", usuarioRoutes);
router.use("/proveedores", proveedorRoutes);
router.use("/berdina/pedidos", berdinaPedidoRoutes);
router.use("/centros-costo", centroCostoRoutes);

export default router;
