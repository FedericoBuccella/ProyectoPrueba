const path = require("path")

function completarDatos( req, res){
    res.sendFile(path.join(__dirname, "./views/entrevista.html"))
}

function sendVideo (req, res){
    res.sendFile(path.join(__dirname, "./views/grabarVideo.html"))
}

module.exports= {  
    completarDatos,
    sendVideo
}