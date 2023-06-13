const arr1 = [1, 12, 13, 30];
arr2 = [0,10,11];

console.log(arr1.slice(0, 2)); //ele nao inclui o 2.
console.log(arr1.slice(2)); //contará a partir do índice 2 até o final do array.


console.log('Antes de adc:', arr2);

arr2.push(2,12);
arr2.push(24); 

console.log('Depois de adc:', arr2);

arr2.unshift(1);

console.log('Depois de adc unshift:', arr2);

console.log('Antes de remover com pop:', arr2);

const elementoRemovido = arr2.pop();

arr2.pop()

console.log('Depois de remover com pop:', arr2);
console.log('O elemento removido foi:', elementoRemovido);

console.log('Antes de remover com shift:', arr2);

const elementoRemovidoShift = arr2.shift();


arr2.shift()
console.log('Depois de remover com shift:', arr2);
console.log('O elemento removido foi:', elementoRemovidoShift);

console.log('arr1', arr1);
console.log('arr2', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.log(arr1);

let indiceDoElemento13 = arr1.indexOf(13);

console.log(indiceDoElemento13);

let arr3 = [6, 7, 8, 9];

let indiceDoElemento9 = arr3.lastIndexOf(9);

console.log(arr3);
console.log(arr3.includes(5));
console.log(indiceDoElemento9);

//Invertendo arrays: reverse.
console.log('arr3 normal:', arr1);
const arr3Invertido = arr3.reverse();

console.log('arr3 invertido:', arr3Invertido);












