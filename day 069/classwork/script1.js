var userNumber = Number(prompt("Enter Number:"))
var userChoice = prompt("Enter choice:")

var i = 1
while(i<userNumber){
    if(i%2==0 && userChoice =="luwi"){
        console.log(i)
    }else if(i%2==1 && userChoice =="kenti"){
        console.log(i)
    }
    else if(userChoice == "kvadrati"){
        console.log(i**2)
    }
    else if(i%3==0 && userChoice =="samisjeradi"){
        console.log(i)
    }
    else{
        break
    }
i++
}