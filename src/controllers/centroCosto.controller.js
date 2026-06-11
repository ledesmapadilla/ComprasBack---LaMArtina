import CentroCosto from '../models/CentroCosto.js'

export const getAll = async (req, res) => {
  try {
    const centros = await CentroCosto.find().sort({ cc: 1 })
    res.json(centros)
  } catch (err) { res.status(500).json({ error: err.message }) }
}

export const crear = async (req, res) => {
  try {
    const { cc, grupo, marca, observaciones } = req.body
    if (!cc?.trim())    return res.status(400).json({ error: 'El CC es obligatorio.' })
    if (!grupo?.trim()) return res.status(400).json({ error: 'El grupo es obligatorio.' })
    const nuevo = await CentroCosto.create({ cc, grupo, marca, observaciones })
    res.status(201).json(nuevo)
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ error: 'Ya existe un CC con ese código.' })
    res.status(500).json({ error: err.message })
  }
}

export const actualizar = async (req, res) => {
  try {
    const { cc, grupo, marca, observaciones } = req.body
    const actualizado = await CentroCosto.findByIdAndUpdate(
      req.params.id, { cc, grupo, marca, observaciones }, { new: true, runValidators: true }
    )
    if (!actualizado) return res.status(404).json({ error: 'CC no encontrado.' })
    res.json(actualizado)
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ error: 'Ya existe un CC con ese código.' })
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
