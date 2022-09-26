let ordenDeCompra = Math.random();
let precioFuncionTeatroDia = 200;
let precioFuncionTeatroNoche= 500

function bienvenida() {
    alert('Hola :) Vas a poder elegir a que funcion queres ir')
}

function nombreFuncionDia() {
    let funcionDia = prompt('Ingresa la funcion que quieres ver');
    let nombre = prompt('Ingresa tu nombre');
    let apellido = prompt('Ingresa tu apellido');
    let formaDePago = parseInt(prompt('Ingresa forma de pago, 1: mercado pago 2: efectivo'))
    switch (formaDePago) {
        case 1:
            alert(`el precio por persona es de ${precioFuncionTeatroDia}`);
            let pago = prompt('Deseas continuar? si/no');
            if(pago == 'si') {
                alert(`La funcion ${funcionDia} se ha generado con la orden de compra ${ordenDeCompra}`)
            } else {
                alert('la operacion se ha cancelado');
            }
            break;
        case 2:
            alert(`el precio por persona es de ${precioFuncionTeatroDia} a abonar en la puerta`);
            break;
        default:
            alert('El dato ingresado no es correcto');
    }
}

function nombreFuncionNoche() {
    let funcionNoche = prompt('Ingresa la funcion que quieres ver');
    let nombre = prompt('Ingresa tu nombre');
    let apellido = prompt('Ingresa tu apellido');
    let formaDePago = parseInt(prompt('Ingresa forma de pago, 1: mercado pago 2: efectivo'))
    switch (formaDePago) {
        case 1:
            alert(`el precio por persona es de ${precioFuncionTeatroNoche}`);
            let pago = prompt('Deseas continuar? si/no');
            if(pago == 'si') {
                alert(`La funcion ${funcionNoche} se ha generado con el ticket ${ordenDeCompra}`)
            } else {
                alert('la operacion se ha cancelado');
            }
            break;
        case 2:
            alert(`el precio por persona es de ${precioFuncionTeatroNoche} a abonar en la puerta`);
            break;
        default:
            alert('El dato ingresado no es correcto');
    }
}



function opcionesPrincipales() {
    let eligeOpcion = parseInt(prompt('Ingresa 1 para funciones diurnas o 2 para nocturmas'));

    switch (eligeOpcion) {
        case 1:
            nombreFuncionDia();
            break;
        case 2:
            nombreFuncionNoche();
            break;
        default:
            alert('El dato ingresado es incorrecto, intenta de nuevo')
    }
}
bienvenida();

let nuevaConsulta = 0;
do {
    opcionesPrincipales();
    nuevaConsulta = parseInt(prompt('Elige la opcion 1 para comprar otro ticket o 2 para salir'));
} while (nuevaConsulta != 2);
if (nuevaConsulta == 2) {
    alert('Gracias por tu compra');
    alert('Vuelve a ingresar');
} else {

}