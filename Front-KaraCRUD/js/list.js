//Declaracion de variables
const d = document,
    $title = d.getElementById("nombre-lista"),
    $crear = d.getElementById("crear"),
    body = d.querySelector('.tbody1'),
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
    mostrar(data)
    console.log(data);
}

//Muesta la lista creada y permite interactuar con esta 
const mostrar = (listas) => {
   
    listas.forEach(lista => {  
        resultadoSub=''
        lista.listTask.forEach(sub => {
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
        resultado += ` <hr>
    <div class="input-group mb-5">
        <h2 id="nombre-lista">${lista.name}</h2>
        <spam class = "spamId">${lista.id}</spam>
        <button  type="submit" id="borrar${lista.id}" class="EliminarTarea btn btn-secondary my-2 my-sm-0">Eliminar</button>
    </div>
        <input class="form-control me-sm-2" type="text" id="inputTarea${lista.id}" placeholder="¿Que piensas hacer?">
        <button class="agregarSubList btn btn-secondary my-2 my-sm-0" type="submit" id="crearTarea${lista.id}">Crear</button>
    <br>
    <table id="tabla">
        <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>¿completado?</th>
            <th>Opciones</th>
        </tr>
        <tbody>
            ${resultadoSub}
        </tbody>
    </table>

        `
    })

    document.querySelector('.tbody1').innerHTML = resultado;
    resultado = "";
}

/**
 * implementa la accion del boton eliminar, lista .Busca entre el section el nombre de la clase igual al comparado
 * classList[0] muestra la composicion del DOMTokenList
 * target.previousElementSibling permite traerme el trabajo del nombre de la clase de la tarea e iterarlo
 * */
body.addEventListener("click", (e) => {
    if (e.target.classList[0] == "EliminarTarea") {
      eliminarTarea(e.target.previousElementSibling.textContent)
    }
    
    //revisar
    if (e.target.classList[0] == "agregarSubList") {    
      
        if (e.target.parentElement.children[3].textContent == "Crear") {
          let dato = {
            nombre:e.target.previousElementSibling.value,
            id:e.target.parentElement.children[1].children[1].textContent
          }
          
          crearSubLista(dato.nombre,dato.id)   
          console.log(dato.nombre);   
        }
            
      }

})
//funcion eliminar , recibe como parametro el ID
async function eliminarTarea(id) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
    },
        res = await fetch(`${url}/task/${id}`, options)

    mostrarList()
}
//Crear SubTarea
async function crearSubLista(nombre,id){
    
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({        
            listaid: {
                id: id
            },
            name: nombre                        
      })
    },
      res = await fetch(`${url}/listTask`, options)
      mostrarList()
}










