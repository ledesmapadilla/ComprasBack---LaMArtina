import BerdinaPedido from '../models/BerdinaPedido.js'

const validar = ({ fecha, nombre_repuesto, urgencia, grupo }) => {
  if (!fecha) return 'La fecha es obligatoria.'
  if (!nombre_repuesto?.trim()) return 'El nombre del repuesto es obligatorio.'
  if (!urgencia) return 'La urgencia es obligatoria.'
  if (!grupo) return 'El grupo es obligatorio.'
  return null
}

export const getAll = async (req, res) => {
  try {
    const pedidos = await BerdinaPedido.find().sort({ fecha: -1 })
    res.json(pedidos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const crear = async (req, res) => {
  try {
    const err = validar(req.body)
    if (err) return res.status(400).json({ error: err })
    const nuevo = await BerdinaPedido.create(req.body)
    res.status(201).json(nuevo)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const actualizar = async (req, res) => {
  try {
    const err = validar(req.body)
    if (err) return res.status(400).json({ error: err })
    const updated = await BerdinaPedido.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    res.json(updated)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const borrar = async (req, res) => {
  try {
    await BerdinaPedido.findByIdAndDelete(req.params.id)
    res.json({ ok: true })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
