// let villa = document.getElementById("villa1")

// let mountain = document.getElementById("mountain1")

// let sea = document.getElementById("sea1")

// villa.addEventListener("mouseover",function(){
//     img.src="img2.jpg"
// })

// mountain.addEventListener("click",function(){
//     img.src="img3.jpg"
// })

let villa = document.querySelector("#villa1");
let mountain = document.querySelector("#mountain1");
let sea = document.querySelector("#sea1");


villa.addEventListener("mouseover", function(){
    img.src = "./images/sunset.jpg"
});

mountain.addEventListener("click", function(){
    img.src = "./images/villa.jpg"
});
console.log(villa)