// console.log("Hello World");
// console.log("Apna College");
// let a=10;
// let b=5;
// console.log("Sum is : ", a+b);
// let output = "The total price is : "+(a+b)+ " Rupees";
// let output = `you pay ${a+b} rupees`;
// console.log(output);

// let str="Apple";
// if ((str[0]==="a" || str[0]==="A") && str.length > 3) {
//     console.log(" Good String ")
// }

// alert("Something is wrong!!!");

// console.log("this is log");
// console.error("Error msg");

// console.warn("This is an warning");

// let firstName = prompt("Enter your name: ");
// console.log(firstName);



// JS Part 2 Paractice Quations 
// let a=20;
// if (a%10==0) {
//     console.log("The Number is Good");
// }
// else {
//     console.log("The Number is Bad");
// }

// let name= prompt("Enter Name : ");
// let age = prompt("Enter age : ");
// console.log(`${name} is ${age} year old `);

// let value = 5;
// switch(value) {
//     case 1: 
//         console.log("January , February, March");
//         break;
//     case 2:
//         console.log("April, May , June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4 :
//         console.log("October, November, December");
//         break;
//     default :
//         console.log("Wrong Quarter!!");
// }

// let a=32;
// let b=47852;

// if(a%10 == b%10) {
//     console.log("Same Last Digit !!");
// }
// else {
//     console.log("Not a Same Digit !!");
// }

// let a=10;
// let b=20;
// let c=30;
// if (a>b && a>c) {
//     console,log("A is Greater !!")
// }
// else if (b>1 && b>c) {
//     console.log("B is Greater !!");
// }
// else {
//     console.log("C is Greater !!");
// }

// JS part 3
// let pass = prompt("set your password");
// console.log(pass.trim());

// let name="   Apna College   ";
// let newName = name.toUpperCase().trim();
// console.log(newName);

// let msg = "hello";
// console.log(msg.slice(0,3));

// let str = "ILoveCoding";
// console.log(str.replace("Love", "do"));
// console.log(str.replace("o", "x"));

// Practice Quation
// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// Array 
// let student = ["Shailesh" , "Rajas" , "Mihir", "Sujal", "Atharv"];

// let months = ["January", "July" , "March", "August"];
// months.shift();
// months.shift();
// months.unshift("June");
// months.unshift("July");

// let num = [[2,4] , [3,6] , [4,8]];

// let game = [["x",null,"o"], [null, "x",null], ["o",null,"x"]];

// LOOPS 1) For LOOP 

// for (let i=1; i<=50; i++) {
//     if (i%5==0) {
//         console.log(i);
//     }
// }

// let n = prompt("Enter your Number for tabel : ");
// n = parseInt(n);
// for (let i=n; i<=n*10; i+=n) {
//     console.log(i);
// }

// Movie Gusser 
// const favMovie="avatar";
// let guess = prompt("Guess My Favrate Movie : ");
// while ((guess != favMovie) && (guess != "quit")) {
//     console.log("Wrong Movie");
//     guess = prompt("Guess the Favrate Movir : ");
// }
// if (guess == favMovie) {
//     console.log("Right Answer, My Favrate MOvie is : "+ favMovie);
// }
// else {
//     console.log("You Quit!!");
// }

// To Do App 

// let todo=[];
// let req =  prompt("Please Enter your request : ");

// while(true) {
//     if(req == "quit") {
//         console.log("quitting app");
//         break;
//     }
//     if (req == "list") {
//         consol.log("-----------------------");
//         for (let i=0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         consol.log("-----------------------");
//     }
//     else if (req == "add"){
//         let task = prompt("please enter the task you wanr to add :  ");
//         todo.push(task);
//         console.log("Task Added");
//     }
//     else if(req=="delete") {
//         let ind = prompt("Please Enter the task Index you want to delete : ");
//         todo.slice(ind,1);
//         console.log("Task Deleted");
//     }
//     else {
//         console.log("Wrong Requst!!");
//     }
//     req = prompt("Please Enter your request : ");
// }

// let student = {
//     name:"shailesh",
//     age:19,
//     mark:8.86,
//     city:"pune"
// };

// const item = {
//     1:"Product",
//     null : "none",
//     price:100.99, 
//     discount:50,
//     color : ["red","pink"],

// }

// let post = {
//     username:"@Shailesh_Bothe",
//     content:"Jay Maharastra",
//     like:265,
//     reposts:23,
//     tags:["#JAy", "#Maharastra"]
// };

// let classinfo = {
//     shailesh : {
//         grade:"A",
//         city: "Delhi"
//     },
//     sujal : {
//         grede:"A+",
//         city:"Nashik"
//     },
//     mihir: {
//         grede:"A++",
//         city:"Pune"
//     }
// };

// const classInfo = [
//     {
//         name : "shailesh",
//         city:"Shirdi"
//     },
//     {
//         name:"mihir",
//         city:"Nashik"
//     },
//     {
//         name:"Chaitanya",
//         city:"Daunde"
//     }
// ];

// let max = prompt("Enter the Max Number");
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("Guess the Number");
// while(true) {
//     if(guess == "quit") {
//         console.log("You Quit !!");
//         break;
//     }
//     else if(guess == random) {
//         console.log("Your are Right !! Congratulation The Ramdom Number was : ", random);
//         break;
//     }
//     else if (guess < random){
//         guess = prompt ("Your number is small , please try again");
//     }
//     else {
//         guess = prompt("Your Number is large, please try again");
//     }
// }

// function hell() {
// console.log("Hello!!");
// }
// function printName() {
//     console.log("Shailesh Bothe");
// }

// hell();
// printName();

// function rollDice() {
//     let rand = Math.floor(Math.random() *6) + 1;
//     console.log(rand);
// }
// rollDice();
// rollDice();
// rollDice();

// function myName(name) {
//     console.log("My Name Is :", name);
// }
// myName("SHAILESH");

// function sumof(n) {
//     let sum=0;
//     for(let i=1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumof(5));

// let sum = function(a,b) {
//     return a+b;
// }

//  try {
//     console.log(a);
//  } catch {
//     console.log("Variable does not exist");
//  }

// const func = (a,b) => {
//     console.log(a+b);
// }

// console.log("HI Theire");

// setTimeout(() => {
//     console.log("Welcome to");
// }, 4000);

// console.log("Apna college");

// const student = {
//     name:"Shailesh",
//     marks: 95,
//     prop : this
// };

// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

// const arrayAverage = (arr) => {
//     let total = 0;
//     for(let number of arr) {
//         total += number;
//     }
//     return total / arr.length;
// };
// let arr = [1,2,3,4,5,6];
// console.log(arrayAverage(arr));

// let isEven = (num) => {
//     if (num%2==0) {
//         console.log("Even Number");
//     }
//     else {
//         console.log("Odd NUmbr");
//     }
// };
// console.log(isEven(44));

// let arr = [1,3,4,5,6,7];
// let print = function(el) {
//     console.log(el);
// };
// arr.forEach(print);
// arr.forEach( function(el) {
//     console.log(el);
// });

// let double = arr.map((el) => {
//     return el*2;
// } );

// let num = [1,2,3,4,5,6,7,8,9,10,11,23,34,56];
// let ans = num.filter((el) => {
//     return el%2==0;
// });  

// let arr = [1,2,3,4];
// let final = arr.reduce( (res,el) => res+el);
// console.log(final);

// let arr = [1,2,3,4,5,6,7,8,9,12,11,24,34,56];
// let max = arr.reduce ( (max, el) => {
//     if (max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(max);

// let num = [10,20,30,40,50];
// let ans = num.every( (el) => el % 10 == 0);
// console.log(ans);

// let ans = num.reduce( (min,el) => {
//     if (min > el) {
//         return el;
//     } else {
//         return min;
//     }
// })
// console.log(ans);

let data = {
    name : "shailesh",
    age : 19
};
let copyData = {...data, id:123};

