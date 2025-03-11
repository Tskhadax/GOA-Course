// codewars
function findSmallestInt(arr) {
    let v = arr[0];
    for (let i of arr) {
        if (i < v) {
            v = i;
        }
    }
    return v;
}