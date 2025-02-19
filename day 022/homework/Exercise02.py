# 4) შექმენით 3 ცრილი სამივე იქნება განსხვავებული მონაცემთა ტიპიები  | ბოლეანი არა საჭირო | და შექმენით ცარიელი ცხრილი სადაც იქნება დასაწყისში ინტეჯერების ცხრილი  სტრინგების ცხრილი და მერე ფლოათების ცხრილი
num = [ 1, 2, 3, 4, 5, 6, 7,]
string = ["one", "two", "three", "four",]
fl = [1.2, 3.4, 7.6, 4.6, 5.6]
empty = []

for i in num:
    if type(i) == int:
        empty.append(i)
print(empty)

for i in string:
    if type(i) == str:
        empty.append(i)
print(empty)

for i in fl:
    if type(i) == float:
        empty.append(i)
print(empty)