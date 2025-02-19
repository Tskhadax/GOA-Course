#Code Wars
def billboard(name, price=30):
    sum = 0
    for i in range(len(name)):
        sum += price
    return sum