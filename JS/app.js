//variable Let

let nombreProducto;
let formaDePago;
let nombreCliente = prompt("ingresa tu nombre")

function saludo() {
    alert("Bienvenido a tu tienda deportiva" + " " + nombreCliente)
}
function despedida() {
    alert("Gracias por tu compra, Que tengas un buen dia" + " " + nombreCliente)
}
saludo ();

//opcion 1

/*nombreProducto = prompt("Nombre del producto que buscas");
console.log(nombreProducto);
alert ("Elegiste" + " " + nombreProducto);

nombreProducto = prompt("buscas algo mas?");
console.log(nombreProducto);
alert ("Elegiste" + " " + nombreProducto);*/

//opcion 2

/*let elijoProducto = prompt("Elegi tu producto, al finalizar ingresa fin");

while (elijoProducto != "fin"){
    alert ("seleccionaste el producto" + " " + elijoProducto);
    console.log("eligio" + " " + elijoProducto);
    elijoProducto = prompt ("selecciona otro producto, al finalizar ingresa fin");
    

}*/

//opcion 3, no supe por cual de las 3 decidirme

let productos = prompt ("Elegi un producto: zapatillas adidas, zapatillas nike,zapatillas topper");


switch (productos) {
    case "zapatillas adidas":
    console.log("Elegiste zapatillas adidas");
        break;
    case "zapatillas nike":
            console.log("Elegiste zapatillas nike");
            break;
            case "zapatillas topper":
                console.log("Elegiste zapatillas topper");
                break;
    default:
        console.log("Producto no valido");
        break;
}
let productos1 = prompt ("Elegi un producto: zapatillas adidas, zapatillas nike,zapatillas topper");

switch (productos1) {
    case "zapatillas adidas":
    console.log("Elegiste zapatillas adidas");
        break;
    case "zapatillas nike":
            console.log("Elegiste zapatillas nike");
            break;
            case "zapatillas topper":
                console.log("Elegiste zapatillas topper");
                break;
    default:
        console.log("Producto no valido");
        break;
}

let productoComprado;
productoComprado = productos + " " + "y" + " "+ productos1;
console.log("Los productos a comprar son" + " " + productoComprado);
alert ("Los productos que elegiste son" + " " + productoComprado)


formaDePago = prompt("Ingresa forma de pago");
console.log(formaDePago);
alert ("Elegiste" + " " + formaDePago);

if (formaDePago == "efectivo"){
    console.log("Paga en Efectivo");
    
}else{
    console.log("Paga con Tarjeta de Credito");

}

despedida();






