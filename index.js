const express = require("express")
const app = express()
const path = require ("path")
const { completarDatos, sendVideo,  } = require ("./function")
const port = 8080

app.use(express.static(path.join(__dirname, "/views")))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/entrevista", completarDatos)
app.get("/grabarVideo", sendVideo)

app.listen(port, () => {console.log(`Servidor estableciendo conexión con el puerto: ${port}`)})