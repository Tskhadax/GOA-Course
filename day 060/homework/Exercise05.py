# CodeWars
def sequence(n):
    for i in range(n):
        s = range(i+1)
        j = i+1
        tot = 0
        while j > 0:
            for k in s:
                tot += k**j
                j -= 1
            break
        yield tot

numbers = [i for i in sequence(1000)]

def min_length_num(num_dig, ord_max):
    n = 1
    for k in numbers[:ord_max]:
        if len(str(k)) == num_dig:
            return [True, n]
        elif len(str(k)) > num_dig:
            break
        n += 1
    return [False, -1]