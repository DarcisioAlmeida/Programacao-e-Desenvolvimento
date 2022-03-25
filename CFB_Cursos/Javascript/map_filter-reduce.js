// Map
const numbers = [1, 2, 3, 4, 5]
const numbersMultipleByTwo = numbers.map(function(item){
  return item * 2
})
console.log(numbersMultipleByTwo)

// Filter 
const ages = [8, 13, 27, 30, 22, 40, 75]
const evenAges = ages.filter(function(item){
  return item % 2 === 0
})
console.log(evenAges)

//Reduce
// ideal colocar accumulator neste caso começa com 0
const sumOfAges = ages.reduce(function(age, accumulator){
  return accumulator + age
}, 0)
console.log(sumOfAges)