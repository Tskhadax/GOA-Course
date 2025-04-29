// 3) შექმენით სია სადაც შეინახავთ რანდომ სახელებეს , map-ის გამოყენებით მიწვდით თითოეულ ელემენტს სიაში და დააბუნეთ ახალი განახლებული სია სადაც იქნება ყველა სახელი დიდი ასოებით დაწეილი

const userName = ['Ana', 'Lui', 'koko', 'jumbera']

const sortedNames = e => `${e.toUpperCase()}`

const result = userName.map(sortedNames)
console.log(result)