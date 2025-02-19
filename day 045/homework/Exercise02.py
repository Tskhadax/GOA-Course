#codewars
def lowercase_count(strng):
    s = ""
    for i in strng:
        if i.islower():
            s += i
    return len(s)