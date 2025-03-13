//Entrada
const valorJantar = prompt("Valor do Jantar R$: ");
//Processamento
const valorGarcom = Number(valorJantar) * 0.10;
const valorTotal = Number(valorJantar) + valorGarcom;

//Saída
alert("Valor Total R$: " + valorTotal);