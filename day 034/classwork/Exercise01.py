#Code Wars
def no_space(x):
    str = ""
    for char in x:
        if char != " ":
            str += char
    return str