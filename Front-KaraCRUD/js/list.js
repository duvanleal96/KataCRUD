//Declaracion de variables
const d = document,
    $title = d.getElementById("nombre-lista"),
    $crear = d.getElementById("crear"),
    body = d.getElementById('tbody1'),
    $input = d.getElementById('inputTarea').value
const url = 'http://localhost:8080';
let resultado = ''
let resultadoSub = ''

//funcon boton crear , permite guardar en el input el nombre de la nueva lista a crear
$crear.addEventListener('click', e => {
    e.preventDefault();
    crearList(d.getElementById('inputTarea').value)

})
//Funcion crear lista , consulta la ruta del fetch y realiza el metodo post con los datos 
async function crearList(lista) {
        console.log(lista);
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                name: lista
            })
        },
            res = await fetch(`${url}/task`, options)
        mostrarList();
    } 

//muestra las listas en la BD
async function mostrarList() {
    let res = await fetch(`${url}/listas`)
    let data = await res.json()
    .catch(error => console.log(error))
    console.log(data)
    mostrar(data)
}
//Muesta la lista creada y permite interactuar con esta 
const mostrar = (listas) => {
    listas.forEach(lista => {
        // mostrarSubListas(lista)
        resultado += ` <hr>
    <div class="input-group mb-5">
        <h2 id="nombre-lista">${lista.name}</h2>
        <button  type="submit" id="borrar${lista.id}" class="btn btn-secondary my-2 my-sm-0">Eliminar</button>
    </div>
        <input class="form-control me-sm-2" type="text" id="inputTarea${lista.id}" placeholder="¿Que piensas hacer?">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit" id="crearTarea${lista.id}">Crear</button>
    <br>
    <table id="tabla">
        <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>¿completado?</th>
            <th>Opciones</th>
        </tr>
        <tbody>
          
        </tbody>
    </table>

        `
    })

    document.querySelector('.tbody1').innerHTML = resultado;
    resultado = "";
}

/*const mostrarSubListas=(subListas)=>{
    subListas.forEach(sub => {
        resultadoSub += ` <tr>
        <td class="id">${sub.id}</td>
        <td class="Tarea">${sub.name}</td>
        <td class="completado">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </td>
        <td class="opciones">
            <button type="button" id="editar${sub.id}" class="btn btn-secondary">Editar</button>
            <button type="button" id="eliminar${sub.id}" class="btn btn-secondary">Eliminar</button>
        </td>
    </tr>`
    })
}*/

document.getElementById('tbody1').addEventListener("click", (e) => {
    console.log(e.classList)
    if (e.target.classList[0] == "borrar") {
        eliminarTarea(e.target.previousElementSibling.textContent)
        console.log(e.target.classList)
    }
})

async function eliminarTarea(id) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
    },
        res = await fetch(`${url}/task/${id}`, options)
        .then(() => location.reload())
            alertify.success('Ok')
    mostrarList()
}









