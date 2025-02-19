#1) for ციკლის მეშვეობით შეასრულეთ ყველა მათემატიკური ოპერაცია 0-დან 100-მდე რიცხვებზე 

for i in range(101):
    addition = i + i
    subtraction = i - 10
    multiplication = i * i
    division = i / 2 
 
    print(i, "-", "iteration number")
    print(addition, "-", "addition")
    print(subtraction, "-", "substraction")
    print(multiplication, "-", "multiplication")
    print(division, "-", "division")
    print("-" * 30)