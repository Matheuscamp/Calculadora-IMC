function calcularIMC() {
  //Pegar os elementos do HTML
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  //Checar se os inputs estão preenchidos
  if (weight === "" || height === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  //Fazer o calculo do imc
  var bmi = weight / (height * height);

  //Exibir na tela os resultados
  var result = document.getElementById("result");
  result.innerHTML = "Seu IMC é: " + bmi.toFixed(2) + "<br>";

  if (bmi < 18.5) {
    result.innerHTML += "Você está abaixo do peso.";
  } else if (bmi >= 18.5 && bmi < 25) {
    result.innerHTML += "Seu peso está dentro da faixa saudável.";
  } else if (bmi >= 25 && bmi < 30) {
    result.innerHTML += "Você está com sobrepeso.";
  } else {
    result.innerHTML += "Você está com obesidade.";
  }
}
