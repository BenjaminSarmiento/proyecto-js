


const productos = [
    {nombre: "creatina gold nutrition", precio: "$" + 7500,capacidad: 300 + "gr",caracteriticas: "creatina 100% pura que dura 2 meses", stock: 10},
    {nombre: "creatina mag pura", precio: "$" + 5500,capacidad: 250 + "gr",caracteriticas: "creatina 100% pura", stock: 4},
    {nombre: "creatina mag high power", precio: "$" + 4000,capacidad: 250 + "gr",caracteriticas: "creatina con aminoacidos", stock: 5},
    {nombre: "proteina true made", precio: "$" + 6000,capacidad: 1 + "kg",caracteriticas: "proteina de ena", stock: 4},
    {nombre: "proteina mag ", precio: "$" + 5000,capacidad: 1 + "kg",caracteriticas: "proteina de mag", stock: 10},
    {nombre: "proteina gold nutrition", precio: "$" + 4000,capacidad: 1 + "kg",caracteriticas: "proteina de gold", stock: 4},
    {nombre: "shaker gold nutrition blanco", precio: "$" + 1000,capacidad: 600 + "ml",caracteriticas: "shaker con compartimiento", stock: 15},
    {nombre: "shaker gold nutrition negro", precio: "$" + 800,capacidad: 600 + "ml",caracteriticas: "shaker sin compartimiento", stock: 12},
    {nombre: "shaker shark design", precio: "$" + 1500,capacidad: 750 + "ml",caracteriticas: "shaker de alta calidad", stock: 10},
    ];

 

let busqueda =prompt("ingrese un producto")
if (busqueda == "creatina") {
    const creatina =productos.filter((creatina)=> creatina.nombre.includes("creatina"))
    console.log(creatina);
} else if (busqueda == "proteina"){
    const proteina =productos.filter((proteina)=> proteina.nombre.includes("proteina"))
    console.log(proteina);
} else if (busqueda == "shaker"){
    const shaker =productos.filter((shaker)=> shaker.nombre.includes("shaker"))
    console.log(shaker);
} else {
    console.log("No se encontraron resultados de: " + '"' + busqueda + '"'); 
    let stockDisponible =prompt("¿ver los productos disponibles? (si/no)")
    if (stockDisponible == "si") {
        console.log(productos);
    } 
} 