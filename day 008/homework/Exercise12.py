#შეამოწმე, არის თუ არა მომხმარებლის შემოტანილი ორი რიცხვი ერთმანეთზე მეტი და 10-ის ჯერადი.

number1 = int(input("Enter number1: "))
number2 = int(input("Enter number2: "))
if number1 > number2 and (number1 % 10 == 0) and (number2 % 10 == 0):
    print("yes 1 number is greater than 2 and both numbers are multiples of 10")
else:
    print("no 1 number is not greater than 2 or both numbers are not multiples of 10")