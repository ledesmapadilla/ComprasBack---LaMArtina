import mongoose from 'mongoose'

const GRUPOS = ['Pulverizadora', 'Chancho', 'Nodriza', 'Desmalezadora', 'Hervicida', 'Abonadora', 'Riego', 'Arquito', 'Tractores', 'Camioneta', 'Manitou', 'Colectivos', 'Herreria', 'Gomeria', 'Stock', 'Otros']

const itemSchema = new mongoose.Schema({
  nombre_repuesto: { type: String, required: true, trim: true },
  cant:            { type: Number, min: 1 },
  descripcion:     { type: String, trim: true },
  urgencia:        { type: String, enum: ['Baja', 'Media', 'Alta', 'Crítica'], required: true, default: 'Media' },
  grupo:           { type: String, enum: GRUPOS, required: true },
  cc:              { type: String, trim: true },
  estado:          { type: String, enum: ['Pedido', 'Pendiente', 'En proceso', 'Completado', 'Cancelado'], default: 'Pedido' },
})

const pedidoSchema = new mongoose.Schema({
  nro_pedido: { type: Number },
  fecha:      { type: Date, required: true },
  items:      [itemSchema],
}, { timestamps: true })

pedidoSchema.pre('save', async function () {
  if (this.isNew && !this.nro_pedido) {
    const last = await mongoose.model('BerdinaPedido').findOne({ nro_pedido: { $exists: true } }).sort({ nro_pedido: -1 })
    this.nro_pedido = last?.nro_pedido ? last.nro_pedido + 1 : 1
  }
})

export default mongoose.model('BerdinaPedido', pedidoSchema)
