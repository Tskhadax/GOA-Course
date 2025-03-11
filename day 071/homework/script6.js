// 6)შექმენით სია შეიყვანეთ user-ის სახელი და გვარი თუ user-ების სახელი და გვრი იწყება პატარა ასოთი slice-მეთოდის გამოყენებით ამოშალეთ ასეთი სახელები და გვარები სიიდაn

let fullName = [ 'giorgi tskhadadze', 'Nikoloz Abesadze']
let result = []
for (let element of fullName){
    let person = element.split(' ')
    if (person[0][0] === person[0][0].toUpperCase() && person[1][0] === person[1][0].toUpperCase){
        result.push(person)
    }
    console.log(person)
}