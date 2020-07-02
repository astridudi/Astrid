function dibujarCuadricula(pContexto,pAncho,pAlto,pColorFondo,pColorLibre,pColorOscuro,pCoordenadas) {
    pContexto.strokeStyle = pColorFondo;
    pContexto.fillStyle = pColorFondo;
    pContexto.lineWidth = 0;
    pContexto.fillRect(0,0, pAncho, pAlto);

    p = 0;
    q = 0;
    l1 = 1;
    l2 = 2;
    dx = 20;
    pContexto.strokeStyle = pColorLibre;
    pContexto.fillStyle = pColorLibre;
    pContexto.setLineDash([l1,l2]);
    pContexto.font = "10px Arial";
    while (p<=pAncho) {
        if (p % 100 == 0) {
            pContexto.strokeStyle = pColorLibre;
            pContexto.setLineDash([]);
        }
        if (p>0 && p<pAncho) {
            pContexto.beginPath();
            pContexto.moveTo(p, q);
            pContexto.lineTo(p, pAlto);
            pContexto.closePath();
            pContexto.stroke();
        }
        if (p % 100 == 0) {
            if (p % 1000 > 0 && pCoordenadas) {
                pContexto.fillStyle = pColorOscuro;
                pContexto.textBaseline = "top";
                pContexto.fillText(p, p, q, );
                pContexto.textBaseline = "bottom";
                pContexto.fillText(p, p, pAlto, );
            }
            pContexto.setLineDash([l1,l2]);
            pContexto.strokeStyle = pColorLibre;
        }
        p=p+dx;
    }
    p = 0;
    q = 0;
    pContexto.textBaseline = "middle";
    while (q <= pAlto) {
        if (q % 100 == 0) {
            pContexto.strokeStyle = pColorLibre;
            pContexto.setLineDash([]);
        }
        if (q>0 && q<pAlto) {
            pContexto.beginPath();
            pContexto.moveTo(p, q);
            pContexto.lineTo(pAncho, q);
            pContexto.closePath();
            pContexto.stroke();
        }
        if (q % 100 == 0) {
            if (q % 1000 > 0 && pCoordenadas) {
                pContexto.fillStyle = pColorOscuro;
                pContexto.textAlign = "left";
                pContexto.fillText(q, p, q, );
                pContexto.textAlign = "right";
                pContexto.fillText(q,pAncho, q, );
            }
            pContexto.setLineDash([l1,l2]);
            pContexto.strokeStyle = pColorLibre;
        }
        q = q + dx;
    }
    pContexto.setLineDash([]);

    pContexto.strokeStyle = pColorOscuro;
    pContexto.lineWidth = 1;
    pContexto.strokeRect(0,0,pAncho,pAlto);
}
