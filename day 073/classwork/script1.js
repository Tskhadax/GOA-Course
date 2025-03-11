// codewars
function createArray(number) {
    let newArray = [];
    
    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    }
    
    return newArray;
}

console.log(createArray(5));