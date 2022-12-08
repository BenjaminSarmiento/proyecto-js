const carritoProceso = () => {
    let carrito= JSON.parse(localStorage.getItem("carrito")) || [] 
    modalContainer.innerHTML=""
    modalContainer.style.display= "flex"
    const modalHeader= document.createElement("div")
    modalHeader.className="modalHeader"
    modalHeader.innerHTML=`
    <h2 class="modalHeaderTitulo"> DETALLE DE COMPRA</h2>
    `

    modalContainer.append(modalHeader)

    const modalButton= document.createElement("h2")
    modalButton.innerText="X"
    modalButton.className= "modalButton"
    modalButton.addEventListener("click", () => {
        modalContainer.style.display= "none"    
    })

    modalHeader.append(modalButton)

    carrito.forEach((producto) => {
    
        let carritoContent= document.createElement("div")
        carritoContent.className= "modalContent"
        carritoContent.innerHTML= `
        <img src="${producto.img}">
        <h2><strong>${producto.nombre}</strong></h2>
        <h4>$${producto.precio}</h4>
        <span class= "restar"> - </span>
        <p>cantidad: ${producto.cantidad}  </p>
        <span class= "sumar"> + </span>
        <p>total: $${producto.cantidad * producto.precio}  </p>
        `
        
        modalContainer.append(carritoContent)

        let restar= carritoContent.querySelector(".restar")
        
        restar.addEventListener("click" ,() => {
            if (producto.cantidad !== 1) {
                producto.cantidad --
            }
            const savelocal = () => {
                localStorage.setItem("carrito", JSON.stringify(carrito))
               }  
            carritoProceso()
            savelocal()
        })
        let sumar= carritoContent.querySelector(".sumar")
        
        sumar.addEventListener("click" ,() => {
            producto.cantidad ++
            const savelocal = () => {
                localStorage.setItem("carrito", JSON.stringify(carrito))
               }  
            carritoProceso()
            savelocal()
        })

        let eliminar = document.createElement("span")     
        eliminar.innerText= "❌"
        eliminar.className ="botonEliminarProducto"
        carritoContent.append(eliminar)

        eliminar.addEventListener("click", eliminarProducto)   

    })

   
    const total= carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    const totalBuying= document.createElement("div")
    totalBuying.className= "totalContent"
    totalBuying.innerHTML= `
    Monto final: $ ${total}
    `
    modalContainer.append(totalBuying)
}

verCarrito.addEventListener("click", carritoProceso)       

const eliminarProducto = () => {
    let carrito= JSON.parse(localStorage.getItem("carrito")) || []    
    const foundId = carrito.find ((element) => element.id)

    carrito  = carrito.filter ((carritoId) => {
        return carritoId !== foundId
    })
    const savelocal = () => {
       localStorage.setItem("carrito", JSON.stringify(carrito))
      }                                                            

    savelocal()
    carritoProceso()
}

const carritoCounter =() => {
    cantidadCarrito.style.display= "block"
    cantidadCarrito.innerText = productos.length
}