let button = document.querySelector("button")

document.addEventListener("click", function(e){
    e.target.style.color = "red"
    console.log(e.target.innerText)
})

button.addEventListener("click",function(e){
    e.target.style.backgroundColor = "orange"
    e.target.style.border = "none"
})