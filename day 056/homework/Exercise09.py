# CodeWars
def middle_permutation(string):
    s = sorted(string)
    n = len(s)

    def ragac(num):
        result = 1
        for i in range(2, num + 1):
            result *= i
        return result

    middle = ragac(n) // 2 - 1

    result = []
    while s:
        bs = ragac(len(s) - 1)
        x = middle // bs
        result.append(s.pop(x))
        middle %= bs

    return ''.join(result)
