// let smallImages = document.getElementsByClassName("oldImg");
// for (let i=0; i<smallImages.length; i++) {
//     smallImages[i].src = "spiderman_img.png";
//     console.log(`Value of index ${i} is changed`);
// }

// documnet.querySelector(".className:nth-of-type(2n+1)");

let links = document.querySelectorAll(".box a");
// for (let i = 0; i<links.length; i++) {
//     links[i].style.color = "orange";
// } 
for (link of links) {
    link.style.color = "purple";
}