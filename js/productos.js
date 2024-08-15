class producto {
    constructor(id, nombre, foto, precio, stock){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.precio = precio
        this.stock = stock
    }
}

let listaProductos = [
    new producto(1, "Tronco de brasil", "tronco_de_brasil.jpg", "$15.000", 10),
    new producto(2, "Potus","potus.png","$3.000",12),
    new producto(3, "Lazo de amor","lazo_de_amor.webp","$3.500",8),
    new producto(4,"Aloe vera","aloe_vera.jpg","$3.000",15),
    new producto(5,"Monstera","planta_monstera.jpg","$5.000",10),
    new producto(6,"Palmera de salon","palmera_de_salon.webp","$6.500",15),
 ]

 localStorage.setItem("productos",JSON.stringify(listaProductos))
//Agrego mi lista de productos al html con DOM
 let cards = document.querySelector("#container")

   listaProductos.forEach((e) =>{
    cards.innerHTML +=`
    <div class="card" style="width: 18rem;">
  <img src="../multimedia/${e.foto}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.nombre}</h5>
    <p class="card-text">${e.precio}</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
</div>`
})