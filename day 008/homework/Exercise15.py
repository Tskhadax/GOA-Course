#დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი ერთდროულად 50-ზე ნაკლები და 10-ის ჯერადი.

number = int(input("Enter number: "))

if number < 50 and (number % 10 == 0):
    print("yes number is low then 50 and this number is multiple of 10")
else:
    print("number is more then 50 or this number is not multiple of 10")