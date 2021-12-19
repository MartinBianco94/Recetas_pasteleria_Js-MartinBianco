import {Carrito} from "./carrito.js";
import {productos} from "./data.js";
import { Producto } from "./productos.js";
import {renderList} from "./utils.js";

const carrito = new Carrito ();

carrito.createItem(productos)

renderList("productos-lista", productos)

console.log(carrito.findAllItems)

const formProducto =document.getElementById("form-producto")

const inputNombreProducto =document.getElementById("input-nombre-producto")

const inputPrecioProducto =document.getElementById("input-precio-producto")

const inputCdProducto =document.getElementById("input-cd-producto")


formProducto.addEventListener("submit", () => {

    const nombre = inputNombreProducto.value

    const precio = inputPrecioProducto.value

    const cd = inputCdProducto.value

    const productoNuevo = new Producto (nombre,precio,cd)

    carrito.createItem(productoNuevo)

})