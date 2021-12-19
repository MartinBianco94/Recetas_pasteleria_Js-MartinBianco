/* Clases */
/* Clase de productos */
export class Producto {
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










