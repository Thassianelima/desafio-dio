//projeto calculadora de partidas rankeds

function calcularSaldoRankeds(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldo = calcularSaldoRankeds(20, 5);
let saldo2 = saldo ;
console.log(saldo); 
 if (saldo < 10){
    console.log('ferro')
 }else if (saldo < 20){
    console.log('bronze')
 }else if(saldo < 30 ){
    console.log('prata')
 }else if (saldo < 40){
    console.log('ouro')
 }else if (saldo < 50){
    console.log('diamante')
 } else if (saldo < 60){
    console.log('lendario')
 }else{
    console.log('imortal')
 }
 
console.log('o heroi tem saldo de ' + saldo2 + ' e esta no nivel de ' + saldo)