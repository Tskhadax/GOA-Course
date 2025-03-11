// codewars
function moveZeros(arr) {
    let new_list = []
    for (let i of arr) {
      if (i !== 0) {
        new_list.push(i)
      }
    }
    for (let x of arr) {
      if (x === 0) {
        new_list.push(x)
      }
    }
    return new_list
  }