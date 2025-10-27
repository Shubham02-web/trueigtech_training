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


// const user = {
//     name: 'Jack',
//     age: 23,
//     details() {
//         return `Hey i am ${user.name}`
//     }
// }

// console.log('old name : ', user.name);
// user.name = 'akey';
// console.log('New Name : ', user.name);

// user['age'] = 90;
// console.log("age : ", +user.age);

// console.log('details : ', user.details());


// fetch data

// const fetchData = async(req, res) => {
//     try {
// const response = await fetch('https://designer.mocky.io/', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         // console.log(response)
//         if (!response.ok) {
//             throw new Error('New Error Status Code : ', response.status);
//         }
//         const data = await response.json();
//         console.log(data.body)
//     } catch (error) {
//         console.error("catch block error : ", error.message)
//     }
// }

// fetchData();


// Spread Operator

// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// console.log(arr2);


// Rest Operator

// export default function RestFunc(...number) {
//     return number.reduce((acc, n) => acc + n, 0);
// }
// console.log(RestFunc(5, 8, 6));



// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById('addTaskBtn');
// const taskList = document.getElementById('taskList');

// let tasks = [];

// Load tasks from localStorage on page load
// window.onload = () => {
//     const storedTasks = localStorage.getItem('tasks');
//     if (storedTasks) {
//         tasks = JSON.parse(storedTasks);
//         renderTasks();
//     }
// };

// function renderTasks() {
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.textContent = task;
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.className = 'deleteBtn';
//         deleteBtn.onclick = () => deleteTask(index);
//         li.appendChild(deleteBtn);
//         taskList.appendChild(li);
//     });
// }

// function addTask() {
//     const task = taskInput.value.trim();
//     if (task) {
//         tasks.push(task);
//         taskInput.value = '';
//         saveTasks();
//         renderTasks();
//     }
// }

// function deleteTask(index) {
//     tasks.splice(index, 1);
//     saveTasks();
//     renderTasks();
// }

// function saveTasks() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// addTaskBtn.addEventListener('click', addTask);

// taskInput.addEventListener('keypress', event => {
//     if (event.key === 'Enter') {
//         addTask();
//     }
// });



import math from './math.js';

console.log("addition : ", math.add(5, 6));
console.log("substract : ", math.substract(8, 5));