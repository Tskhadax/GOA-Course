#  1) შექმენით კალკულატორი, მომხმარებელს შეეკითხეთ ორი რიცხვი, შემდეგ შეეკითხეთ რა მოქმედების 
# შესრულება სურს ამ ორ რიცხვზე და მისი პასუხიდან გამომდინარე შეასრულეთ მოქმედება და დაბეჭდეთ 
# მაგალითად თუ მომხმარებელი შემოიტანს რიცხვებს 5 და 7 , და შემოიტანს მოქმედებას მაგალითად დამატებას 
# თქვენ უნდა დაუბეჭდოთ 5 + 7 = 12

operator = input("Enter operator ( + , - , / , * ): ")

num1 = int(input("Enter the 1st number: "))
num2 = int(input("Enter the 2nd number: "))

if operator == "+":
    result = num1 + num2
    print(str(num1) + " + " + str(num2) + " = " + str(int(result)))
elif operator == "-":
    result = num1 - num2
    print(str(num1) + " - " + str(num2) + " = " + str(int(result)))
elif operator == "*":
    result = num1 * num2
    print(str(num1) + " * " + str(num2) + " = " + str(int(result)))
elif operator == "/":
    result = num1 / num2
    print(str(num1) + " / " + str(num2) + " = " + str(int(result)))
else:
    print(" Enter correct opperator")