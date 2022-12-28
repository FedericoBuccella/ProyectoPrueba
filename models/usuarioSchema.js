import mongoose from "mongoose";

const registerSchema = mongoose.Schema ({
    nombre: String,
    apellido: String,
    email: String,
    telefono: Number
})

export const UsersRegister = mongoose.model('usuarios', registerSchema)