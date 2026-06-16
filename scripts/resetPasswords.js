import mongoose from "mongoose";

await mongoose.connect(process.env.MONGODB);

const col = mongoose.connection.db.collection("usuarios");
const usuarios = await col.find({}).toArray();

console.log("\n=== RESETEANDO CONTRASEÑAS HASHEADAS ===\n");

for (const u of usuarios) {
  const esHash = u.password?.startsWith("$2b$") || u.password?.startsWith("$2a$");
  if (esHash) {
    const nuevaPass = u.usuario;
    await col.updateOne({ _id: u._id }, { $set: { password: nuevaPass } });
    console.log(`${u.usuario}: contraseña reseteada a "${nuevaPass}"`);
  } else {
    console.log(`${u.usuario}: sin cambios (ya es texto plano: "${u.password}")`);
  }
}

await mongoose.disconnect();
console.log("\nListo.");
