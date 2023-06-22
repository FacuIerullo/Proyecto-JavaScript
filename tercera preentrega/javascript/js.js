const btnCarrito = document.querySelector(".carrito-icon")
const contCarrito = document.querySelector(".carrito-contenedor")
const listaProductos = document.querySelector(".container-productos")
const infoCarrito = document.querySelector(".carrito-productos")
const contenedorCarrito = document.querySelector(".container-carrito-info")
const valorTotal = document.querySelector(".precio-total-carrito")
const btnCamisetas = document.querySelector(".btn-camisetas")
const btnShorts = document.querySelector(".btn-shorts")
const btnCamperas = document.querySelector(".btn-camperas")
const btnTodo = document.querySelector(".btn-todo")
const btnComprar = document.querySelector(".total-carrito")
const formCompra = document.querySelector(".form-compra")
const inputCompra = document.querySelectorAll(".input-compra")
const btnForm = document.querySelector(".btn-form")
const btnHistorial = document.querySelector(".btn-historial")
const HistorialCompra = document.querySelector(".historial-compras")

btnTodo.addEventListener("click", (e)=> {
    document.querySelector(".container-productos").innerHTML = `
    <div class="camisetas">
    <div>
      <div class="item">
        <img src="img/independiente1995.png" alt="...">
        <p>Camiseta Independiente 1995</p>
        <span>$8000</span>
        <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
      </div>
      <div class="item">
        <img src="img/argentina2022.png" alt="...">
        <p>Camiseta Argentina 2022 (3 estrellas y parche)</p>
        <span>$10000</span>
        <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
      </div>
    </div>
    <div>
      <div class="item">
        <img src="img/Yugoslavia1990.png" alt="...">
        <p>Camiseta Yugoslavia 1990</p>
        <span>$8000</span>
        <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
      </div>
      <div class="item">
        <img src="img/Barcelona2009.png" alt="...">
        <p>Camiseta Barcelona 2009</p>
        <span>$10000</span>
        <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
      </div>
    </div>
  </div>

<div class="pantalones">
    <div>
        <div class="item">
          <img src="img/shortargentina.png" alt="...">
          <p>Short Argentina violeta</p>
          <span>$8000</span>
          <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
        <div class="item">
          <img src="img/shortlakers.png" alt="...">
          <p>Short Los Angeles Lakers</p>
          <span>$8000</span>
          <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
      </div>
      <div>
        <div class="item">
          <img src="img/shortorlandomagic.png" alt="...">
          <p>Short Orlando Magic</p>
          <span>$8000</span>
          <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
        <div class="item">
          <img src="img/shortraptors.png" alt="...">
          <p>Short Toronto Raptors</p>
          <span>$8000</span>
          <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
      </div>
    </div>

    <div class="camperas">
      <div>
        <div class="item">
          <img src="img/camperabayern.png" alt="...">
          <p>Campera Bayern Munich</p>
          <span>$20000</span>
          <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
        <div class="item">
          <img src="img/camperacity.png" alt="...">
          <p>Campera Manchester City</p>
          <span>$20000</span>
          <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
      </div>
      <div>
        <div class="item">
          <img src="img/camperadortmund.png" alt="...">
          <p>Campera Dortmund</p>
          <span>$20000</span>
          <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
        <div class="item">
          <img src="img/camperareversible.png" alt="...">
          <p>Campera Argentina reversible</p>
          <span>$25000</span>
          <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
        </div>
      </div>
  </div>
</div>
    `
})

btnCamisetas.addEventListener("click", (e)=> {
    document.querySelector(".container-productos").innerHTML = `
      <div class="item">
        <img src="img/independiente1995.png" alt="...">
        <p>Camiseta Independiente 1995</p>
        <span>$8000</span>
        <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
      </div>
      <div class="item">
        <img src="img/argentina2022.png" alt="...">
        <p>Camiseta Argentina 2022 (3 estrellas y parche)</p>
        <span>$10000</span>
        <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
      </div>
      <div class="item">
        <img src="img/Yugoslavia1990.png" alt="...">
        <p>Camiseta Yugoslavia 1990</p>
        <span>$8000</span>
        <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
      </div>
      <div class="item">
      <img src="img/Barcelona2009.png" alt="...">
      <p>Camiseta Barcelona 2009</p>
      <span>$10000</span>
      <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
    </div>
    `
})

btnShorts.addEventListener("click", (e)=> {
    document.querySelector(".container-productos").innerHTML = `
    <div class="item">
                  <img src="img/shortargentina.png" alt="...">
                  <p>Short Argentina violeta</p>
                  <span>$8000</span>
                  <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
                <div class="item">
                  <img src="img/shortlakers.png" alt="...">
                  <p>Short Los Angeles Lakers</p>
                  <span>$8000</span>
                  <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
                <div class="item">
                  <img src="img/shortorlandomagic.png" alt="...">
                  <p>Short Orlando Magic</p>
                  <span>$8000</span>
                  <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
                <div class="item">
                  <img src="img/shortraptors.png" alt="...">
                  <p>Short Toronto Raptors</p>
                  <span>$8000</span>
                  <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
                </div> 
    `
})

btnCamperas.addEventListener("click", (e)=>{
    document.querySelector(".container-productos").innerHTML = `
    <div class="item">
                  <img src="img/camperabayern.png" alt="...">
                  <p>Campera Bayern Munich</p>
                  <span>$20000</span>
                  <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
                <div class="item">
                  <img src="img/camperacity.png" alt="...">
                  <p>Campera Manchester City</p>
                  <span>$20000</span>
                  <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
                <div class="item">
                  <img src="img/camperadortmund.png" alt="...">
                  <p>Campera Dortmund</p>
                  <span>$20000</span>
                  <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
                <div class="item">
                  <img src="img/camperareversible.png" alt="...">
                  <p>Campera Argentina reversible</p>
                  <span>$25000</span>
                  <button type="button" class="btn btn-primary btn-sm">Agregar al carrito</button>
                </div>
    `
})

let productosArr = JSON.parse(localStorage.getItem("carrito")) || []
let historial = []
let validar = false

document.addEventListener("DOMContentLoaded", () => {
  let datos = localStorage.getItem("datos")
  if(datos !== null) {
    if(datos.length) {
      JSON.parse(datos).forEach(datos => {
        historial.push(datos)
      })
    }
  }
})

btnCarrito.addEventListener("click", (e) => {
    contCarrito.classList.toggle("carrito-ocultar") 
    if(e.target.classList.contains("carrito-icon")){ 
       inHtml()
       guardarCarrito()
} 
})

btnComprar.addEventListener("click", (e)=> {
  if(productosArr.length != 0){
    Swal.fire({
      icon: 'info',
      title: 'Completar el formulario para finalizar la compra',
    })
    formCompra.classList.remove("disable")
  }
})

formCompra.addEventListener("submit", (e)=> {
  e.preventDefault()
  if(validar){
    enviarFormulario()
  } else {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'Completar todos los datos'
    })
  }
})




function enviarFormulario() {
  const nombre = inputCompra[0].value
  const provincia = inputCompra[1].value
  const direccion = inputCompra[2].value
  const email = inputCompra[3].value
  const numTarjeta = inputCompra[4].value
  const venTarjeta = inputCompra[5].value
  const codTarjeta = inputCompra[6].value
  const dni = inputCompra[7].value
  const productos = productosArr.map(producto => producto.quantity + " " + producto.title + " ")

  const datos = {
    nombre,
    provincia,
    direccion,
    email,
    numTarjeta,
    venTarjeta,
    codTarjeta,
    dni,
    productos
  }
  console.log(productos)
  formCompra.reset()
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Compra realizada',
    Text : 'Esperando pago',
    showConfirmButton: false,
    timer: 2000,
  })

  esperandoElPago()
  .then((res) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: res,
      showConfirmButton: false,
      timer: 2000,
    })
  })
  .catch((err) => {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'ERROR',
      text : err,
      showConfirmButton: false,
      timer: 2000,
    })
  })
  formCompra.classList.add("disable")

  historial.push(datos)
  localStorage.setItem("datos", JSON.stringify(historial))
}

function esperandoElPago(){
  return new Promise((resolve, reject) => {
    const validarPago = Math.random() < 0.9;
    setTimeout(() => {
      if(validarPago) {
        resolve("El pago fue exitoso")
      } else {
        reject("La compra fue rechazada")
      }
    }, 3500);
  })
}

btnHistorial.addEventListener("click", ()=> {
  cargarHistorial()
  const btnBorrarHistorial = document.querySelectorAll(".btnBorrarHistorial")
  console.log(btnBorrarHistorial)
  actionBorrar(btnBorrarHistorial)
})

function actionBorrar(btnBorrarHistorial) {

  btnBorrarHistorial.forEach((btn) => {

    btn.addEventListener("click", () => {
      console.log(historial)

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Historial de compra eliminado',
        showConfirmButton: false,
        timer: 1500
      })

      let busqueda = historial.map((historial) => historial.dni).indexOf(btn.value)

      historial.splice(busqueda, 1)
      localStorage.setItem("datos", JSON.stringify(historial))
      cargarHistorial()
    })
  })
}

function cargarHistorial(){
  document.querySelector(".historial-compras").innerHTML = " "
  HistorialCompra.classList.toggle("disable")
  historial.forEach(historial => {
    document.querySelector(".historial-compras").innerHTML += `<div class="compras">
    <p>
    nombre:${historial.nombre} 
    </p>
    <p>
    email: ${historial.email}
    </p>
    <p>
    provincia: ${historial.provincia}
    </p>
    <p>
    direccion: ${historial.direccion}
    </p>
    <p>
    dni: ${historial.dni}
    </p>
    <p>
    productos: ${historial.productos} 
    </p>
    <button type="button" class="btnBorrarHistorial" value="${historial.dni}" >x</button>
    </div>
    `
  })
}

inputCompra.forEach(input => {
  input.addEventListener("input", ()=> {
    if(inputCompra[0].value && inputCompra[1].value && inputCompra[2].value && inputCompra[3].value && inputCompra[4].value && inputCompra[5].value && inputCompra[6].value && inputCompra[7].value
      ){ 
        validar = true
    } else {
        validar = false
    }
  })
})



listaProductos.addEventListener("click", e => {

    if(e.target.classList.contains("btn")){
      Toastify({
        text: "Se agregó el producto al carrito",
        duration: 1000,
        gravity: "bottom"
        }).showToast();
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
      Toastify({
        text: "Se eliminó el producto al carrito",
        duration: 1000,
        gravity: "bottom"
        }).showToast();
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
