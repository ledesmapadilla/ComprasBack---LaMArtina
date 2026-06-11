import mongoose from 'mongoose'

const centroCostoSchema = new mongoose.Schema({
  cc:            { type: String, required: true, unique: true, trim: true, uppercase: true },
  grupo:         { type: String, required: true, trim: true },
  marca:         { type: String, trim: true, default: '' },
  observaciones: { type: String, trim: true, default: '' },
}, { timestamps: true })

export default mongoose.model('CentroCosto', centroCostoSchema)
