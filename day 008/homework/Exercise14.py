#მომხმარებლის შემოტანილი რიცხვი შეამოწმე, არის თუ არა  20-ის ჯერადი და დადებითი.

number = int(input("Enter number: "))

if (number % 20 == 0) or number > 0:
    print("number is multiple of 20 or that number is positive")
else :
    print("number is not multiple of 20 or that number is negative")