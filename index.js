import express from "express"
const app = express()
import path from "path"
import { completarDatos, sendVideo } from "./function.js"
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const port = 8080

app.use(express.static(path.join(__dirname, "/views")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/entrevista", completarDatos)
app.get("/grabarVideo", sendVideo)

app.listen(port, () => {console.log(`Servidor estableciendo conexión con el puerto: ${port}`)})