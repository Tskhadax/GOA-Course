var Num = Number(prompt("Enter Number:"))

var i = 1
while(i < Num){
    if(i % 3==0 && i % 5 ==0 ){
        console.log(i)
    }
    i=i+1
}