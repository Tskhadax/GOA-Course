# 4) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი


num = int(input("enter a num: "))

def positive_or_negative(number):
    if number > 0:
        return "positive"
    elif number == 0:
        return "zero"
    else:
        return "negative"
    
print(positive_or_negative(num))