function Carro(marcaAtribuida, precoAtribuido, corAtribuida) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
  this.cor = corAtribuida;
}

const honda = new Carro('Honda', 3000, 'prata');
const fiat = new Carro('Fiat', 4000, 'preto');
const nissan = new Carro('Sentra', 70000) // neste caso a cor sai undefined pois não foi definida.

console.log(honda);
console.log(fiat);
console.log(nissan)

function Carro2(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  console.log(this)
  this.marca = marca;
  console.log(this)
  this.preco = precoFinal;
  console.log(this)
}

const mazda = new Carro2('Mazda', 5000);
console.log(mazda) // recebe todas as propiedade e metodos do Carro2