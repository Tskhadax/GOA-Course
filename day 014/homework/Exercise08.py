#შემოატანინეთ მომხმარებელს რიცხვი და დაადგინეთ არის თუ არა დადებითი უარყოფითი ან ნულის ტოლი 
number = int(input("Enter your number: "))
if number < 0:
    print("your number is negative")
elif number == 0:
    print("your number is 0")
else:
    print("your number is positive")