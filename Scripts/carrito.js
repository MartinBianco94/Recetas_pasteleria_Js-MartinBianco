/* Clase de carrito */
export class Carrito {
    constructor() {
        this.lista = JSON.parse(localStorage.getItem("carrito")) || [];
    }
    createItem(item) {
        this.lista.push(item)
        localStorage.setItem( "carrito", JSON.stringify(this.lista));
    }
    findAllItems (){
        return this.lista;
    }
    findoneByCdItem (itemCd){
        const item = this.lista.find(element => element.cd === itemCd);

        if (!item) {
            throw new Error(" No existe el item cd: " + itemCd);
        }
        return item;
    }
    deleteItem( itemCd ){
        const item = this.findoneByCdItem (itemCd);
        const index = this.lista.indexOf ( item );
        this.lista.splice(index, 1);
        localStorage.setItem( "carrito", JSON.stringify(this.lista));

    } 
}





