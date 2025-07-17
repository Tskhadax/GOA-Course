// ✅ დავალება 1: შექმენი შენი ცხოველების კოლექცია Map-ით

// 🧠 თემა: Map
// 📌 დავალება:
// შექმენი ცხოველების Map, სადაც key არის ცხოველის სახელი, და value არის მისი ხმა. დაამატე მინიმუმ 3 ახალი ცხოველი. შემდეგ, for-of ლუპით გამოიტანე ყველა ცხოველის ხმა კონსოლში.

// Task 01
let animalMap = new Map([ ["Parrot", 'wrip wrip!'], ['Dog', 'wof wof!'], ['Cat', 'Miau!']])

// Task 02
animalMap.set('Pig', 'Wof Wof')
animalMap.set('Droxa', 'Moo')
animalMap.set('Monkey', 'gizobs')

// Task 03
for (let item of animalMap.values()) {
    console.log(item)
}