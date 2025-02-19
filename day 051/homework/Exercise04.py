# CodeWars
def shortest_steps_to_num(num):
    step = 0
    while num > 1:
        if num % 2 == 0:
            num = num // 2
        else:
            num -= 1
        step += 1
    return step