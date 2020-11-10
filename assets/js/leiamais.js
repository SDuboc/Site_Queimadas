function leiaMais() {

    var pontos = document.getElementById("pontos")
    var maisTexto = document.getElementById("mais")
    var clickLeiaMais = document.getElementById("clickLeiaMais")
    var menos = document.getElementById("menos")

    if (maisTexto.style.display === "inline") {
        pontos.style.display = "inline"
        maisTexto.style.display = "none";
        clickLeiaMais.innerHTML = "Leia Mais";
        menos.style.display = "inline"

    } else {
        pontos.style.display = "none"
        maisTexto.style.display = "inline";
        clickLeiaMais.innerHTML = "Leia Menos";
        menos.style.display = "none"
    }

}