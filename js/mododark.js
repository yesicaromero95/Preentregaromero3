//Modo oscuro

let boton_modo = document.querySelector("button")
let body = document.body

let modoUsuario = localStorage.getItem("modo")
body.className = modoUsuario

boton_modo.addEventListener('click',()=> {
    if (body.className == 'light-mode'){
        body.className = 'dark-mode'
    } else {
        body.className = 'light-mode'
    }


    localStorage.setItem("modo",body.className)
})
