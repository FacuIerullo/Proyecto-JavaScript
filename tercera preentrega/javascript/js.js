const btnCarrito = document.querySelector(".carrito")
const contCarrito = document.querySelector(".carrito-contenedor")
const listaProductos = document.querySelector(".productos")
const infoCarrito = document.querySelector(".carrito-productos")
const contenedorCarrito = document.querySelector(".conteiner-carrito-info")
const valorTotal = document.querySelector(".precio-total-carrito")


let productosArr = JSON.parse(localStorage.getItem("carrito")) || []

btnCarrito.addEventListener("click", (e) => {
    contCarrito.classList.toggle("carrito-ocultar") 
    if(e.target.classList.contains("carrito-icon")){ 
       inHtml()
       guardarCarrito()
} 
})

listaProductos.addEventListener("click", e => {

    if(e.target.classList.contains("btn")){
        const productos = e.target.parentElement

        const infoProductos = {
            quantity: 1,
            title: productos.querySelector("p").innerText,
            price: productos.querySelector("span").innerText,

        }

        const pruebaProducto = productosArr.some(producto => producto.title === infoProductos.title)

    if(pruebaProducto){
        const itemProducto = productosArr.map(producto => {
    if(producto.title === infoProductos.title){
            producto.quantity++
            return producto
    } else{
            return producto
    }
    })
    productosArr = [...itemProducto]
} else {
    productosArr = [...productosArr, infoProductos]
}
        inHtml ()
        guardarCarrito()
    }
})

contenedorCarrito.addEventListener("click", e => {
    if(e.target.classList.contains("eliminar-item")){
        const eliminarProducto = e.target.parentElement
        const titulo = eliminarProducto.querySelector("p").textContent

        productosArr = productosArr.filter((productos)=> productos.title !== titulo)

        console.log(productosArr)
        inHtml()
        guardarCarrito()
    }
    
})



const inHtml = () => {

    let total = 0

    contenedorCarrito.innerHTML = " "

    productosArr.forEach((productos) => {
        
        const contenedorProductos = document.createElement("div")
        contenedorProductos.classList.add("carrito-productos")

        contenedorProductos.innerHTML = `
        <div class="info-producto-carrito">
        <span class="total-item-carrito">${productos.quantity}</span>
        <p class="nombre-item-carrito">${productos.title}</p>
        <span class="precio-item-carrito">${productos.price}</span>
       </div>
       <i class="fa-solid fa-xmark eliminar-item"></i>
     </div>
        
        `
     
     contenedorCarrito.append(contenedorProductos)

     total = total + parseInt(productos.quantity * productos.price.slice(1))
    })

    valorTotal.innerText = `$${total}`
}
const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(productosArr))
}