# დაწერეთ ისეთი პროგრამა რომელიც მომხმარებელს უპრინტავს კვირის დღეს მომხმარებლის შემოტანილი რიცხვის მიხედვით (1 არის ორშაბათი, 2 სამშაბათი და ა.შ) გამოიყენეთ if elif else 

num = int(input("name a date (1 - 31) and I will tell you what day of the week it is: "))

if num == 1 or num == 8 or num == 15 or num == 22 or num == 29:
    print("monday")
elif num == 2 or num == 9 or num == 16 or num == 23 or num == 30:
    print("thuesday")
elif num == 3 or num == 10 or num == 17 or num == 24 or num == 31:
    print("wednesday")
elif num == 4 or num == 11 or num == 18 or num == 25:
    print("tursday")
elif num == 5 or num == 12 or num == 19 or num == 26:
    print("friday")
elif num == 6 or num == 13 or num == 20 or num == 27:
    print("saturday")
elif num == 7 or num == 14 or num == 21 or num == 28:
    print("sunday")