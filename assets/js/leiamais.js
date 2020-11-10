function leiaMais() {

    var pontos = document.getElementById("pontos")
    var maisTexto = document.getElementById("mais")
    var clickLeiaMais = document.getElementById("clickLeiaMais")

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        clickLeiaMais.innerHTML = "Leia Mais";
    } else {
        pontos.style.display = "none"
        maisTexto.style.display = "inline";
        clickLeiaMais.innerHTML = "Leia Menos";
    }

}