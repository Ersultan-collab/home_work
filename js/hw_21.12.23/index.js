// let year = prompt('Enter year: ')
// let date = new Date(year)
// let now = new Date()
// let ty = now.getTime() - date.getTime()
// let result = Math.round(ty / (1000 * 60 * 60 * 24 * 365))
// console.log(result)

// if (result >= 18){
//     console.log(`You are ${result}. You are old enough to drive`)
// }
// else{
//     console.log(`You are ${result} years old. You need to wait ${18 - result} more years to drive.`)
// }



// let yearslived = prompt('Enter years lived: ')
// console.log(yearslived * 365 * 24 * 60 * 60)


// let data = new Date('2020-8-20 9:5')
// let year = data.getFullYear()
// let month = data.getMonth()
// let day = data.getDate()
// let hour = data.getHours()
// let minute = data.getMinutes()
// console.log(`${year}-${month}-${day} ${hour}:${minute}`)
// console.log(data)


// let j = 11;
// let k = 15;
// let l = 23;
// let m = 17;
// let n = 14;
// let o = 19;
// let p = 13;
// let q = 20;
// let r = 18;
// let s = 10;
// let t = 22;
// let u = 16;
// let v = 21;
// let w = 12;
// let x = 25;
// let y = 27;
// let z = 24;
// let aa = 26;
// let bb = 28;
// let cc = 29;

// let problem_1 = ++j - k++ * ++l + ++n;
// // 12 - 15 * 24 + 15= 15 * 24 = 360 - 12 = 348 + 14 = 362
// console.log(problem_1)

// let problem_2 = ++m + p-- * --o + ++j;
// // 13 * 18 = 234 + 18 + 12 = 264
// console.log(problem_2)

// let problem_3 = ++l - cc++ / ++n + ++m;
// // 29 / 16 = 24 - 1.9 + 18 = 40.1
// console.log(problem_3)

// let problem_4 = ++q * p-- - --j + ++l;
// // 21 * 13 = 273 - 10 + 24 = 287
// console.log(problem_4)

// let problem_5 = ++n / o++ + ++cc * --r;
// // 15 / 20 = 0.7
// // 30 * 17 = 510 + 0.7 = 510.7
// console.log(problem_5)

// let problem_6 = ++w % p++ - ++j / --l;
// // 13 % 14 = 13 
// // 12 / 22 = 0.5 - 13 = 12.5
// // 13 % 13 = 0 
// // 12 / 22 = 0.5 - 0- = -0.5
// console.log(problem_6)

// let problem_7 = ++p * cc-- / --r + ++k;
// // 14 * 29 = 406
// // 406 / 17 = 23.8 + 16 = 39.8
// // 14 * 28 = 392
// // 392 / 17 = 23. + 16 = 39.
// console.log(problem_7)

// let problem_8 = ++q + w-- % --l + ++m;
// // 21 + 12 % 22 + 18 
// // 12 % 22 = 12
// // 21 + 12 + 18 = 51
// // 21 + 11 + 18 = 50
// console.log(problem_8)

// let problem_9 = ++r / l++ - ++p % --w;
// // 19 / 23 = 0.8
// // 14 % 11 = 3
// // 0.8 - 3 = -2.1
// console.log(problem_9)

// let problem_10 = ++l + o-- * --cc + ++k;
// // 19 * 28 = 532 + 24 + 16 = 572
// // 18 * 28 = 504 + 24 + 16 = 544
// console.log(problem_10)

// let problem_11 = ++w % cc++ + ++q - --t;
// // 13 % 29 = 13 + 21 - 21 = 13
// // 13 % 30 = 13 + 21 - 21 = 13
// console.log(problem_11)

// let problem_12 = ++l - o++ / ++m + ++w;
// // 19 / 18 = 24 - 1.05 + 13 = 35.94
// console.log(problem_12)

// let problem_13 = ++p * k-- + --j + ++p;
// // 14 * 15 = 210 + 10 + 14 = 234
// console.log(problem_13)

// let problem_14 = ++n / cc++ - ++w % --l;
// // 15 / 29 = 0.517
// // 14 % 22 = 0.517 - 14 = -12.48
// console.log(problem_14)

// let problem_15 = ++k + l-- % --w + ++q;
// // 23 % 11 = 1
// // 16 + 1 + 21 = 38
// console.log(problem_15)

// let problem_16 = ++r * t-- / --o + ++p;
// // 19 * 22 = 418 / 18 = 23.22 + 14 = 37.22
// console.log(problem_16)

// let problem_17 = ++o % l++ + ++q - --j;
// // 20 % 23 = 20 + 21 - 10 = 31
// console.log(problem_17) 

// let problem_18 = ++j - p++ / ++r + ++l;
// // 13 / 19 = 12 - 0. + 24 = 35.31
// console.log(problem_18)

// let problem_19 = ++l * t-- + --k + ++p;
// // 24 * 22 = 528 + 14 + 14 = 556
// console.log(problem_19)

// let problem_20 = ++t % l++ - ++q / --o;
// // 23 % 23 = 0
// // 21 / 18 = 1.666
// // 0 - 1.105 = -1.666
// console.log(problem_20)


// let date1 = new Date(2022, 0, 15);
// let date2 = new Date(2022, 6, 1);
// let result = date2.getTime() - date1.getTime()
// let days = Math.round(result / (1000 * 60 * 60 * 24))
// let weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// let month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// let years = Math.round(result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);
// console.log(date1)

// date1 = new Date(2023, 2, 10);
// date2 = new Date(2023, 9, 20);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = result / (1000 * 60 * 60 * 24 * 365)
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);

// date1 = new Date(2021, 8, 5);
// date2 = new Date(2022, 4, 18);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = Math.round(result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);
// console.log([date1, date2]);

// date1 = new Date(2023, 5, 12);
// date2 = new Date(2023, 11, 25);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = Math.round(result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);
// console.log([date1, date2]);

// date1 = new Date(2022, 3, 8);
// date2 = new Date(2022, 11, 31);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = Math.round(result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);
// console.log([date1, date2]);

// date1 = new Date(2023, 1, 20);
// date2 = new Date(2023, 7, 10);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = Math.round(result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);
// console.log([date1, date2]);

// date1 = new Date(2022, 6, 7);
// date2 = new Date(2023, 2, 14);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = Math.round(result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);
// console.log([date1, date2]);

// date1 = new Date(2022, 11, 1);
// date2 = new Date(2023, 6, 22);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = Math.round(result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);
// console.log([date1, date2]);

// date1 = new Date(2021, 4, 3);
// date2 = new Date(2022, 10, 11);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = Math.round(result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);
// console.log([date1, date2]);

// date1 = new Date(2023, 8, 18);
// date2 = new Date(2023, 11, 5);
// result = date2.getTime() - date1.getTime()
// days = Math.round(result / (1000 * 60 * 60 * 24))
// weeks = Math.round(result / (1000 * 60 * 60 * 24 * 7))
// month = Math.round(result / (1000 * 60 * 60 * 24 * 30))
// years = Math.round(result / (1000 * 60 * 60 * 24 * 365))
// console.log(`days: ${days}, weeks: ${weeks}, month: ${month}, years: ${years}`);
// console.log([date1, date2]);

// // For each pair of dates find difference in weeks, days, months, years


// let char = 'a';

// if (char.length === 1) {
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log(char + " is a vowel.");
//   } else {
//     console.log(char + " is a consonant.");
//   }
// } else {
//   console.log("Please enter a single character.");
// }


// let number = -7;

// if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// } result = // console.log("The number is negative.");



// let num = 22;

// if (num % 2 === 0) {
//   console.log(num + " is an even number.");
// } else {
//   console.log(num + " is an odd number.");
// } // result = console.log(num + " is an even number.");



// let monthNumber = 8;
// let monthName;

// if (monthNumber >= 1 && monthNumber <= 12) {
//   if (monthNumber === 1) {
//     monthName = "January";
//   } else if (monthNumber === 2) {
//     monthName = "February";
//   } // Continue for the rest of the months
//   else {
//     monthName = "Invalid month number";
//   }

//   console.log("The month is " + monthName);
// } else {
//   console.log("Please enter a valid month number (1-12).");
// } // console.log("The month is Invalid month number");


// let purchaseAmount = 120;
// let discount;

// if (purchaseAmount > 100) {
//   discount = 0.1;
// } else {
//   discount = 0.05;
// }

// let finalPrice = purchaseAmount - purchaseAmount * discount; // 108
// console.log("Final price after discount: $" + finalPrice.toFixed(2));


// let yearToCheck = 2100;

// if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0) {
//   console.log(yearToCheck + " is a leap year.");
// } else {
//   console.log(yearToCheck + " is not a leap year.");
// } // else



// let lightColor = "green";

// if (lightColor === "red") {
//   console.log("Stop!");
// } else if (lightColor === "yellow") {
//   console.log("Slow down!");
// } else if (lightColor === "green") {
//   console.log("Go!");
// } else {
//   console.log("Invalid traffic light color");
// } // Go


// let age = 25;
// let ageGroup;

// if (age >= 0 && age <= 12) {
//   ageGroup = "Child";
// } else if (age >= 13 && age <= 19) {
//   ageGroup = "Teenager";
// } else if (age >= 20 && age <= 64) {
//   ageGroup = "Adult";
// } else if (age >= 65) {
//   ageGroup = "Senior";
// } else {
//   ageGroup = "Invalid age";
// } // Adult

// console.log("Age group: " + ageGroup);


// let dayNumber = 4;
// let dayName;

// if (dayNumber >= 1 && dayNumber <= 7) {
//   if (dayNumber === 1) {
//     dayName = "Sunday";
//   } else if (dayNumber === 2) {
//     dayName = "Monday";
//   } // Continue for the rest of the days
//   else {
//     dayName = "Invalid day number";
//   }

//   console.log("The day is " + dayName);
// } else {
//   console.log("Please enter a valid day number (1-7).");
// } // The day is Invalid day number



// let char = 'a';

// if (char.length === 1) {
//   if (char === 'a'  ⠵⠟⠟⠺⠵⠞⠺⠵⠟⠵⠞⠞⠟ char === 'i'  ⠟⠟⠺⠞⠺⠞⠺⠟⠟⠞⠺⠺⠞ char === 'u') {
//     console.log(char + " is a vowel.");
//   } else {
//     console.log(char + " is a consonant.");
//   }
// } else {
//   console.log("Please enter a single character.");
// }

// let number = -7;

// if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }

// let num = 22;

// if (num % 2 === 0) {
//   console.log(num + " is an even number.");
// } else {
//   console.log(num + " is an odd number.");
// }

// let monthNumber = 8;
// let monthName;

// if (monthNumber >= 1 && monthNumber <= 12) {
//   if (monthNumber === 1) {
//     monthName = "January";
//   } else if (monthNumber === 2) {
//     monthName = "February";
//   } // Continue for the rest of the months
//   else {
//     monthName = "Invalid month number";
//   }

//   console.log("The month is " + monthName);
// } else {
//   console.log("Please enter a valid month number (1-12).");
// }

// let purchaseAmount = 120;
// let discount;

// if (purchaseAmount > 100) {
//   discount = 0.1;
// } else {
//   discount = 0.05;
// }

// let finalPrice = purchaseAmount - purchaseAmount * discount;
// console.log("Final price after discount: $" + finalPrice.toFixed(2));

// let yearToCheck = 2100;

// if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0) {
//   console.log(yearToCheck + " is a leap year.");
// } else {
//   console.log(yearToCheck + " is not a leap year.");
// }

// let lightColor = "green";

// if (lightColor === "red") {
//   console.log("Stop!");
// } else if (lightColor === "yellow") {
//   console.log("Slow down!");
// } else if (lightColor === "green") {
//   console.log("Go!");
// } else {
//   console.log("Invalid traffic light color");
// }

// let age = 25;
// let ageGroup;

// if (age >= 0 && age <= 12) {
//   ageGroup = "Child";
// } else if (age >= 13 && age <= 19) {
//   ageGroup = "Teenager";
// } else if (age >= 20 && age <= 64) {
//   ageGroup = "Adult";
// } else if (age >= 65) {
//   ageGroup = "Senior";
// } else {
//   ageGroup = "Invalid age";
// }

// console.log("Age group: " + ageGroup);

// let dayNumber = 4;
// let dayName;

// if (dayNumber >= 1 && dayNumber <= 7) {
//   if (dayNumber === 1) {
//     dayName = "Sunday";
//   } else if (dayNumber === 2) {
//     dayName = "Monday";
//   } // Continue for the rest of the days
//   else {
//     dayName = "Invalid day number";
//   }

//   console.log("The day is " + dayName);
// } else {
//   console.log("Please enter a valid day number (1-7).");
// }

// let password = "P@ssw0rd";
// let hasUppercase = false;
// let hasLowercase = false;
// let hasNumber = false;
// let hasSpecialCharacter = false;

// if (password.length >= 8) {
//   for (let i = 0; i < password.length; i++) {
//     let char = password[i];
//     if (char >= 'a' && char <= 'z') {
//       hasLowercase = true;
//     } else if (char >= 'A' && char <= 'Z') {
//       hasUppercase = true;
//     } else if (char >= '0' && char <= '9') {
//       hasNumber = true;
//     } else {
//       hasSpecialCharacter = true;
//     }
//   }

//   if (hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter) {
//     console.log("Strong password!");
//   } else {
//     console.log("Weak password - include uppercase, lowercase, number, and special character.");
//   }
// } else {
//   console.log("Password must be at least 8 characters long.");
// } // Strong password!


// let date = new Date()
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getTime() / (1000))


// let birth_years = prompt('Enter age: ')
// let date_birth_years = new Date(birth_years)
// let date = new Date()
// let result = date.getTime() - date_birth_years.getTime()
// let result_age = Math.round(result / (1000 * 60 * 60 * 24 * 365))

// if (result_age >= 18){
//     console.log(`You are ${result_age}. You are old enough to drive`)
// }else{
//     console.log(`You are ${result_age}. You will be allowed to drive after ${18 - result_age} years.`)
// }

// let date = new Date()
// let years = date.getFullYear()
// let month = date.getMonth()
// let days = date.getDate()
// console.log(`${years}-${month}-${days}`)
// console.log(`${days}-${month}-${years}`)
// console.log(`${days}/${month}/${years}`)


// let date = new Date()
// let years = date.getFullYear()
// let month = date.getMonth()
// let days = date.getDate()
// let hour = date.getHours()
// let minutes = date.getMinutes()
// hour = hour < 10
//     ? '0' + hour
//     : hour
// minutes = minutes < 10
//     ? '0' + minutes
//     : minutes

// console.log(`${years}-${month}-${days} ${hour}:${minutes}`)

// let date = new Date("2015-7-15")
// let date1 = new Date("2018-4-3")
// let date_result = date.getTime() - date1.getTime()
// console.log(Math.round(date_result / (1000 * 60 * 60 * 24 * 7)))
