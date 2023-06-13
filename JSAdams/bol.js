let idade = 18;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log('Posso dirigir?' , possoDirigir)


idade = 71;

const votoFacultativo = idade < 18 || idade >= 70;

const estouGostandoDoFrio = false;
console.log(!estouGostandoDoFrio);