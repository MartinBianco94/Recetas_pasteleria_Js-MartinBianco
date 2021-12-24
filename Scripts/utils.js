export const renderList = (listaId, lista) => {

    const listaContainer = document.getElementById( listaId )

    for( const item of lista) {

        const itemList = document.createElement ("li")

        itemList.innerText = item.nombre 

        listaContainer.appendChild(itemList)
    }
}

/*boton de comprar*/

let ButtonComprar = document.getElementById("buttonComprar")

ButtonComprar.addEventListener("click",(e) => {
    e.preventDefault();
})

