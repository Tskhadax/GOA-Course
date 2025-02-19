#1 ) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი დაბეჭდეთ ეს რიცხვი არის თუ არა სამის ჯერადი

number = int(input("Enter number: "))

if(number % 3) == 0:
    print("{0} is multiple of 3".format(number))
else:
    print("{0} is not multiple of 3".format(number))