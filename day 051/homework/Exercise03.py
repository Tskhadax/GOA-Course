# CodeWars
def delete_nth(order,max_e):
    result = []
    for number in order:
        if result.count(number) < max_e:
            result.append(number)
    return result