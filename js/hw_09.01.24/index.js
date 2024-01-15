// let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
// let random_id = ''

// for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length)
//     random_id += characters[randomIndex]
//   }
// console.log([random_id])

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
// let random_id = ''

// for (let i = 0; i < Math.floor(Math.random() * 14 + 6); i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     random_id += characters[randomIndex]
//   }
// console.log(random_id)

// let random = '0123456789ABCDEF'
// let str = '#'
// for(let i = 0; i <= 5; i++){
//     let random_index = Math.floor(Math.random() * random.length)
//     str += random[random_index]
// }
// console.log(str)

// let rgb = []
// for(let i = 0; i <= 2; i++){
//     let rondom_nums = Math.round(Math.random() * 255)
//     rgb.push(rondom_nums)
// }
// console.log(`rgb(${rgb})`)

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
// let new_contry = []
// for(let i = 0; i < countries.length; i++){
//   new_contry.push(countries[i].toLocaleUpperCase())
// }
// console.log(new_contry)

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
// let len_contry = []
// for(let i = 0; i < countries.length; i++){
//     len_contry.push(countries[i].length)
// }
// console.log(len_contry)

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
// let new_contry = []
// for(let i = 0; i < countries.length; i++){
//     let contry_name = countries[i].slice(0, 3)
//     new_contry.push([countries[i], contry_name.toLocaleUpperCase(), countries[i].length])
    
// }
// console.log(new_contry)


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
//     'Iceland',
//     'Japan',
//     'Kenya'
//   ]
// let nem_array = []
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].endsWith('land')){
//         nem_array.push(countries[i])
//     }
// }
// nem_array.length > 0
//     ? console.log(nem_array)
//     : console.log('All these countries are without land')
  
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
// let nem_array = []
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].endsWith('ia')){
//         nem_array.push(countries[i])
//     }
// }
// nem_array.length > 0
//     ? console.log(nem_array)
//     : console.log('These are countries ends without ia')

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
// let max_len = countries[0].length
// let contry = countries[0] 
// for(let i = 1; i < countries.length; i++){
// if(countries[i].length > max_len){
//     max_len = countries[i].length
//     contry = countries[i]
//     }
// } 
// console.log(contry)

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
// let new_array = []
// for(let i = 0; i < countries.length; i++){
//     if (countries[i].length === 5){
//         new_array.push(countries[i])
//     }
// }
// console.log(new_array)

// let kz_nom = [700, 701, 705, 706, 776, 747, 777, 771, 778]
// let new_nom = ['+7',]
// for(let i = 0; i < 1; i++){
//     new_nom.push(kz_nom[Math.floor(Math.random() * kz_nom.length)])
//     new_nom.push(Math.floor(Math.random() * 900) + 100)
//     new_nom.push(Math.floor(Math.random() * 9000) + 1000)
// }
// console.log(new_nom.join('-'))

// let kz_nom = [700, 701, 705, 706, 776, 747, 777, 771, 778]
// let new_nom = `+7 ${new_nom.push(kz_nom[Math.floor(Math.random() * kz_nom.length)])} `


// for(let i = 0; i < 3; i++){
//    for(let j = 0; j < 4; j++){
//         new_nom += Math.round(Math.random() * 9)
//          if(i < 2){
//             new_nom += '-'
//         }
//     }
    
// }
// console.log(new_nom)

let kz_nom = ['700', '701', '705', '706', '776', '747', '777', '771', '778'];
let new_nom = `+7 ${kz_nom[Math.floor(Math.random() * kz_nom.length)]} `;

for (let i = 0; i < 7; i++) {
        new_nom += Math.round(Math.random() * 9);
    if (i === 2) {
        new_nom += '-';
    }
}

console.log(new_nom);

// let kz_nom = [700, 701, 705, 706, 776, 747, 777, 771, 778]
// for(let i = 0; i < 1; i++){
//     let nom = `+7 (${kz_nom[Math.floor(Math.random() * kz_nom.length)]}) `
//         for(let j = 0; j < 7; j++){
//             nom += Math.floor(Math.random() * 9)
//             if(j === 2){
//                 nom += '-'
//             }
            
//         }
//     console.log(nom)    
// }

// // Генерация 5 случайных казахстанских номеров телефонов
// for (let i = 0; i < 1; i++) {
//     let phoneNumber = '+7 (7' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + ') ';
    
//     for (let j = 0; j < 7; j++) {
//         phoneNumber += Math.floor(Math.random() * 10);
//         if (j === 2 || j === 4) {
//             phoneNumber += '-';
//         }
//     }

//     console.log(phoneNumber);
// }


// let hsl = []
// for(let i = 0; i < 1; i++){
//     let hsl_color1 = Math.round(Math.random() * 360)
//     hsl.push(hsl_color1)
//     for(let j = 0; j < 2; j++){
//         let hsl_color2 = Math.round(Math.random() * 100)
//         hsl.push(`${hsl_color2}%`)
//     }
    
// }
// console.log(`hsl(${hsl})`)


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
// let LowerCasecontry = []
// for(let i = 0; i < countries.length; i++){
//     LowerCasecontry.push(countries[i].toLocaleLowerCase())
    
// }console.log(LowerCasecontry)

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
// let new_arrays = []
// for(let i = 0; i < countries.length; i++){
//     new_arrays.push(countries[i].slice(0,1))
// }console.log(new_arrays)


