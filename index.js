import express from "express"
const app = express()
import path from "path"
import { completarDatos, sendVideo, inicio } from "./function.js"
import * as url from 'url';
import { PORT } from "./config.js"; 
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(path.join(__dirname, "/views")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/app", inicio)
app.get("/app/entrevista", completarDatos)
app.get("/app/grabarVideo", sendVideo)

app.listen(PORT, () => {console.log('Servidor estableciendo conexión con el puerto')})