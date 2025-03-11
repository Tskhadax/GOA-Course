// codewars
function solution(number){
    let n5 = Math.floor((number - 1) / 5);
    let n3 = Math.floor((number - 1) / 3);
    let n15 = Math.floor((number - 1) / 15);

    let sum_5 = ((n5 * (n5 + 1)) / 2) * 5;
    let sum_3 = ((n3 * (n3 + 1)) / 2) * 3;
    let sum_15 = ((n15 * (n15 + 1)) / 2) * 15;

    return sum_5 + sum_3 - sum_15;
}