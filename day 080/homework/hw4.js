let email = document.getElementById("email")
let password = document.getElementById("password")
let again = document.getElementById("again")
let submit = document.getElementById("submit")

submit.addEventListener("click",function(e){
    e.preventDefault()  
    console.log(email.value)
    if(email.value == ""){
        alert("fill the email")
    }else if(password.value == ""){
        alert("enter password")
    }else if(password.value != again.value){
        alert("passwords dont match")
    }else{
        alert("successful")
        email.value = ""
        password.value = ""
        again.value = ""
        
        
    }
   

    
    
})
