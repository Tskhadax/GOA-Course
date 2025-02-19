#Codewars
def abbrev_name(name):
    list = []
    list = name.split()
    return list[0][0].upper() + "." + list[1][0].upper()