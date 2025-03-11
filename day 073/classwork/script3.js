// codewars
function positiveSum(arr) {
    let sum = 0;
    for (let i of arr) {
        if (i > 0) {
            sum += i;
        }
    }
    return sum;
}