class datosUsuario {
    constructor(nombre, apellido, mail, mensaje){
        this.nombre = nombre
        this.apellido = apellido
        this.mail= mail
        this.mensaje = mensaje
    }
}

let datosUsuarios = []
let formulario = document.querySelector("form")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()

    let nombre = formulario[0].value || "anonimo"
    let apellido = formulario[1].value || "anonimo"
    let mail = formulario[2].value
    let mensaje = formulario[3].value

    datosUsuarios.push(new datosUsuario(nombre, apellido, mail, mensaje))

    console.log (datosUsuarios);

})

document.querySelector("#libreria").addEventListener("click", ()=>{
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu mensaje fué enviado con éxito",
        showConfirmButton: false,
        timer: 3000
      });
})
