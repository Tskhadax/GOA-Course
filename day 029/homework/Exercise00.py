# 2) python - შექმენით რიცხვებით სავსე სია შემდეგ კი შექმენით პროგრამა რომელიც დაგვიბეჭდავს ამ სიიდან უდიდესს, გაიხსენეთ ბატონი ნიკას მოცემული დავალება გამოგადგებათ

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

biggest_num = num[0]

for num in num :
    if num > biggest_num:
        biggest_num = num

print(biggest_num)