#დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა მომხმარებლის შემოტანილი რიცხვი 100-ზე მეტი და ლუწი.

number = int(input("Enter number (this number should be more then 100 and that number should be even): "))

if (number > 100) and (number % 2) == 0 :
    print("yes number {0} is more then 100 and that number is even".format(number))
else:
    print("the number does not meet the conditions")