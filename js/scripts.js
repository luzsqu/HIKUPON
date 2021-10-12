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
