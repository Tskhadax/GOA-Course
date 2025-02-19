# CodeWars
def nickname_generator(name):
    if len(name) <= 3:
        return "Error: Name too short"
    vowels = "aeiou"
    if name[2] in vowels:
        return name[0:4]
    else:
        return name[0:3]