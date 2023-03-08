let salarioBase, pagasExtra
let pee, bccc

document.getElementById("enviarBoton").onclick = function () {
    salarioBase = document.getElementById("salarioBase").value
    pagasExtra = document.getElementById("pagasExtra").value
    pee = (salarioBase * pagasExtra) / 12
    bccc = salarioBase + pee
    mostrarResultado(pee, bccc)
}

function mostrarResultado(s_pee, s_bccc){
    const para = document.createElement("p");
    para.appendChild(document.createTextNode("PPE: " + s_pee  + " - " + " BCCC: " + s_bccc));
    const element = document.getElementById("resultadoDiv");
    element.appendChild(para);
}