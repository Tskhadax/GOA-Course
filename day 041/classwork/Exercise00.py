#CodeWars
def get_count(sentence):
    vowel = "aeiou"
    counter = 0
    for element in sentence:
        if element in vowel:
            counter += 1
    return counter