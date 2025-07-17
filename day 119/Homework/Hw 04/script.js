// ✅ დავალება 4: map-ის გასუფთავება და შემოწმება

// 🧠 თემა: Map
// 📌 დავალება:
// შექმენი ახალი Map, დაამატე მინიმუმ 2 key-value წყვილი, შემდეგ წაშალე ერთი მათგანი delete მეთოდით, და ბოლოს გამოიყენე .has() რომ შეამოწმო თუ ის წაშლილი key არსებობს თუ არა.

let myArray = new Map([ ['Name', 'Ana'], ['Surname', 'Puturidze'] ])
myArray.delete('Name')

console.log(myArray.has('Name'))
