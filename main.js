const formulario = document.getElementById("formulario");
const cuerpo = document.getElementById("cuerpo");

let registros = leer_registros();
for(let registro of registros)
{
    pintar_fila(registro);
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const registro = [usuario, correo, contrasena, descripcion];
    
    pintar_fila(registro);
    registros.push(registro);
    localStorage.setItem("registros", JSON.stringify(registros));
    formulario.reset();

});

function pintar_fila(registros)
{
    const fila = document.createElement("tr");
    for (const dato of registros)
    {
        const celda = document.createElement("td");
        celda.textContent = dato;
        fila.append(celda);
    }

    cuerpo.appendChild(fila);
}

function leer_registros()
{

    let datos = [];
    try {
        datos = JSON.parse(localStorage.getItem("registros")) || [];
    } catch (error) {
        datos = [];
    }
    return datos;
}

