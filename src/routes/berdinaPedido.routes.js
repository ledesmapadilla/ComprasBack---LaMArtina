import { Router } from 'express'
import { getAll, crear, actualizarItem, borrarItem } from '../controllers/berdinaPedido.controller.js'

const router = Router()
router.get('/', getAll)
router.post('/', crear)
router.put('/:id/items/:itemId', actualizarItem)
router.delete('/:id/items/:itemId', borrarItem)

export default router
