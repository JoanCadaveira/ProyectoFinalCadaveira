console.log("Conversor de monedas");

//Variables para conversor
const operador1 = document.getElementById("numero1");
const parrafoResultado = document.getElementById("parrafoResultado");



let precios = [];

fetch('/assets/js/precios.json')
    .then((response) => response.json())
    .then(data => { precios = data });


//funcion para convertir

function calcular(){
    
    console.log(precios);

    const moneda = monedaExtranjera.value;
    const numero1 = parseInt(operador1.value);
    

    if((moneda == "USD" || moneda == "EUR" || moneda == "BRL" || moneda == "JPY") && !isNaN(numero1)){
        
    let resultadoDolar;
    let resultadoEuro;
    let resultadoReales;
    let resultadoJPY;

    
    //const para sweetalert
    const btn = document.querySelector("#solucion");


        //switch para realizar las operaciones
        switch (moneda) {
            case "USD":
                resultadoDolar = numero1 / precios[0].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar $ ${resultadoDolar.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoDolar", JSON.stringify(resultadoDolar.toFixed(2)))
                //sweet alert
                btn.addEventListener("click", () =>{
                Swal.fire({
                            title: "Usted puede comprar $ " + resultadoDolar.toFixed(2),
                            showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    })
                break;
        
            case "EUR":
                resultadoEuro = numero1 / precios[1].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar € ${resultadoEuro.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoEuro", JSON.stringify(resultadoEuro.toFixed(2)))
                //sweet alert
                btn.addEventListener("click", () =>{
                Swal.fire({
                            title: "Usted puede comprar € " + resultadoEuro.toFixed(2),
                            showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    })
                break;
            
            case "BRL":
                resultadoReales = numero1 / precios[2].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar R$ ${resultadoReales.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoReales", JSON.stringify(resultadoReales.toFixed(2)))
                //sweet alert
                btn.addEventListener("click", () =>{
                    Swal.fire({
                                title: "Usted puede comprar R$ " + resultadoReales.toFixed(2),
                                showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        })
                break;

            case "JPY":
                resultadoJPY = numero1 / precios[3].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar ¥ ${resultadoJPY.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoYenes", JSON.stringify(resultadoJPY.toFixed(2)))
                //sweet alert
                btn.addEventListener("click", () =>{
                    Swal.fire({
                                title: "Usted puede comprar ¥ " + resultadoJPY.toFixed(2),
                                showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        })
                break;
        }    
    }else{
        //msj de error
        parrafoResultado.style = "color: red";
        parrafoResultado.innerText = "Calculo imposible, por favor ingrese solo números.";
    }
    
}







