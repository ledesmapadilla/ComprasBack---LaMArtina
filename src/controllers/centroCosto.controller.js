import CentroCosto from '../models/CentroCosto.js'

export const getAll = async (req, res) => {
  try {
    const centros = await CentroCosto.find().sort({ sigla: 1 })
    res.json(centros)
  } catch (err) { res.status(500).json({ error: err.message }) }
}

export const crear = async (req, res) => {
  try {
    const { sigla, nombre } = req.body
    if (!sigla?.trim()) return res.status(400).json({ error: 'La sigla es obligatoria.' })
    if (!nombre?.trim()) return res.status(400).json({ error: 'El nombre es obligatorio.' })
    const nuevo = await CentroCosto.create({ sigla, nombre })
    res.status(201).json(nuevo)
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ error: 'Ya existe un CC con esa sigla.' })
    res.status(500).json({ error: err.message })
  }
}

export const actualizar = async (req, res) => {
  try {
    const { sigla, nombre } = req.body
    const actualizado = await CentroCosto.findByIdAndUpdate(
      req.params.id, { sigla, nombre }, { new: true, runValidators: true }
    )
    if (!actualizado) return res.status(404).json({ error: 'CC no encontrado.' })
    res.json(actualizado)
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ error: 'Ya existe un CC con esa sigla.' })
    res.status(500).json({ error: err.message })
  }
}

export const borrar = async (req, res) => {
  try {
    const eliminado = await CentroCosto.findByIdAndDelete(req.params.id)
    if (!eliminado) return res.status(404).json({ error: 'CC no encontrado.' })
    res.json({ ok: true })
  } catch (err) { res.status(500).json({ error: err.message }) }
}
