// let A = true
// let B = false
// let C = false

// // а) А или В;
// console.log(A || B)// true
// // A || B = true or false = true

// // b) А и В;
// console.log(A && B)// false
// // A && B = true and false = false

// // c) В или С.
// console.log(B || C)// false
// // B || C = false or false = false



// let x = false
// let y = true
// let z = false

// // а) X или Z; 
// console.log(x || z)// false
// // x || z = false or false = false

// // b) X и Y;
// console.log(x && y)// false
// // x && y = false and true = false

// // c) X и Z.
// console.log(x && z)// false
// // x && z = false and false = false



// let A = true
// let B = false
// let C = false

// // а) не А и В; 
// console.log(!(A) && B)// false
// // !(A) && B = !true and false = false and false = false

// // b) А или не В;
// console.log(A && !(B))// true
// // A && !(B) = true and !false = true and true = true

// // c) А и В или С.
// console.log(A && B || C)// false
// // A && B || C = (true and false) or false = false



// let x = false
// let y = true
// let z = false

// // а) не X и Y;
// console.log(!(x) && y)// true
// // !(x) && y = !false and true = true and true = true

// // б) X или не Y;
// console.log(x || !(y))// false
// // x || !(y) = false or !true = false or false = false

// // в) X или Y и Z.
// console.log(x || y && z) // false
// // x || (y && z) = false or (true and false) = false



// let A = true
// let B = false
// let C = false

// // а) А или В и не С;
// console.log(A || B && !C)// true
// // A || B && !(C) = true or (false and !false) = true or (false and true) = true

// // б) не А и не В;
// console.log(!A && !B)// false
// // !(A) && !(B) = !true and !false = false and true = false

// // в) не (А и С) или В;
// console.log(!(A && C) || B)// false
// // !(A && C):
// // A && C = true and false = false
// // !(false) = true
// // !(A && C) || B:
// // true or false = Истина

// // г) А и не В или С;
// console.log(A && !B || C)// true
// // A && !(B) || C = (true and !false) or false = (true and true) or false 

// // д) А и (не В или С);
// console.log(A && (!B || C))//true
// // !B:
// // !B = !false = true
// // (!B || C):
// // true or false = true
// // A && (!B || C):
// // true and true = true

// // е) А или (не (В и С));
// console.log(A || (!(B && C)))// true
// // B && C:
// // false and false = false
// // !(B && C):
// // !false = true
// // A || (!(B && C)):
// // true or true = true



// let x = false
// let y = true
// let z = false

// // а) X или Y и не Z;
// console.log(x || y && !z)// true
// // y && !z:
// // true and !false = true and true = true
// // x || (y && !z):
// // false or true = true

// // б) не X и не Y;
// console.log(!x && !y)// false
// // !x: !false = true
// // !y: !true = false
// // !x && !y: true and false = false

// // в) не (X и Z) или Y;
// console.log(!(x && z) || y)// true
// // x && z : false and false = false
// // !(x && z): !false = true
// // !(x && z) || y: true or true = true

// //г) X и не Y или Z;
// console.log(x && !y || z)// false
// // x && !y: false and !true = false and false = false
// // x && !y || z: false or false = false

// // д) X и (не Y или Z);
// console.log(x && (!y || z))// false
// // !y: !true = false
// // (!y || z): false or false = false
// // x && (!y || z): false and false = false

// // е) X или (не (Y или Z)).
// console.log(x || (!(y || z)))// false
// // y || z: true || false = true
// // !(y || z): !true = false
// // x || (!(y || z)): false || false = false



// let A = true;
// let B = false;
// let C = false;

// // а) А или не (А и В) или С;
// console.log(A || !(A && B) || C); // false

// // б) не А или А и (В или С);
// console.log(!A || A && (B || C)); // true

// // в) (А или В и не С) и С.
// console.log((A || B && !C) && C); // false



// let X = false;
// let Y = true;
// let Z = false;

// // а) X и не (Z или Y) или не Z;
// console.log(X && !(Z || Y) || !Z); // true

// // б) не X или X и (Y или Z);
// console.log(!X || (X && (Y || Z))); // true

// // в) (X или Y и не Z) и Z.
// console.log((X || Y && !Z) && Z); // false



// let X = true;
// let Y = false;
// let Z = false;

// // а) не X или не Y или не Z;
// console.log(!X || !Y || !Z); // true

// // б) (не X или не Y) и (X или Y);
// console.log((!X || !Y) && (X || Y)); // true

// // в) X и Y или X и Z или не Z.
// console.log(X && Y || X && Z || !Z); // true



// let A = false;
// let B = false;
// let C = true;

// // а) (не А или не В) и не С;
// console.log((!A || !B) && !C); // true

// // б) (не А или не В) и (А или В);
// console.log((!A || !B) && (A || B)); // false

// // в) А и В или А и С или не С.
// console.log(A && B || A && C || !C); // false
