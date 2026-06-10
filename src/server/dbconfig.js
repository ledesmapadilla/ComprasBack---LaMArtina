import mongoose from "mongoose";
import "colors";

mongoose.connect(process.env.MONGODB)
  .then(() => console.info(`Base de datos ${mongoose.connection.name} conectada`))
  .catch((err) => console.error('MongoDB connection error:', err.message))

export default mongoose;
