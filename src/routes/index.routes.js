import { Router } from "express";
import usuarioRoutes from "./usuario.routes.js";
import proveedorRoutes from "./proveedor.routes.js";
import berdinaPedidoRoutes from "./berdinaPedido.routes.js";
import sanPabloPedidoRoutes from "./sanPabloPedido.routes.js";
import centroCostoRoutes from "./centroCosto.routes.js";
import ocRoutes from "./oc.routes.js";

const router = Router();
router.use("/usuarios", usuarioRoutes);
router.use("/proveedores", proveedorRoutes);
router.use("/berdina/pedidos", berdinaPedidoRoutes);
router.use("/sanpablo/pedidos", sanPabloPedidoRoutes);
router.use("/centros-costo", centroCostoRoutes);
router.use("/oc", ocRoutes);

export default router;
