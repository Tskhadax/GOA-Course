# CodeWars
def josephus_survivor(n, k):
    s = 0
    for i in range(1, n + 1):
        s = (s + k) % i
    return s + 1