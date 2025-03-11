let userArr = [1, 10, 2, 3, 10, 30, 3248, 15, 16, 9]

function sumElement(myArr){
    let sum = 0
    for (let element of myArr){
        sum += element
    } 
    return sum
}

console.log(sumElement(userArr))