// მოახდინეთ ამ ობიექტის სრული დესტრუქცია და მიღეეთ ცვლადები პირველი აითემის ლეველები ცალცალკე, მეორე აითემის ლეველები ცალცალკე, მეორე აითემში თითოეული სტუდენტის სახელი და გვარი და ასევე ამ სტუდენტის თითოეული ქულა

const obj = {
  arr: [
    // item1
    {
      level: [10, 50, 100],
    },

    // item2
    {
      level: [20, 40, 60],
      students: [
        {
          name: "jemala",
          surname: "barkalaia",
          score: [8, 8, 10],
        },
        {
          name: "jumbera",
          surname: "lamazi",
          score: [10, 7, 9],
        },
      ],
    },

  ],
};
const {
    arr: [{ 
    level: [score1, score2, score3] }, 
    {level: [score1_1, score1_2, score1_3], 
    students: [ { 
        name: student1_name, 
        surname: student1_surname, 
        score: [score2_1, score2_2, score2_3] 
    }, 
    { name: student2_name, 
        surname: student2_surname, 
        score: [score3_3, score3_2, score3_1] } ] } ] } = obj

console.log({arr: [{ 
    level: [score1, score2, score3] }, 
    {level: [score1_1, score1_2, score1_3], 
    students: [ { 
        name: student1_name, 
        surname: student1_surname, 
        score: [score2_1, score2_2, score2_3] 
    }, 
    { name: student2_name, 
        surname: student2_surname, 
        score: [score3_3, score3_2, score3_1] } ] } ] })