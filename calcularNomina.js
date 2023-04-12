let salarioBase, plusAntiguedad, he, heComplementarias, gratificacionesExtraordinarias, salarioEnEspecie, plusDeDistancia
let totalDevengado, pee, bccc, bcpp

document.getElementById("enviarBoton").onclick = function () {
    salarioBase = parseInt(document.getElementById("salarioBase").value)
    plusAntiguedad = parseInt(document.getElementById("plusAntiguedad").value)
    he = parseInt(document.getElementById("he").value)
    heComplementarias = parseInt(document.getElementById("heComplementarias").value)
    gratificacionesExtraordinarias = parseInt(document.getElementById("gratificacionesExtraordinarias").value)
    salarioEnEspecie = parseInt(document.getElementById("salarioEnEspecie").value)
    plusDeDistancia = parseInt(document.getElementById("plusDeDistancia").value)

    totalDevengado = salarioBase + plusAntiguedad + gratificacionesExtraordinarias + salarioEnEspecie + plusDeDistancia

    pee = (salarioBase * he) / 12
    bccc = salarioBase + plusAntiguedad + gratificacionesExtraordinarias + salarioEnEspecie + plusDeDistancia
    bccp = bccc + he
    mostrarResultado(totalDevengado, pee, bccc, bccp)
}

function mostrarResultado(s_td, s_pee, s_bccc, s_bccp, s_cc, s_desempleo, s_fp, s_he, s_irfp, s_totalReducir, s_liquido) {
    const resultados = document.getElementById("resultados");

    var para = document.createElement("p");
    para.appendChild(document.createTextNode("Total Devengado: " + s_td));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("PPE: " + s_pee));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("BCCC: " + s_bccc));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("BCCP: " + s_bccp));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("CC: " + 0));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("Desempleo: " + 0));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("FP: " + 0));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("HE: " + 0));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("HE: " + 0));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("Total Reducir: " + 0));
    resultados.appendChild(para);

    para = document.createElement("p");
    para.appendChild(document.createTextNode("Liquido: " + 0));
    resultados.appendChild(para);
}