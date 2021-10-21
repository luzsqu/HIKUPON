//Ejemplo de descuentos 


function mostrarDescuento() {
    let precio= document.getElementById("importeCupon").value;

    if(precio>0)
    {
        let porcentaje= calcularDescuento(precio);
        let precioDescuento = precio * porcentaje;

        mostrarAlerta("El descuento de "+porcentaje*100+"% es de $ " + precioDescuento);
    }else{
        mostrarAlerta("Por favor ingrese un importe válido!");
    }
    
}

function calcularDescuento(importe){
    let descuento= 0;

    if(importe<=1000){
        descuento = 0.05;
    }else if(importe <=2000){
        descuento = 0.10;
    }else if(importe<=5000){
        descuento= 0.20;
    }else{
        descuento= 0.25;
    }

    return descuento;
}

function mostrarAlerta(texto){
    alert("HIKUPON \n "+texto);
}

 //CLase 5- Objeto con salida por consola

alert("Tenemos los descuentos para todos los gustos.");

 const categoria = { Indumentaria: "Ropa y accesorios",
             Transporte: "Larga y corta distancia",
             Librerias: "Libros y cuadernos",
           
}                 
 console.log(categoria.Indumentaria);
 console.log(categoria.Transporte);
 console.log(categoria.Librerias);


//función constructora 
function Categoria (ropa, accesorios, librerias) {
    this.ropa = ropa;
    this.accesorios = accesorios;
    this.librerias = librerias;
    this.informar = function() { console.log("Datos del descuento " + this.ropa + " " + this.accesorios + " " + this.librerias); }
}

const categoria1 = new Categoria ("Prendas", "Aros y collares", "Libros");
categoria1.informar();
const categoria2 = new Categoria("Uniformes", "Zapatillas", "articulos escolares");
categoria2.informar(); 

// Clase 5- Interaccion con el usuario-Objetos

 let indumentariaFav = prompt("¿Qué descuento en indumenaria preferís? ¿Ropa Casual o Uniformes?");
let accesoriosFav = prompt("¿Qué accesorios debería tener descuento para compartir? ¿Zapatillas, mochilas /bolsos o Zapatos?");
let libreriasFav = prompt("¿Te gustaría descuentos en librerías? si /no");
const categoriaFav = new Categoria (indumentariaFav, accesoriosFav, libreriasFav);
console.log(categoriaFav);
alert("Gracias por tu feedback");


//Desafio clase 6- array 

<<<<<<< HEAD
class Descuento {
    constructor (indumentaria, hogar, viajes, librerias, papeleria, precio)
    {
    this.indumentaria = indumentaria;
    this.hogar = hogar;
    this.viajes = viajes;
    this.librerias = librerias;
    this.papeleria = papeleria;
    this.precio  = precio;
    this.venta = false;
}

sumarDescuento() { 
    this.precio = this.precio * 0.20; 
}
vender() {
    this.venta = true;
}
}
    

const listOfDescuento = [];
let salida
do{
let selectIndumentaria = prompt("Ingrese si desea cupon para ropa casual o ropa elegante");
let selectHogar = prompt("Ingrese si desea cupones para limpieza o deco del -hogar-");
let selectViajes = prompt("Ingrese larga o corta distancia para elegir el viaje"); 
let selectLibrerias = prompt ("¿Desea cupones para libros o agendas?");
let selectPapeleria = prompt ("¿Desea cupones para cuadernos o agendas?")
let selectPrecio = parseFloat(prompt("Ingrese el precio del producto seleccionado"));

listOfDescuento.push(new Descuento (selectIndumentaria, selectHogar, selectViajes, selectLibrerias, selectPapeleria, selectPrecio));
salida = prompt("Presione X para salir al carrito o cualquier otra tecla para continuar comprando").toLowerCase();
}while (salida != "x");

for (let i = 0; i < listOfDescuento.length; i++) {
    listOfDescuento[i].vender();
    listOfDescuento[i].sumarDescuento();
    
}       
console.log(listOfDescuento);


/*
=======
>>>>>>> eb5add0d1f961e22a75f34371ad83918051b6665

class Indumentaria {
    constructor(tipo, cantDescuento, compartir) {
        this.tipo = tipo.toUpperCase();
        this.cantDescuento = cantDescuento;
        this.compartir = compartir;
    }
}

const ind1 = new Indumentaria("Ropa casual", 50, false);
const ind2 = new Indumentaria("Ropa Elegante", 25, true);
const ind3 = new Indumentaria("Partes de arriba", 15, false);
const ind4 = new Indumentaria("Partes de abajo", 15, false);
const ind5 = new Indumentaria("Calzados", 10, true);

const listaIndumentaria = [];
listaIndumentaria.push(ind1);
listaIndumentaria.push(ind2);
listaIndumentaria.push(ind3);
listaIndumentaria.push(ind4);
listaIndumentaria.push(ind5);

const ind6 = new Indumentaria(prompt("Ingrese tipo de indumentaria para darte el descuento"), parseInt(prompt("Cantidad de Descuento")), (prompt("¿Te gustaría compartir el descuento?") == "true"));
listaIndumentaria.push(ind6);

console.log (listaIndumentaria);

<<<<<<< HEAD
=======
//ej 4
>>>>>>> eb5add0d1f961e22a75f34371ad83918051b6665
function buscarIndumentaria (categoria, indumentaria) {
    let encontrado = categoria.find(ind => ind.tipo== indumentaria); 
    if (encontrado == undefined) {
        encontrado = "Tipo de descuento no encontrado";
    }
    return encontrado;
}

for (let i = 1; i <= 3; i++) {
    let resultado = buscarIndumentaria (listaIndumentaria, prompt("Ingrese tipo de indumentaria para darte el descuento").toUpperCase());
    console.log(resultado);
}


//Desafio Complementario clase 6!!
const indumentaria = [
    { tipo: "Partes de arriba", descuentos: 30 },
    { tipo: "Accesorios", descuentos: 20 },
    { tipo: "Parte de abajo", descuentos: 15 },
    { tipo: "Calzados", descuentos: 5 },

]

const indumentariaOrden = indumentaria.sort((ind1, ind2) => {
<<<<<<< HEAD
    return ind1.descuentos - ind2.descuentos
})

console.log(indumentariaOrden)*/
=======
    return ind1.descuento - ind2.descuento
})

console.log(indumentariaOrden)
>>>>>>> eb5add0d1f961e22a75f34371ad83918051b6665
