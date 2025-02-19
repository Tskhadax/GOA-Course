# 3) შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი


user_num = int(input("enter a number: "))

def even_or_odd(number):
    if number %2 == 0:
        return "even"
    else:
        return "odd"
    
print(even_or_odd(user_num))