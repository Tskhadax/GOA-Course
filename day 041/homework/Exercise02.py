#CodeWars
def filter_list(l):
    num = []
    for i in l:
        if type(i) == int:
            num.append(i)
    return num