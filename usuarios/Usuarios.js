import { UsersRegister } from "../models/usuarioSchema.js";
import path from "path";
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const UsuarioRender = async ( req, res ) => {
    try {
        
        const arrayUsers = await UsersRegister.find().lean()

        res.render("usuarios", {arrayUsers})

    } catch (error) {
        console.log(error)
    }
}

export const UsuarioRegister = async ( req, res ) => {

    const usuarios = req.body

    try {

        const arrayRegister = new UsersRegister(usuarios)
        await arrayRegister.save()

        res.sendfile(path.join(__dirname, "../views/grabarVideo.html"))

    } catch (error) {
        console.log(error)
    }
}