function numeroNotas() {
    let numero = document.getElementById("numero").value;
    let html = ""
    for (let index = 1; index <= numero; index++) {
        html += `<p>Ingrese Nota ${index} : <input type="text" id="nota${index}"></p>`;
    }
    html += `<p><input type="button" value="Calcular Promedio" onclick="promedio(${numero})"></p>`;
    //html += `<p><input type="reset">`;
    html += `<p id="resultadoPromedio"></p>`;
    document.getElementById("respuesta").innerHTML = html;
}
function promedio(numero) {
    let suma = 0;
    let elemento = 0;
    for (let index = 1; index <= numero; index++) {
        elemento = document.getElementById("nota" + index).value;
        suma += parseInt(elemento);
    }
    let promedio = suma / numero;
    let result = "";
    if (promedio > 10) {
        result = "<b>APROBADO</b>";
    }
    else {
        result = "<b><font color=red>DESAPROBADO</font></b>";
    }

    let html = `Su promedio es ${promedio} y esta ${result}`;
    document.getElementById("resultadoPromedio").innerHTML = html;
}