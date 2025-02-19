#მომხმარებელს შემოატანინეთ 2 რიცხვი, ხოლო შემდეგ გაკეთეთ ამ რიცხვებზე ყველა მათემატიკური ოპერაცია ცალცალკე

num1 = int(input("enter number: "))
num2 = int(input("enter number: "))

result1 =  str(num1) + " + " + str(num2) + " = " + str(num1 + num2)
result2 =  str(num1) + " - " + str(num2) + " = " + str(num1 - num2)
result3 =  str(num1) + " / " + str(num2) + " = " + str(num1 / num2)
result4 =  str(num1) + " * " + str(num2) + " = " + str(num1 * num2)
result5 =  str(num1) + " + " + str(num2) + " / " + str(num1) + " - " + str(num2) + " * " + str(num1) + " = " + str(num1 * num2)

print(result1)
print(result2)
print(result3)
print(result4)
print(result5)