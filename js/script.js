 
fetch("./js/productos.json")
.then(respuesta => respuesta.json())
.then(productos => {
  let contenedorProductos = document.getElementById("contenedorProductos")
    
  const verCarrito= document.getElementById("verCarrito")
  const modalContainer= document.getElementById("modalContainer")
  const cantidadCarrito= document.getElementById("cantidadCarrito")

  let carrito= JSON.parse(localStorage.getItem("carrito")) || []    

  renderizarProductos(productos)

 function renderizarProductos(arrayProductos) {
  contenedorProductos.innerHTML= ' '
  for (const producto of arrayProductos) {
      let tarjetaProductos = document.createElement("div")
      producto.stock == 0 ? tarjetaProductos.className="tarjetaSinStock" : tarjetaProductos.className="tarjeta"
      tarjetaProductos.innerHTML = `
      <img class="imagenTarjeta" src=${producto.img}>
      <h2 class="tituloTarjeta"><strong>${producto.nombre}</strong></h2>
      <h3 class="precioTarjeta"> ${producto.caracteriticas}</h3>
      <span class="precioTarjeta">$ ${producto.precio}</span>
      <h4> ${producto.stock} unidades disponibles</h4>
      `
      contenedorProductos.append(tarjetaProductos)
      contenedorProductos.className ="tarjetas"

      let comprar= document.createElement("button")
      comprar.innerText="añadir al carrito"
      comprar.className="botonAgregar"
      tarjetaProductos.append(comprar)

      comprar.addEventListener("click", ()=>{  
          Toastify({
              text: "AÑADIDO CON EXITO",
              className: "toastComprar",
              style: {
                  background: "linear-gradient(to right, orange, orange)",
                }
            }).showToast();

            const repeat= carrito.some((repeatProduct) => repeatProduct.id === producto.id)
            if (repeat) {
              carrito.map((prod) => {
              if (prod.id == producto.id) {
                  prod.cantidad ++
              }
              })
          } else{
            carrito.push(
              {
                  id: producto.id,
                  nombre: producto.nombre,
                  precio: producto.precio,
                  img: producto.img,
                  cantidad: producto.cantidad
              })
          } 
          savelocal()
      }
      )}
   }
   
 let boton= document.getElementById("botonPrincipal")
 boton.className= "botonPrincipal"
 let barraDeBusqueda= document.getElementById("barraDeBusqueda")
 barraDeBusqueda.className= "barraDeBusqueda"
barraDeBusqueda.addEventListener("input", fninput)

function fninput() {
  let productosFiltrados = productos.filter(producto => producto.nombre.includes(barraDeBusqueda.value))
  renderizarProductos(productosFiltrados)
}

const savelocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

 
})

  