#codewars
def logical_calc(array, op):
    res = array[0]
    for i in array[1:]:
        if op == 'AND':
            res = res and i
        elif op == 'OR':
            res = res or i
        elif op == 'XOR':
            res = res != i
    return res