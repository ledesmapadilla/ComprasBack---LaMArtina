import { Router } from 'express'
import { getAll, crear } from '../controllers/oc.controller.js'

const router = Router()
router.get('/', getAll)
router.post('/', crear)

export default router
