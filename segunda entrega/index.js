const dbProductos = [
    {
        id: 1,
        nombre: "Remera",
        precio: 8000,
        color: "rojo",
        marca: "Nike"
    },
    {
        id: 2,
        nombre: "Remera",
        precio: 8000,
        color: "azul",
        marca: "Nike"
    },
    {
        id: 3,
        nombre: "Pantalon",
        precio: 9000,
        color: "negro",
        marca: "Adidas"
    },
    {
        id: 4,
        nombre: "Zapatillas",
        precio: 15000,
        color: "blanco",
        marca: "Nike"
    },
    {
        id: 5,
        nombre: "Zapatillas",
        precio: 17000,
        color: "azul",
        marca: "Adidas"
    },
]
let productosArr = [];
let carritoArr = [];
let trueOfalse = true


class Producto{
    constructor(id, nombre, precio, color, marca){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.marca = marca;
    }
}

function pushProductos() {
    for (const producto of dbProductos) {
        productosArr.push(new Producto(producto.id, producto.nombre, producto.precio, producto.color, producto.marca))
    }
}

pushProductos()

function initProgram() {
    while (trueOfalse) {
        let selectSection = prompt("1. Buscar producto \n 2.Buscar color \n 3.Buscar marca \n 4.Agregar producto al carrito \n 5.Ver carrito \n 6.Comprar \n 7.Salir");
        switch (selectSection) {
            case "1":
                buscarProducto()
                break
            case "2":
                buscarColor ()
                break
            case "3":
                buscarMarca ()
                break
            case "4":
                añadirCarrito ()
                break
            case "5":
                verCarrito()
                break
            case "6":
                comprarProductos()
                break
            case "7":
                trueOfalse = false
                break
            default:
                let selectSection = prompt("1. Buscar producto \n 2.Buscar color \n 3.Buscar marca \n 4.Agregar producto al carrito \n 5.Ver carrito \n 6.Comprar");
                break
        }
    }
}

function buscarProducto() {
    let productoABuscar = prompt("Buscar");
    let productoEncontrado = productosArr.find((producto)=> {
        return producto.nombre === productoABuscar;
    })
    console.log(productoEncontrado)

    if (productoEncontrado) {
        alert(productoEncontrado.nombre + " " + productoEncontrado.precio + " " + productoEncontrado.color + " " + productoEncontrado.marca)
    }
  else {
        alert ("No se encontro el producto");
    }
}

function buscarColor() {
    let productoABuscar = prompt("Buscar");
    let productoEncontrado = productosArr.find((producto)=> {
        return producto.color == productoABuscar;
    })
    console.log(productoEncontrado)

    if (productoEncontrado) {
        alert(productoEncontrado.nombre + " " + productoEncontrado.precio + " " + productoEncontrado.color + " " + productoEncontrado.marca)
    }
  else {
        alert ("No se encontro el producto");
    }
}

function buscarMarca() {
    let productoABuscar = prompt("Buscar");
    let productoEncontrado = productosArr.find((producto)=> {
        return producto.marca == productoABuscar;
    })
    console.log(productoEncontrado)

    if (productoEncontrado) {
        alert(productoEncontrado.nombre + " " + productoEncontrado.precio + " " + productoEncontrado.color + " " + productoEncontrado.marca)
    }
  else {
        alert ("No se encontro el producto");
    }
}

function añadirCarrito () {
    let productoABuscar = prompt("Buscar");
    let productoEncontrado = productosArr.find((producto)=> {
        return producto.nombre == productoABuscar;
    })
    if (productoEncontrado) {
        alert(productoEncontrado.nombre + " " + productoEncontrado.precio + " " + productoEncontrado.color + " " + productoEncontrado.marca)
        let pregunta = prompt("¿Agregar producto al carrito? si/no")
        if (pregunta === "si") {
            carritoArr.push(productoEncontrado)
        } else {
            verCarrito ()
            initProgram()
        }
    }
  else {
        alert ("No se encontro el producto");
    }
}

function precioTotal () {
    const precioTotal = carritoArr.reduce((acumulador, producto) => {
        return acumulador + producto.precio
    }
        , 0)
    return precioTotal;
}

precioTotal ()

function verCarrito() {
    carritoAuxiliar(carritoArr, alert)
    alert("fin del carrito" + " " + "el precio total es" + " " + precioTotal())
}
function carritoAuxiliar(arr, fn) {
    for (const producto of arr){
        fn(producto.nombre + " " + producto.precio + " " + producto.color + " " + producto.marca)
    }
}

function comprarProductos() {
    let comprar = prompt ("¿Desea realizar la comprar?" + " " + "el precio total es de" + " " + precioTotal()+ " "+ "si \n no")
    if (comprar === "si") {
        alert("Compra realizada")
    } else {
        alert("La compra no fue realizada")
        initProgram()
    }

}
initProgram()