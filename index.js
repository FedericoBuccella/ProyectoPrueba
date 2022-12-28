import express from "express"
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import path from "path"
import {create} from "express-handlebars"

import { completarDatos, sendVideo, inicio } from "./function.js"
import { UsuarioRegister, UsuarioRender } from "./usuarios/Usuarios.js"

import * as url from 'url';
import { PORT } from "./config.js"; 
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
let listenApp = null

//Conexion a base de datos
import mongoose from "mongoose"

const user = "fedec123"
const password = "fedec123"
const DBname = "Entrevistas"
const uri = `mongodb+srv://${user}:${password}@cluster0.a5fmgfr.mongodb.net/${DBname}?retryWrites=true&w=majority`

mongoose.set('strictQuery', true);

//Views
app.engine(
    ".hbs",
    create({
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      defaulLayout: "main",
      extname: ".hbs",
    }).engine
);

app.set("view engine", ".hbs");
app.use(express.static(path.join(__dirname, "/views")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", inicio)
app.get("/entrevista", completarDatos)
app.post("/entrevista", UsuarioRegister)
app.get("/grabarVideo", sendVideo)
app.get("/usuarios", UsuarioRender)

mongoose.connect( uri,{ keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        
        console.log("Error al conectar la base de datos")
    
    } else {
        
        console.log('Base de datos conectada')
        listenApp = app.listen(PORT, (err) => {
            if(!err){
              
                console.log(`Server listening port 3000`)
            }else {
                console.log('Error al escuchar el puerto')
            }
        })    
    }
         
    }
)
