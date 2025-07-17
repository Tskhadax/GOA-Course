// გამოიძახე ეს ფუნქცია ობიექტით და გამოიყენე დესტრუქცია პარამეტრებში


// varianti 01
const printUser = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};

console.log(printUser({name:'Ana', age: 16}))


// varianti 02
let user = {
    name : 'jumbera', 
    age:  25
}
const printUser2 = ({name, age}) => {
  console.log(`${name} is ${age} years old`);
};

console.log(printUser2(user))
