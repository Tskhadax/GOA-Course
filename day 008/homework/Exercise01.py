#მომხმარებელს შემოტანინეთ რიცხვი და შეამოწმეთ არის თუ არა შემოტანილი რიცხვი ლუწი

number = int(input("Enter number: "))

if(number % 2) == 0:
    print("{0} is even number".format(number))
else:
    print("{0} is odd number".format(number))