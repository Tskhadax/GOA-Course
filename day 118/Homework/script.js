/* ** Level 118: **
** შექმენით Employee მშობელი კლასი, რომელსაც ექნება: **
** --- თვისებები --- **
◽ id: Number პრივატული თვისება
◽  firstName: String
◽  lastName: String
◽  monthSalary: Number პრივატული თვისება
** --- მეთოდები --- **
◽ fullName - გეტერი აბრუნებს '${firstName} ${lastName}', ხოლო სეტერი '${firstName}  ${lastName}' <- ასეთი ფორმატის string_ს ხლეჩს და ინახავს შესაბამის ატრიბუტებში 
◽ yearSalary - გეტერი აბრუნებს 1 წლის ხელფასს. სეტერი არ აქვს
◽ monthSalary - სეტერში გააკონტროლეთ, რომ ახალი ხელფასის ოდენობა იყოს ნულზე მეტი. გეტერით დააბრუნეთ ხელფასი.
◽ id - გეტერი დააბრუნებს აიდის. სეტერი არ ექნება
** შექმენით შვილეული კლასები (მაგ. Manager, Boss და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Employee კლასის თვისებებსა და მეთოდებს. **
** --- შვილეულ კლასს უნდა ჰქონდეს --- **
◽  department:  String თვისება(გამოიყენეთ super)
◽  changeDepartment - სეტერი, რომელიც მიიღებს შემდეგ სიას[newDepartament, newSalary], მოახდენს მონაცემთა ვალიდაციას და თუ ახალი ხელფასი უფრო მომგებიანია, შეცვლის ობიექტის monthSalary და departament თვისებებს. 
◽  მეთოდი info - დააბრუნებს ინფორმაციას ობიექტის შესაახებ
◽  გადაწერეთ/შეცვალეთ მშობელი კლასის yearSalary გეტერი(ვთქვათ მენეჯერს აქვს პრემიები😏) */

class Employee {
    constructor(id, firstname, lastname, monthSalary) {
        this.id = id, 
        this.firstname = firstname, 
        this.lastname = lastname,
        this.monthSalary = monthSalary
    }
}