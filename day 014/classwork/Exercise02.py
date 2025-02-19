#     3) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის საშუალო არითმეტიკული 

num = int(input(" enter number "))
sum = 0

for i in range(1, num):
    sum = sum + i
print(sum / num )