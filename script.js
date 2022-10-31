let precioCreatina = 7500
 let precioProteina = 5200
 let precioShaker = 1000
 let pregunta
 let producto

do {
    producto= prompt("ingrese un producto (creatina, proteina o shaker)")

    if (producto === "creatina") {
        console.log("Añadido con exito! El precio de la creatina es de " + precioCreatina);
    } else if (producto === "proteina") {
        console.log("Añadido con exito! El precio de la proteina es de " + precioProteina);
    } else if (producto === "shaker") {
        console.log("Añadido con exito! El precio del shaker es de " + precioShaker);
    } else {
        console.log("ERROR: Ingrese un caractér valido");
     }

    pregunta=prompt("¿quiere seguir comprando? (si / no)")

} while (pregunta !== "no");

console.log("gracias por tu compra!");