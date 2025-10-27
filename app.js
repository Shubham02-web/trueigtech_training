// function calculator(num1, num2) {
//     return ("add : " + (num1 + num2) + " " + "multiply : " + (num1 * num2) + " " + "substract : " + (num1 - num2) + " " + "divide : " + (num1 / num2).toFixed(2));
// }



// seprate function for every operation

// function add(n1, n2) {
//     return n1 + n2;
// }

// function multiply(n1, n2) {
//     return n1 * n2;
// }

// function substract(n1, n2) {
//     return Number(n1) - Number(n2);
// }

// function divide(n1, n2) {
//     return (n1 / n2).toFixed(2);
// }
// console.log(calculator(5, 3));

// console.log(add(2, 5));
// console.log(multiply(2, 5));
// console.log(substract(8, 5));
// console.log(divide(8, 5));





// Object


const user = {
    name: 'Jack',
    age: 23,
    details() {
        return `Hey i am ${user.name}`
    }
}

console.log('old name : ', user.name);
user.name = 'akey';
console.log('New Name : ', user.name);

user['age'] = 90;
console.log("age : ", +user.age);

console.log('details : ', user.details());