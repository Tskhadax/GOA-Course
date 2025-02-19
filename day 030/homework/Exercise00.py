# 1) მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები

num = int(input("enter a num: "))
num1 = int(input("enter a num: "))

def sum(a, b):
    return a + b

print(sum(num, num1))

def min(a, b):
    return a - b

print(min(num, num1))

def multiply(a, b):
    return a * b

print(multiply(num, num1))


def divide(a, b):
    return a / b

print(divide(num, num1))