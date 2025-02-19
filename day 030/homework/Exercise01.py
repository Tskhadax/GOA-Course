# 2)  შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვებით სავსე სია ამ ფუნქციამ კი უნდა დააბრუნოს ამ სიის რიცხვების ჯამი


def sum():
    num_list = [1, 2, 3, 4, 5,]
    num_sum = 0

    for i in range(len(num_list)):
        num_sum += num_list[i]
        return num_sum
    

print(sum())