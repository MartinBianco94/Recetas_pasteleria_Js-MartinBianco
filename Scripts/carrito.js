class Carrito {
    constructor(lista) {
        this.lista = lista
    }
    findAllItems (){
        return this.lista
    }
    findoneByCdItem (itemCd){
        const item = this.lista.find(element => element.cd === itemCd);

        if (!item) {
            throw new Error(" No existe el item cd: " + itemCd)
        }
        return item;
    }
    deleteItem( itemCd ){
        const item = this.findoneByCdItem (itemCd);
        const index = this.lista.indexOf ( item );
        this.lista.splice(index, 1);

    } 
}

const carrito = new Carrito(
    [LemonPie,TortaBrownie,Talitas,PancitosSaborizados]
)

/* Comprobacion de los metodos */

console.log(carrito.findAllItems())

carrito.deleteItem(1)

console.log(carrito.findAllItems())

carrito.deleteItem(9)


