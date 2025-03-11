// CodeWars
function elimination(arr){
    let seen = new Set();
    for (let num of arr) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return null;
}