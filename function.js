
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import path from "path"

export function completarDatos( req, res){
    res.sendFile(path.join(__dirname, "./views/entrevista.html"))
}

export function sendVideo (req, res){
    res.sendFile(path.join(__dirname, "./views/grabarVideo.html"))
}

export function inicio (req, res) {
    res.sendFile(path.join(__dirname, "./views/inicio.html"))
}
