#CodeWars
def digital_root(n):
    sums = sum([int(num) for num in str(n)])
    if len(str(sums)) >= 2:
        sums = digital_root(sums)
    return sums