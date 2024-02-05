// function sum(num1, num2){
//     return (num1 + num2) * 3
// }
// console.log(sum(5,7))

// function info(surname, name){
//     return `Hello, ${surname} ${name}`
// }
// console.log(info('Maratov', 'Ersultan'))

// function sum_arr(arr){
//     let sum_even = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             sum_even += arr[i]
//         }
//     }
//     return sum_even
// }
// let nums = []
// for(let i = 0; i <= 10; i++){
//     nums.push(i)
// }
// console.log(sum_arr(nums))jj

// function start_H(arr){
//     let arr1 = []
//     for(let i of arr){
//         if(i[0] === 'H'){
//             arr1.push(i)
//         }
//     }
//     return arr1
// }
// let sdd = ['Hello', 'World', 'How', 'are', 'you', 'doing', 'today']
// console.log(start_H(sdd))

// function srray(arr){
//     for(let i in arr){
//         if(arr[i] === true){
//             arr[i] = 1
//         }else{
//             arr[i] = 0
//         }
//     }
//     return arr
// }
// let arrr = [true, false, true, false, true]
// console.log(srray(arrr))

// function info(name, contry = 'Kazakhstan'){
//     return `Hello! I’m ${name} and I live in ${contry}.`
// }
// console.log(info('Ersultan'))

// function arr_str(...args) {
//     let result_str = args.join(' ');
    
//     return result_str;
// }

// console.log(arr_str('Hello', 'World', 'How', 'are', 'you', 'doing', 'today'));

// function sum(...nums){
//     if(nums.length == 0){
//         return -1
//     }
//     let o = 0
//     for(let i = 0; i < nums.length; i++){
//         o += nums[i]
//     }
//     return o
// }
// console.log(sum())

// function go(...str){
//     let nem_arr = []
//     for(let i in str){
//         if(typeof str[i] === 'string'){
//             nem_arr.push(str[i].charAt(0).toLocaleUpperCase() + str[i].slice(1))
//         }
//     }
//     return nem_arr
// }
// console.log(go('ersultan', 'maratov'))

