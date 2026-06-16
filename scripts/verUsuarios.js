import mongoose from "mongoose";

await mongoose.connect(process.env.MONGODB);

const usuarios = await mongoose.connection.db
  .collection("usuarios")
  .find({}, { projection: { nombre: 1, usuario: 1, password: 1, rol: 1, activo: 1 } })
  .toArray();

console.log("\n=== USUARIOS ===\n");
for (const u of usuarios) {
  const pass = u.password?.startsWith("$2b$") || u.password?.startsWith("$2a$")
    ? "(ya hasheada)"
    : u.password;
  console.log(`Nombre:   ${u.nombre}`);
  console.log(`Usuario:  ${u.usuario}`);
  console.log(`Password: ${pass}`);
  console.log(`Rol:      ${u.rol}`);
  console.log(`Activo:   ${u.activo}`);
  console.log("---");
}

await mongoose.disconnect();
