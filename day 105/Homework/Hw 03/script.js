// გამოიყენე დესტრუქცია და მიანიჭე default მნიშვნელობა "Unknown" ცვლადს country, თუ ის არ არსებობს

const person = {
  name: "Nino",
  age: 28
};

let {name, age, country = 'Unknown'} = person
console.log(name)
console.log(age)
console.log(country)

