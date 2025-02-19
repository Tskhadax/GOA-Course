# 3) მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.

num1 = int(input("enter a num: "))
num2 = int(input("enter a num: "))


sum = 0
multiply = 1

for i in range(num1, num2):
    sum += i
    multiply *= i
print(sum)
print(multiply)