console.log("Conversor de monedas");

//Variables para conversor
const operador1 = document.getElementById("numero1");
const parrafoResultado = document.getElementById("parrafoResultado");


//funcion para convertir
function calcular(){
    const moneda = monedaExtranjera.value;
    const numero1 = parseInt(operador1.value);
    const USD = 156;
    const EUR = 155.46;
    const BRL = 29.48;
    const JPY = 1.06;
    let resultadoDolar;
    let resultadoEuro;
    let resultadoReales;
    let resultadoJPY;

    if((moneda == "USD" || moneda == "EUR" || moneda == "BRL" || moneda == "JPY") && !isNaN(numero1)){
        
        //switch para realizar las operaciones
        switch (moneda) {
            case "USD":
                resultadoDolar = numero1 / USD;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar $${resultadoDolar.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoDolar", JSON.stringify(resultadoDolar.toFixed(2)))
                break;
        
            case "EUR":
                resultadoEuro = numero1 / EUR;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar €${resultadoEuro.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoEuro", JSON.stringify(resultadoEuro.toFixed(2)))
                break;
            
            case "BRL":
                resultadoReales = numero1 / BRL;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar R$${resultadoReales.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoReales", JSON.stringify(resultadoReales.toFixed(2)))
                break;

            case "JPY":
                resultadoJPY = numero1 / JPY;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar ¥${resultadoJPY.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoYenes", JSON.stringify(resultadoJPY.toFixed(2)))
                break;
        }    
    }else{
        //msj de error
        parrafoResultado.style = "color: red";
        parrafoResultado.innerText = "Calculo imposible, por favor ingrese solo números.";
    }
    
}



