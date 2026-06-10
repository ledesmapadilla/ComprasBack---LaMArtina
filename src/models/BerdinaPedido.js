import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  fecha:           { type: Date, required: true },
  nombre_repuesto: { type: String, required: true, trim: true },
  descripcion:     { type: String, trim: true },
  urgencia:        { type: String, enum: ['Baja', 'Media', 'Alta', 'Crítica'], required: true },
  destino:         { type: String, required: true, trim: true },
  estado:          { type: String, enum: ['Pendiente', 'En proceso', 'Completado', 'Cancelado'], default: 'Pendiente' },
}, { timestamps: true })

export default mongoose.model('BerdinaPedido', schema)
