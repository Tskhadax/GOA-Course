#Code Wars
def digitize(n):
    l = []
    strn = str(n)
    for i in range(len(strn)):
        l.append(int(strn[-i -1]))
    
    return l