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

 //Objeto con salida por consola

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

// //Interaccion con el usuario

 let indumentariaFav = prompt("¿Qué descuento en indumenaria preferís? ¿Ropa Casual o Uniformes?");
let accesoriosFav = prompt("¿Qué accesorios debería tener descuento para compartir? ¿Zapatillas, mochilas /bolsos o Zapatos?");
let libreriasFav = prompt("¿Te gustaría descuentos en librerías? si /no");
const categoriaFav = new Categoria (indumentariaFav, accesoriosFav, libreriasFav);
console.log(categoriaFav);
alert("Gracias portu feedback");
