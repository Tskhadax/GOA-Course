let myArr=[5,10,15,20,15,2,2,1]
sum = 0
for(let i of myArr){
    if(i%2==0){
        sum+=i**2
    }
}
console.log(sum)