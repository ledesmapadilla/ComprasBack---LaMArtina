import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import Usuario from "./src/models/Usuario.js";

await mongoose.connect(process.env.MONGODB);

const existe = await Usuario.findOne({ usuario: "superadmin" });
if (!existe) {
  await Usuario.create({
    nombre: "Super Administrador",
    usuario: "superadmin",
    password: await bcrypt.hash("admin123", 10),
    rol: "superadmin",
  });
  console.log("Superadmin creado — usuario: superadmin / password: admin123");
} else {
  console.log("Superadmin ya existe");
}

await mongoose.disconnect();
