// For In - cria loop nas propriedade do objeto

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for (const property in person) {
    console.log(property)
    console.log(person.name)
    console.log(person[property])
}