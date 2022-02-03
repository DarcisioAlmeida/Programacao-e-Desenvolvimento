/* Usando Arrays */

var itens = ["Faca", "Pederneira", "Corda", "Lanterna", "Luvas", "Chave", "Arame"];

var mochila =[];

mochila.push(5); // adicioando item posição 5 = Chave
mochila.push(0); // adiconado item posição 0 = Faca
mochila.push(3); // adicionado item posição 3 = Lanterna

console.log (itens.indexOf("Corda")); // mostra posição do array

console.log(itens[mochila[0]], itens[mochila[1]]  ,itens[mochila[2]], itens[mochila[3]],)
// mochila[3] posição não existe por isso console informa undefined

itens.unshift("Pedra", "Tijolo", "Areia"); // adiciona item ao inicio
mochila.push(4,6) // adiciona no final do array;

console.log(itens[mochila[0]], itens[mochila[1]]  ,itens[mochila[2]], itens[mochila[4]],)

itens.pop() //remove elemento final array
console.log(itens[mochila[0]], itens[mochila[1]]  ,itens[mochila[2]], itens[mochila[4]],)

itens.shift(); // remove inicio do array
console.log(itens[mochila[0]], itens[mochila[1]]  ,itens[mochila[2]], itens[mochila[3]],)

itens.splice(3); // remove no meio do array
console.log(itens[mochila[0]], itens[mochila[1]]  ,itens[mochila[2]], itens[mochila[3]],)

/* 
push - adiciona ao final do array
pop - remove do final do array
unshift - adiciona ao innicio do array
shift - remove do inicio do array
splice - remove do meio do array
indexOF - verifica a posição de elemento em array
sort - ordena os elementos array
reverse - reverte ordem do array
join - mostra o ou os elementos do array
concat - concatena ele junta elementos de 2 ou mais array
length - retorna tamanho do array  ou seja quantidade de elementos que ele tem.
*/