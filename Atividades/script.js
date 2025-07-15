function calculadoraIMC(){
    //Entrada
    let pesoAtual = document.getElementById("peso").value;
    let alturaAtual = document.getElementById("altura").value;

    //Processamento
    let imc = pesoAtual / (alturaAtual * alturaAtual);
    let imcFinal = imc;
    
    //Saída
    document.getElementById("resultado").textContent = 'IMC: ' + imcFinal + ' ' + mensagem(imcFinal);

    function mensagem(imcFinal) {
        if (imcFinal < 18.5)
            return 'Abaixo do peso';

        if (imcFinal >= 18.5 && imcFinal <= 24.9)
            return 'Normal';

        if (imcFinal >= 25 && imcFinal <= 29.9)
            return 'Sobrepeso';

        if (imcFinal >= 30 && imcFinal <= 34.9)
            return 'Obesidade grau I';

        if (imcFinal >= 35 && imcFinal <= 39.9)
            return 'Obesidade grau II';

        if (imcFinal >= 40)
            return 'Obesidade grau III';

    }    

}