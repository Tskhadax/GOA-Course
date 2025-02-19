#Code Wars
def multi_table(number):
    table = ""
    for integer in range(1 , 11):
        multiplication = integer * number
        table += "{} * {} = {}\n".format(integer,number,multiplication)
    return table[:-1]