const botaoCalcular = document.getElementById('btnCalcular');

function calculoIMC() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value / 100;
    const resultado = document.getElementById("resultado");

    if (altura !== "" && peso !== "") {
        let imc = (peso / (altura * altura)).toFixed(1);

        let mensagem = "";

        if (imc <= 18.5) {
            mensagem = "Você está abaixo do peso ideal!"
            resultado.classList.add("resultado-yellow")
        } else if (imc <= 25) {
            mensagem = "Você está com o peso ideal!"
            resultado.classList.add("resultado-green")
        } else if (imc <= 30) {
            mensagem = "Você está acima do peso ideal!"
            resultado.classList.add("resultado-yellow")
        } else if (imc <= 35) {
            mensagem = "Cuidado! Você está com obesidade grau I"
            resultado.classList.add("resultado-red")
        } else if (imc <= 40) {
            mensagem = "Cuidado! Você está com obesidade grau II"
            resultado.classList.add("resultado-red")
        } else {
            mensagem = "Cuidado! Você está com obesidade grau III"
            resultado.classList.add("resultado-red")
        }

        resultado.textContent = `Seu IMC é: ${imc}. ${mensagem}`;

    } else {
        resultado.textContent = "Por favor, preencha todos os campos!"
        resultado.classList.add("resultado-red")
    }
}

const reset = document.getElementById("reset");

function clear() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    resultado.classList.remove("resultado-red");
    resultado.classList.remove("resultado-green");
    resultado.classList.remove("resultado-yellow");
    resultado.textContent = "";
}

reset.addEventListener('click', clear());