
/* Clases */
/* Clases de productos */
class Producto {
    constructor(nombre,precio,cd,img){
        this.nombre = nombre   
        this.precio = precio
        this.cd = cd
        this.img = img
        this.stock = "producto en stock"
    }
    SinStock() {
        this.stock = "producto sin stock"
    }
    DescuentoPromocion() {
        this.precio = this.precio * porcentaje;
    }
};



/* Productos de la pagina Dulce */
const LemonPie = new Producto("Lemon Pie",895,1,"../Images/lemon_pie.jpg");
const TortaBrownie = new Producto("Torta Brownie",895,2,"../Images/torta_brownie (1).jpg");
const TortaBalcarce = new Producto("Torta Balcarce",895,3,"../Images/torta_con_chocolates.jpg");
const TortaRicota = new Producto("Torta de Ricota",895,4,"../Images/tarta_de_ricota.png");
const TartaGaletteManzana = new Producto("Torta Galette de Manzana",895,6,"../Images/torta_de_manzana.jpg")
const PastaFrola = new Producto("Pasta Frola",895,7,"../Images/pasta_frola.jpg")
const TrufasGanache = new Producto("Trufas Ganache",895,8,"../Images/trufas.jpg")
const AlfajoresBrownie = new Producto("Alfajores Brownie",895,9,"../Images/alfajores_brownie.jpg")
const AlfajoresFruta = new Producto("Alfajores de Fruta",895,10,"../Images/alfajores_de_fruta.jpeg")


/* Productos de la pagina Salado */

const Talitas = new Producto("Talitas",895,11,"../Images/talitas_2.jpg");
const PancitosSaborizados = new Producto("Pacitos saborizados",895,12,"../Images/pan_saborizado.jpg");
const Chipa = new Producto("Chipa",895,13,"../Images/chipa.jpg");
const PanMolde = new Producto("Pan de molde",895,14,"../Images/pan_molde.jpg");
const PalmeritasRellenas = new Producto("Palmeritas Rellenas",895,15,"../Images/palmeritas.jpg");



/* Productos de la pagina Desayunos */

const DesayunoSorpresa = new Producto("Desayuno Sorpresa",895,16,"../Images/desayuno_regalo_4.jpg");
const DesayunoSopresaNinos = new Producto("Desayuno Sorpresa Ninos",895,17,"../Images/desayuno_regalo_2.jpg");
const DesayunoSopresaCumpleanos = new Producto("Desayuno Sorpresa Cumpleanos",895,18,"../Images/desayuno_regalo_1.jpeg");
const DesayunoSorpresaPersonalizado = new Producto("Desayuno sorpresa perzonalizado",895,19,"../Images/desayuno_regalo_3.jpg");









/*
// --------------- Variables Globales ---------- //
const cuota3 = 1.2;
const cuota6 = 1.4;
const cuota12 = 1.6;
console.log ("Hola")
let cantidadDinero = prompt ("Ingrese monto total.")
let cantidadCuotas = prompt ("Ingrese cantidad de cuotas: 3, 6 o 12")
 
// --------------- Funciones ----------------------- //
function calcularCuota (cuota) {
    let total = cantidadDinero*cuota;
    let valorCuota = total/ cantidadCuotas;
    console.log ("total", total);
    for (let i = 1; i <= cantidadCuotas; i++) {
        console.log (`Cuota nro ${i}:
        $ ${valorCuota.toFixed(2)}`);
    }
}
 
 
// ----------------Ejecucion ---------------------- //
while (!cantidadDinero && !cantidadCuotas) {
    alert ("Debe ingresar un valor para continuar")
    cantidadDinero = prompt ("Ingrese monto total.")
    cantidadCuotas = prompt ("Ingrese cantidad de cuotas: 3, 6 o 12")
}
 
if (cantidadCuotas == 3) {
    calcularCuota (cuota3);
} else if (cantidadCuotas == 6) {
    calcularCuota (cuota6);
} else if (cantidadCuotas == 12) {
    calcularCuota (cuota12);
} else {
    console.log ("No se ingreso valor correcto");
}

*/