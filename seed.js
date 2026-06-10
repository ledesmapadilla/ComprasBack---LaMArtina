import mongoose from "mongoose";
import Usuario from "./src/models/Usuario.js";

await mongoose.connect(process.env.MONGODB);

await Usuario.deleteMany({});

await Usuario.create({
  nombre: "Super Administrador",
  usuario: "superadmin",
  password: "admin123",
  rol: "superadmin",
});

console.log("Listo — usuario: superadmin / password: admin123");
await mongoose.disconnect();
