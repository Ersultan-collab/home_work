// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length)


// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers[0])
// console.log(numbers[4])
// console.log(numbers[2])


// let mixedDataTypes = [1, "hello", 3.14, True, [1, 2, 3], (4, 5)]
// console.log(mixedDataTypes)


// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// // console.log(itCompanies)
// console.log(itCompanies.length)
// console.log(itCompanies[0])
// console.log(itCompanies[Math.floor(itCompanies.length / 2)])
// console.log(itCompanies[itCompanies.length - 1])

// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(`${itCompanies.join(', ')} are big IT companies.`)

// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// let enter_itCompanies = prompt('Enter it Companies: ')
// if (itCompanies.includes(enter_itCompanies)){
//     console.log(`${enter_itCompanies} есть в списке`)
// }else{
//     console.log('Компания не найдена')
// }


// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// // console.log(itCompanies.sort())
// // console.log(itCompanies.reverse())
// // console.log(itCompanies.slice(0,3))
// // console.log(itCompanies.slice(itCompanies.length - 3,itCompanies.length - 0))
// let center = Math.floor(itCompanies.length / 2)
// // itCompanies.shift()
// // itCompanies.splice(center, 1)
// // itCompanies.pop()
// // itCompanies.splice(0)
// console.log(itCompanies)


// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let words = text.split(' ')
// console.log(words)
// console.log(words.length)


// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// shoppingCart.splice(4,1)
// shoppingCart[3] = 'Green tea'
// console.log(shoppingCart)


// let countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

//   if (countries.includes('Ethiopia')){
//     console.log('Ethiopia'.toUpperCase())
//   }else{
//     countries.push('Kazakhstan')
//     console.log(countries)
//   }


//   let webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   if (webTechs.includes('Sass ')){
//     console.log('Sass is a CSS preprocess')
//   }else{
//     webTechs.push('Sass')
//     console.log(webTechs)
//   }



// let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// let backEnd = ['Node','Express', 'MongoDB']
// let fullsack = frontEnd.concat(backEnd)
// console.log(fullsack)


let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let min = Math.min(ages)
let max = Math.max(ages)
console.log(min)
console.log(max)


let countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

console.log(countries[Math.floor(countries.length / 2)])