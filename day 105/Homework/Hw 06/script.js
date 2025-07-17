// 6) გამოიყენე დესტრუქცია ისე, რომ ცვლადებში მიიღო math და physics ქულები

const student = {
  name: "Luka",
  marks: {
    math: 90,
    physics: 85
  }
};

let {math, physics} = student.marks
console.log(`Math Score Is ${math} And Physics Score is ${physics}`)