#დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი ლუწი ან 3-ის ჯერადი.

number = int(input("Enter number: "))

if (number % 2 == 0) or (number % 3 == 0) :
    print("Yes, the number is even or it's a multiple of 3")
else:
    print("number is not even or it's not multiple of 3")