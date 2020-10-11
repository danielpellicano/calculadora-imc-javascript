window.addEventListener("load", () => {
    CalculoImc();
  });


  function CalculoImc(){
    let calculadoraIMC = document.getElementById('calc-imc');
    let peso = document.createElement('input');
    let altura = document.createElement('input');
    let submit = document.createElement('input');
    let resultado = document.createElement('div');
    let txtResultado = document.createElement('p');
    peso.setAttribute("type", "number");
    altura.setAttribute("type", "number");
    altura.setAttribute("max", "2.4");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "btn-calcular");
    submit.setAttribute("value", "Calcular");
    peso.placeholder = "Seu Peso em KG..";
    altura.placeholder = "Sua Altura em CM.. Ex: 1,85";
    altura.setAttribute("required", "");

    calculadoraIMC.append(peso, altura, submit);

    submit.onclick = function(){
      event.preventDefault();
      let valPeso = peso.value;
      let valAltura = altura.value;
      let calculoIMC = Number(valPeso / ( valAltura * valAltura ));

      if (valPeso === '' || valAltura === '') {
        alert('Preencha os dados para fazer o cálculo');
      } else {
        resultado.setAttribute("id", "resultado");
      resultado.textContent = 'Seu IMC: ' + calculoIMC.toFixed(2);
      calculadoraIMC.append(resultado, txtResultado);
      if(calculoIMC<18.5){
        resultado.setAttribute("class", "baixo");
        txtResultado.textContent = "Você está magro com esse índice";
        }
        else if(calculoIMC>=18.5 && calculoIMC<24.9){
          resultado.setAttribute("class", "normal");
          txtResultado.textContent = "Você está normal com esse índice";
        }
        
        else if(calculoIMC>=25 && calculoIMC<29.9) {
          resultado.setAttribute("class", "excesso");
          txtResultado.textContent = "Você está com sobre peso com esse índice";
        }
        else if(calculoIMC>=30 && calculoIMC<34.9) {
          resultado.setAttribute("class", "obesidade");
          txtResultado.textContent = "Você está com obesidade com esse índice";
        }
        else if(calculoIMC>=35 && calculoIMC<39.9) {
          resultado.setAttribute("class", "obesidade2");
          txtResultado.textContent = "Você está com Obesidade de Classe 2 com esse índice:";
        }
        else if (calculoIMC > 40) {
          resultado.setAttribute("class", "obesidade3");
          txtResultado.textContent = "Você estácom obesidade grave com esse índice";
        }
      }

      }
    };


/* 
  function CalculoImc(){
    var peso = parseFloat(document.formImc.peso.value);
    var altura = parseFloat(document.formImc.altura.value);
    var imc = peso/(altura*altura);
    document.formImc.resultado.value = imc.toFixed(2);
    return false;
         */
