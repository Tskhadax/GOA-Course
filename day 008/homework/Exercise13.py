#დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი უარყოფითი ან  ლუწი.

number = int(input("Enter number: "))

if number < 0 or (number % 2 == 0):
    print("yes number  negative or even")
else:
    print("unmber is pofitive or odd")