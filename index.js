alert("Bienvenido al simulador ecommerce")
let nombre = prompt("Ingrese su nombre")
console.log ("Hola"+ nombre)

alert("Hola" + nombre + "\nIngrese el número de lo que desee comprar, ESC para salir")

let productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas"))
let buzo = 0
let remera = 0
let pantalon = 0
let zapatilla = 0
let total = 0

while(productos != "ESC") {
    switch(productos) {
        case 1:
            alert("agregaste un buzo al carrito")
            buzo = 10000
            total = total + buzo
            console.log(total)
            productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
            break

        case 2:
            alert("agregaste una remera al carrito")
            remera = 8000
            total = total + remera
            console.log(total)
            productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
            break

        case 3:
            alert("agregaste un pantalon al carrito")
            pantalon = 8000
            total = total + pantalon
            console.log(total)
            productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
            break
        
        case 4:
            alert("agregaste un par de zapatillas al carrito")
            zapatilla = 6000
            total = total + zapatilla
            console.log(total)
            productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
            break

        case 5:
            alert("el precio total es " + total)
            compra = parseInt(prompt("¿Desea finalizar la compra? \n1-SI \n2-NO"))
            if(compra =="1"){
                alert("Gracias por su compra")
                console.log(total=0)
                productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
            }
            else if(compra == "2"){
            productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
            }
            else{
                alert("Error")
            productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
            }
            break
        default:
            alert("Error")
            productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
            break
    }
}
if(compra =="1"){
    alert("Gracias por su compra")
    console.log(total=0)
    productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
}
else if(compra == "2"){
productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
}
else{
    alert("Error")
productos = parseInt(prompt("1-Buzos \n2-Remeras \n3-Pantalones \n4-Zapatillas \n5-Comprar"))
}