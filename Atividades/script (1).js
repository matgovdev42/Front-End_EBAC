/* 
Elaborar um programa para um cinema, onde o usuário possa digitar o título e a duração
de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos

1. Obter o nome do filme.
2. Obter a duração em minutos.
3. Converter a duração de minutos para horas
    exemplo : 70 minutos -> (1 hr e 10 minutos)

    60 minutos = 1 hr
    10 minutos
    70 / 60 = 1,16 (arrendondar para baixo) = 1
    horas = 1
    const minutos = 70 - 1 * 60 = 10

3.1 Fazer a divisão da duração em minutos por 60 pra pegar a quantidade em horas
3.2 Arrendondar a quantidade de horas para pegar só as horas cheias
3.3 Pegar o resultado da duração em minutos e remover as horas cheias (horas * 60)   

4. Exivir o nome do filme.
5. Exibir a duração em horas e minutos.
*/

function algoritmo(){

    const titulo = document.getElementById("titulo").value;
    const duracao = document.getElementById("duracao").value;

    const horas = Math.floor (duracao / 60);
    const minutos = duracao - horas * 60;

    document.getElementById("tituloSaida").textContent = titulo.toUpperCase();
    document.getElementById("duracaoSaida").textContent = horas + " hora(s) e " + minutos + "minuto(s)";
}


