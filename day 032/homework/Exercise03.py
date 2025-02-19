#Code Wars
def remove_exclamation_marks(s):
    remove = []
    empty = ""
    for i in s:
        remove.append(i)
        if i == "!":
            remove.remove("!")

    for i in remove:
        empty += i
    return empty