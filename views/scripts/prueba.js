function modificar() {
    let anchoCanvas = 1000;
    let altoCanvas = 2000;
    let {createCanvas} = require('canvas');
    let canvas = createCanvas(anchoCanvas, altoCanvas);
    let contexto = canvas.getContext("2d");

    contexto.strokeStyle = "#FFFFFF";
    contexto.fillStyle = "#910314";
    contexto.lineWidth = 1;
    contexto.fillRect(0,0,1000,2000);

    return canvas;
}