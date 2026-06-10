import mongoose from 'mongoose'

const centroCostoSchema = new mongoose.Schema({
  sigla:  { type: String, required: true, unique: true, trim: true, uppercase: true },
  nombre: { type: String, required: true, trim: true },
}, { timestamps: true })

export default mongoose.model('CentroCosto', centroCostoSchema)
