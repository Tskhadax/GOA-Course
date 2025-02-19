#10) დაითვალე დადებითი და უარყოფითი რიცხვების ჯამი სიიდან 

numbers = [1,15,23,-5,24,-15,-40,0]

positive = 0
negartive = 0

for i in numbers:
    if i > 0:
        positive += i
    else:
        negartive += i

print(positive)
print(negartive)