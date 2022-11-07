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
    

    if((moneda == "USD" || moneda == "EUR" || moneda == "BRL" || moneda == "JPY" || moneda == "CNY"
    || moneda == "GBP" || moneda == "CHF" || moneda == "KRW") && !isNaN(numero1)){
        
    let resultadoDolar;
    let resultadoEuro;
    let resultadoReales;
    let resultadoJPY;
    let resultadoCNY;
    let resultadoGBP;
    let resultadoCHF;
    let resultadoKRW;


        //switch para realizar las operaciones
        switch (moneda) {
            case "USD":
                resultadoDolar = numero1 / precios[0].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar $ ${resultadoDolar.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoDolar", JSON.stringify(resultadoDolar.toFixed(2)))
                //sweet alert
                    Swal.fire({
                                title: "Usted puede comprar $ " + resultadoDolar.toFixed(2),
                                showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                                }
                            })                               
                break;
        
            case "EUR":
                resultadoEuro = numero1 / precios[1].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar € ${resultadoEuro.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoEuro", JSON.stringify(resultadoEuro.toFixed(2)))
                //sweet alert
                Swal.fire({
                            title: "Usted puede comprar € " + resultadoEuro.toFixed(2),
                            showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                break;
            
            case "BRL":
                resultadoReales = numero1 / precios[2].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar R$ ${resultadoReales.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoReales", JSON.stringify(resultadoReales.toFixed(2)))
                //sweet alert
                    Swal.fire({
                                title: "Usted puede comprar R$ " + resultadoReales.toFixed(2),
                                showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                break;

            case "JPY":
                resultadoJPY = numero1 / precios[3].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar ¥ ${resultadoJPY.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoYenes", JSON.stringify(resultadoJPY.toFixed(2)))
                //sweet alert
                    Swal.fire({
                                title: "Usted puede comprar ¥ " + resultadoJPY.toFixed(2),
                                showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                break;

            case "CNY":
                resultadoCNY = numero1 / precios[4].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar ¥ ${resultadoCNY.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoYuanes", JSON.stringify(resultadoCNY.toFixed(2)))
                //sweet alert
                    Swal.fire({
                                title: "Usted puede comprar ¥ " + resultadoCNY.toFixed(2),
                                showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                break;
                
            case "GBP":
                resultadoGBP = numero1 / precios[5].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar £ ${resultadoGBP.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoLibras", JSON.stringify(resultadoGBP.toFixed(2)))
                //sweet alert
                    Swal.fire({
                                title: "Usted puede comprar £ " + resultadoGBP.toFixed(2),
                                showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                break;

            case "CHF":
                resultadoCHF = numero1 / precios[6].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar Fr ${resultadoCHF.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoFrancoSuizo", JSON.stringify(resultadoCHF.toFixed(2)))
                //sweet alert
                    Swal.fire({
                            title: "Usted puede comprar Fr " + resultadoCHF.toFixed(2),
                            showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
            break;

            case "KRW":
                resultadoKRW = numero1 / precios[7].value;
                parrafoResultado.style = "color: green";
                parrafoResultado.innerText = `Usted puede comprar ₩ ${resultadoKRW.toFixed(2)}`;
                //guardar en localStorage resultado
                localStorage.setItem("resultadoWon", JSON.stringify(resultadoKRW.toFixed(2)))
                //sweet alert
                    Swal.fire({
                            title: "Usted puede comprar ₩ " + resultadoKRW.toFixed(2),
                            showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
            break;
        }    
    }else{
        //msj de error
        parrafoResultado.style = "color: red";
        parrafoResultado.innerText = "Calculo imposible, por favor ingrese solo números.";
    }
    
}







