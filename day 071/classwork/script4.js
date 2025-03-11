// შექმენით სია სადაც იქნება სახელები,შემდეგ თუ ამ სიტყვების სიგრძე ნაკლებია 5 ზე გმოიტანეთ კონსოლ

let myNames= ["giorgi","gio","saba","aleqsandre","ani"]

let st = 0
for(let element of myNames){
    if(element.length < 5){
        st+=1
    }
}
console.log(st)