// გამოიყენე დესტრუქცია ისე, რომ პირველი ელემენტი ცალკე მიიღო, ხოლო დანარჩენი rest მასივში

const numbers = [10, 20, 30, 40, 50];

let [first, second] = [numbers[0], numbers.slice(1)]
console.log(first)
console.log(second)