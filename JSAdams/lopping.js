const input = require('readline-sync');

const numero_sorteado = 13;

let numero = Number( input.question('Qual o seu numero da sorte? '));

console.log(numero, typeof numero)

while (numero !== numero_sorteado) {
    console.log('Oh! não eh esse! Qual o seu proximo numero da sorte? ')

    numero = Number( input.question('Qual o seu numero da sorte? '));
}

console.log('Yuhuu! Voce eh muito sortudo!')