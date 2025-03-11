//  შექმენით სია სადაც იქნება user-ების სახელი და გვარი და ახალ სიაში დაამატეთ ამ იუსერების  ინიციალები სახელის და გვარის პირველი ასოები, მაგალითად: გიორგი ბიბილაშვილი -> გ.ბ 


let arr = [["giorgi","giorgobiani"],["beqa","gviniashvili"],["lasha","sirbiladze"]]

let empty = []

for(let i of arr){
    empty.push(arr[i][0])
}
console.log(empty)