// codewars
function findOdd(A) {
    for (let num of A) {
        if (A.filter(x => x === num).length % 2 !== 0) {
            return num;
        }
    }
}