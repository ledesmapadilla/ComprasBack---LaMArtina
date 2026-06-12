import { Router } from 'express'
import { getAll, crear, actualizarItem, borrarItem, ping } from '../controllers/sanPabloPedido.controller.js'

const router = Router()
router.get('/ping', ping)
router.get('/', getAll)
router.post('/', crear)
router.put('/:id/items/:itemId', actualizarItem)
router.delete('/:id/items/:itemId', borrarItem)

export default router
