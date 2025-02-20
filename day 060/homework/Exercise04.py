# CodeWars
def branch(n):
    if n == 1:
        return 0

    k = 1
    while (k * k) < n:
        k += 2

    size = (k * k) - ((k - 2) * (k - 2))
    part = size // 4
    pos = (n - ((k - 2) * (k - 2)) - 1)

    return pos // part