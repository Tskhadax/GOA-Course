# 4) მომხმარებელს შეაყვანინეთ რიცხვი და განაგრძეთ კითხვა მანამ, სანამ არ შეიტანს დადებით რიცხვს.

num = int(input("enter a num: "))

i = 1

while i > 0:
    if num > 0:
        print(" ")
        break
    else: 
        num = int(input("enter a num: "))