// function hello() {
//     console.log("Hello");
// }

// function demo() {
//     hello();
// }


// demo();

// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) {
//             nextColorChange();
//         }
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange",1000, () => {
//         changeColor("green", 1000);
//     });
// });

// function savetoDb(data, success , failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }  
// }
// savetoDb("Shailesh Bothe", ()=> {
//     console.log("Success : Your data was save");
//     savetoDb("Hello World", () => {
//         console.log("Success 2 : data 2 was Save");
//         savetoDb("shradha", () => {
//             console.log("Data Save");
//         }, () => {
//             console.log("Not Save");
//         })
//     }, () => {
//         console.log("Failure : weak connection, data not saved");
//     })
// }, 
// () => {
//     console.log("Failure : Weak connection, data not saved");
// });

// function savetoDb(data) {
//     return new Promise((success, failure) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             success();
//         } else {
//             failure();
//         }
//     });
// }
// let request = savetoDb("Shailesh Bothe");
// request.then( () => {
//     console.log("Promise was fulfiled");
// })
// .catch( () => {
//     console.log("Promise was rejected");
// })

// or

// savetoDb("Shailesh Bothe")
//     .then( () => {
//         console.log("Promise was fulfiled");
//     })
//     .catch( () => {
//         console.log("Promise was rejected");
//     })

// async function great() {
//     return "hello";
// }
// let hello = async() => {}; 

// function getNum() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         },1000);
//     })
// }
// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }

// let jsonRes = '{"fact":"The average cat food meal is the equivalent to about five mice.","length":63}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name : "Shailesh",
//     ahe : 20,
//     mark : 9.50,
// }

// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then ( (response)=> {
//     console.log(response);
//     console.log(response.json());
// })
// .then( (data) => {
//     console.log(data);
// })
// .catch( (err) => {
//     console.log(err);
// })

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         console.log("Error - ",e);
//         return "NO FACT FOUND";
//     }
// }

// let url = "https://icanhazdadjoke.com/"

// async function getJokes() {
//     try {
//         const config = {Headers : {Accept : "application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res,data);
//     } catch (e) {
//         console.log("ERROR - ". e);
//     }
// } 

