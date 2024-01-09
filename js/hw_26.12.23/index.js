// let age = prompt('Enter your age: ')
// switch(age >= 18){
//     case true:
//         console.log(`You are ${age} old enough to drive`)
//         break
//     default:
//         console.log(`You are left with ${18 - age} years to drive.`)
//         break
// }



// let my_age = 18
// let your_age = Number(prompt('Enter your age: '))
// switch(your_age > my_age){
//     case true:
//         console.log(`You are ${your_age - my_age} years older than me.`)
//         break
//     default:
//         switch(your_age === my_age){
//             case true:
//                 console.log('We are the same age.')
//                 break
//             case false:
//                 console.log(`You are ${my_age - your_age} years younger than me`)
//                 break  
//         }
// }



// let a = Number(prompt('Enter a: '))
// let b = Number(prompt('Enter b: '))
// switch(a > b){
//     case true:
//         console.log(`${a} is greater than ${b}`)
//         break
//     default:
//         switch(a === b){
//             case true:
//                 console.log(`${a} is equal to ${b}`)
//                 break
//             default:
//                 console.log(`${a} is less than ${b}`)
//                 break
//         } 
// }



// let number = Number(prompt('Enter number: '))
// switch(number % 2 === 0){
//     case true:
//         console.log(`${number} is an even number`)
//         break
//     default:
//         console.log(`${number} is an odd number`)
//         break
// }



// let grades = Number(prompt('Enter your grades: '))
// switch (true) {
//     case (grades >= 90 && grades <= 100):
//         console.log('A');
//         break;
//     case (grades >= 70 && grades <= 89):
//         console.log('B');
//         break;
//     case (grades >= 60 && grades <= 69):
//         console.log('C');
//         break;
//     case (grades >= 50 && grades <= 59):
//         console.log('D');
//         break;
//     case (grades >= 0 && grades <= 49):
//         console.log('F');
//         break;
//     default:
//         console.log('Please write numbers from 0 to 100.');
//         break;
// }



// let month = prompt('Enter month: ')
// switch(true){
//     case(month === 'September' || month === 'October' || month === 'November'):
//         console.log('Autumn')
//         break
//     case(month === 'December' || month === 'January' || month === 'February'):
//         console.log('Winter')
//         break
//     case(month === 'March' || month === 'April' || month === 'May'):
//         console.log('Spring')
//         break
//     case(month === 'June' || month === 'July' || month === 'August'):
//         console.log('Summer')
//     default:
//         console.log('Please write only the months of the year.')
//         break
// }



// let day = prompt('What is the day today? ')
// switch(true){
//     case day === 'Monday' || day === 'Tuesday' || day === 'Wednsday' || day === "Thursday " || day === 'Friday':
//         console.log(`${day} is a working day.`)
//         break
//     case day === 'Saturday' || day === 'Sunday':
//         console.log(`${day} is a weekend`)
//         break
//     default:
//         console.log('Please write only the days of the week')
//         break
// }



// let month = prompt('Enter a month: ');
// switch(true){
//     case (month === 'january' || month === 'march' || month === 'may' ||month === 'july' || month === 'august' || month === 'october' || month === 'december'):
//         console.log(`${month} has 31 days.`);
//         break
//     case (month === 'april' || month === 'june' || month === 'september' || month === 'november'):
//         console.log(`${month} has 30 days.`);
//         break
//     case (month === 'february'):
//         console.log(`${month} has 28 days.`);
//         break
//     default:
//         console.log('Invalid month.');
//         break
// }



// let year = Number(prompt('Enter year: '))
// switch(year % 4 === 0 && year % 100 != 0 || year % 400 === 0){
//     case true:
//         console.log('leap year')
//         break
//     default:
//         console.log('not leap year')
//         break
// }