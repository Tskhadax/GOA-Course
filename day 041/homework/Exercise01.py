#CodeWars
def to_jaden_case(string):
    if len(string) == 0:
        return string
    
    name = string.split()
    for i in range(len(name)):
        name[i] = name[i].capitalize()
    return ' '.join(name)