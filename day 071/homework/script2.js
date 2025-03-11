// for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები

let myArr = [1,5,7,34,65,124,8,43,2]

let min = myArr[0]
let max = myArr[0]

for(let i = 1;i<myArr.length;i++){
    if(myArr[i]<min){
        min = myArr[i]
    }
    else if(myArr[i]>max){
        max = myArr[i]
    }
}
console.log(min)
console.log(max)