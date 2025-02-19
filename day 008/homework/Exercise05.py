#შეამოწმე მომხმარებლის შემოტანილი რიცხვი თუ არის 5-ის ან 10-ის ჯერადი.

number = int(input("Enter number: "))

if (number % 5) == 0  or (number % 10) == 0:
    print("yes")
else:
    print("no")