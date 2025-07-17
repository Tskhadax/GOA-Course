//     1) შექმენით კლასი პერსუსულ ზღვის გოჭზე და დაამატეთ მისი ფერის ზომის და წლოვანების(რომელ წელსაა დაბადებული, რომელ თვეში და რომელ რიცხვში) ამსახველი მნიშვნელობები, შემდეგ შექმენით მეთოდი რომელიც გამოითვლის ამ პერსუსული ზღვისგოჭის წლოვანებას და დააბრუნებს შედეგს თუ რამდენი წლისაა რამდენი თვისაა და რამდენი დღისაა

class pig{
    constructor(color, size, year, month, day){
        this.color = color
        this.size = size
        this.year = year
        this.month = month
        this.day = day
    }
    age(){
        let nowData = new Date()
        let nowYear = nowData.getFullYear()
        let nowMonth = nowData.getMonth()
        let nowDay = nowData.getDate()

        let day = nowDay - this.day
        if (nowDay < this.day){
            day = this.day - nowDay
        }
        let month = nowMonth - this.month
        if (nowMonth < this.month){
            month = this.month - nowMonth
        }

        let result = `${nowYear - this.year} years old ${month + 1} month old and ${day}`
        console.log(result)
    }
}
const pigInfo = new pig('blue', 1.62, 2009, 2, 10)
pigInfo.age()