# Code Wars
def remove_char(s):
    new_word = []
    empty_str = ""
    for i in s:
        new_word.append(i)
    new_word.pop(0)
    new_word.pop(-1)
    for i in new_word:
        empty_str += i
    return empty_str