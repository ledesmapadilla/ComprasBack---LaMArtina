import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

export const login = async (req, res) => {
  try {
    const { usuario, password } = req.body;
    const user = await Usuario.findOne({ usuario, activo: true });
    if (!user) return res.status(401).json({ error: "Credenciales inválidas" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: "Credenciales inválidas" });

    const token = jwt.sign(
      { id: user._id, nombre: user.nombre, usuario: user.usuario, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );
    res.json({ token, usuario: { id: user._id, nombre: user.nombre, usuario: user.usuario, rol: user.rol } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const usuarios = await Usuario.find({}, "-password").sort({ createdAt: -1 });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const crear = async (req, res) => {
  try {
    const { nombre, usuario, password, rol } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const nuevo = await Usuario.create({ nombre, usuario, password: hash, rol });
    const { password: _, ...data } = nuevo.toObject();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const { nombre, usuario, password, rol } = req.body;
    const update = { nombre, usuario, rol };
    if (password) update.password = await bcrypt.hash(password, 10);
    const updated = await Usuario.findByIdAndUpdate(req.params.id, update, { new: true, select: "-password" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const borrar = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
