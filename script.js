class alumno {
    constructor (nombre, apellido, nota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
    }
}

const alumno1 = new alumno("Ivan", "Vallejo", 10)
const alumno2 = new alumno("Juan", "Gimenez", 7)
const alumno3 = new alumno("Cristian", "Romero", 5)
const alumno4 = new alumno("Marcelo", "Lopez", 8)

let autos = [alumno1, alumno2, alumno3, alumno4]  

let botonAlumno = document.getElementById("botonAlumno") 
let divAlumno = document.getElementById("divAlumno")

botonAlumno.addEventListener('click', () => {    
alumnos.forEach((alumno, indice) => {
    divAlumno.innerHTML += `
    <div class="card" id="alumno${indice}" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title"> Alumno: ${alumno.apellido}</h5>
        <p class="card-text"> ${alumno.nombre} </p>
        <p class="card-text"> Nota: ${alumno.nota} </p>
        <button class="btn btn-danger"> Eliminar </button>
    </div>
    </div>
    `
    })
})


/*  */