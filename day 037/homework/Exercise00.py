import random 


# 2) გააკეთეთ random student generator რომელსაც გადაეცემა ჯგუფის მოსწავლეებით სავსე სია და დაგვიბრუნებს რენდომულად განაწილებულ გუნდებს მზგავსად როგორც გავაკეთეთ წინა გაკვეთილზე 


fruits = ["apple", "orange", "apricot", "lemon", "cherry", "banana", "kiwi", "strawberry", "peach", "blueberry", "raspberry", "grape"]


all_fruits = []

fruits2 = []

while fruits != []:
    if len(fruits) < 2:
        break
    else:
        for i in range(2):
            thing = random.choice(fruits)
            fruits2.append(thing)
            fruits.remove(thing)
    
    all_fruits.append(fruits2)
    fruits2 = []


for i in all_fruits:
    print(i)