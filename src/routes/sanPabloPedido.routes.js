import { Router } from 'express'
import { getAll, crear, actualizarItem, borrarItem, ping, getHistorialItem } from '../controllers/sanPabloPedido.controller.js'

const router = Router()
router.get('/ping', ping)
router.get('/', getAll)
router.post('/', crear)
router.get('/:id/items/:itemId/historial', getHistorialItem)
router.put('/:id/items/:itemId', actualizarItem)
router.delete('/:id/items/:itemId', borrarItem)

export default router
