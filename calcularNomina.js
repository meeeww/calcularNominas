let salarioBase, pagasExtra
let pee

document.getElementById("enviarBoton").onclick = function () {
    salarioBase = document.getElementById("salarioBase").value
    pagasExtra = document.getElementById("pagasExtra").value
    pee = (salarioBase * pagasExtra) / 12
    mostrarResultado(pee)
}

function mostrarResultado(s_cotizado){
    const para = document.createElement("p");
    const node = document.createTextNode("PPE: " + s_cotizado);
    para.appendChild(node);
    const element = document.getElementById("resultadoDiv");
    element.appendChild(para);
}