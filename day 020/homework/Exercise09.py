#9) შექმენით ცვლადები და დააჯამეთ ლუწი და კენტი რიცხვები სიიდან 

numbers = [1,2,5,4,20,15,7,9]
odd = 0
even = 0

for i in numbers:
    if i % 2 == 0:
        even += i
    else:
        odd += i
    
print(odd)
print(even)