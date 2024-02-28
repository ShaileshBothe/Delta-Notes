// let btns = document.querySelectorAll("button");
// console.dir(btn);

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button");
//     };
// }

// btn.onclick = function() {
//     console.log("Button Was Clicked");
// }

// function sayHello() {
//     alert("Hello");
// } 

// btn.addEventListener("click", function() {
//     console.log("")
// })

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("Color Updated");
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.background = "red";
// })

// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("Button Clicked");
// })

// btn.addEventListener("dblclick", function(event) {
//     console.log(event);
//     console.log("Button Clicked");
// })

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function() {
//     console.log("Key Was Pressed");
// })
// inp.addEventListener("keyup",function() {
//     console.log("Key Was release!!");
// })
// inp.addEventListener("keydown", function(event) {
//     console.log("Key = ",event.key);
//     console.log("Code = ", event.code);
// })

// let input = document.querySelector("input");
// let h2 = documnent.querySelector("h2");

// input.addEventListener("input",function(){
//     console.log(input.value);
//     h2.innerText = input.value; 
// });

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function() {
//     console.log("Div was Clicked");
// });

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis) {
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    
    ul.appendChild(item);
    item.appendChild(delBtn);
    input.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
});
