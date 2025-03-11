// 4)შექმენი ობიექტი სახელად student რომელსაც ექნება fullName , scores(scores-უნდა იყოს სია რადგან შეინახოთ რამდენიმე მნიშვნელობა) , ასევე ექნება ორი ფუნქცია 1)averageScore()- რომელიც გამოითცლის საშუალო ქულას , 2)checkStudent() - რომელიც გამოითლის მოსწავლის დონეს ქულების მიხედვით , თუ საშუალო ქულა იქნება 90-ზე მეტი გამოსახეთ კონსოლში შემდეგი ტექსტი ("საუკეთესო სტუდენტი")  , თუ საშუალო ქულა იქნება 90 ზე დაბალი და 60 ზე მაღალი გამოსახეთ "კარგი მოსწავლე" , ხოლო თუ საშუალო ქულა იქნება 60 ზე დაბალი გამოსახეთ "ნორმალური მოსწალე"


const student = {
    fullName: "Giorgi Tskhadadze",
    scores: [85, 90, 78, 92, 88],

    averageScore() {
        let sum = this.scores.reduce((acc, score) => acc + score, 0);
        return sum / this.scores.length;
    },

    checkStudent() {
        let avg = this.averageScore();
        if (avg > 90) {
            console.log("საუკეთესო სტუდენტი");
        } else if (avg > 60) {
            console.log("კარგი მოსწავლე");
        } else {
            console.log("ნორმალური მოსწავლე");
        }
    }
};