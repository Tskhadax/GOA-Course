#7) შექმენით ახალი სია მხოლოდ ლუწი რიცხვების ერთი დიდი სიიდან 
numbers = [1,2,3,4,5,6,7,8,9,10]
even_numbers = []
for i in range(0, 11):
    if i % 2 == 0:
        even_numbers.append(i)
        
print(even_numbers)