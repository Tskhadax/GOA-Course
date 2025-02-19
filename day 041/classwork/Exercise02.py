#CodeWars
def high_and_low(numbers):
    my_list = numbers.split()
    hight = int(my_list[0])
    low = int(my_list[0])
    
    for element in my_list:
        if int(element) > hight:
            hight = int(element)
            
    for element in my_list:
        if int(element) < low:
            low = int(element)
    
    return str(hight) + " " + str(low)