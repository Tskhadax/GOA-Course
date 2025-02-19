#Code Wars
def func(string):
    reversed = ""

    for i in range(1, len(string) + 1):
        reversed += string[-i]
    return reversed
        

print(func("hello"))