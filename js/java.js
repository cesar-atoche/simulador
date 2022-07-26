function numeroNotas() {
    let numero = document.getElementById("numero").value;
    let nombre = document.getElementById("nombre").value;
    let html = ""
    for (let index = 1; index <= numero; index++) {
        html += `<p>Ingrese Nota ${index} : <input type="text" id="nota${index}"></p>`;
    }
    html += `<p><input type="button" value="Calcular Promedio" onclick="promedio(${numero},'${nombre}')"></p>`;
    //html += `<p><input type="reset">`;
    html += `<p id="resultadoPromedio"></p>`;
    document.getElementById("respuesta").innerHTML = html;
}
function promedio(numero,nombre) {
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

    let html = `Alumno <b>${nombre.toUpperCase()}</b> tu promedio es ${promedio} y estas ${result}`;
    document.getElementById("resultadoPromedio").innerHTML = html;
}