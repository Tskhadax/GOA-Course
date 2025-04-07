let text = document.getElementById("text")
let again = document.getElementById("again")
let submit = document.getElementById("submit")

submit.addEventListener("click",function(e){
    e.preventDefault()
    if(text.value != again.value){
        alert("The values should be equal and not blank")
    }else if(text.value == again.value){
        alert("The operation was successful")
    }
})