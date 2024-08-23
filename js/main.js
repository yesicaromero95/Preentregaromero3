//Lista de productos
class Producto {
  constructor(id, nombre, foto, precio) {
    this.id = id
    this.nombre = nombre
    this.foto = foto
    this.precio = precio
    this.cantidad = 0
  }
}
localStorage.setItem("listaProductos", "Producto")
//Agrego mi lista de productos al html con DOM y fetch
let cards = document.querySelector("#container")
fetch("./js/data.json")
  .then((resp) => resp.json())
  .then((data) => {

    data.forEach((e) => {
      cards.innerHTML += `
          <div class="card" style="width: 18rem;">
        <div class="img"><img src="./multimedia/${e.foto}" class="card-img-top" alt="..."></div>
        <div class="card-body">
          <h5 class="card-title">${e.nombre}</h5>
          <p class="card-text">${e.precio}</p>
          <button class="btn btn-secondary">Añadir al carrito</button>
        </div>
      </div>
      `
    })
    //Agrego evento al boton: Añadir al carrito
     let boton = document.querySelector("button")

      boton.addEventListener('click', () => {
        Toastify({ 
        text: "Agregaste un producto al carrito",
        duration: 3000
         
      }).showToast();
    })
    })