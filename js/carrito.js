const carritoProceso = () => {
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
        <p>cantidad: ${producto.cantidad}  </p>
        <p>total: $${producto.cantidad * producto.precio}  </p>
        `
        
        modalContainer.append(carritoContent)
        

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
    const foundId = carrito.find ((element) => element.id)

    carrito  = carrito.filter ((carritoId) => {
        return carritoId !== foundId
    })
    savelocal()
    carritoProceso()
}