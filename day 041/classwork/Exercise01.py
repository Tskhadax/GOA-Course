#CodeWars
def square_digits(num):
    number = str(num)
    final_word = ""
    for element in number:
        final_word += str(int(element)*int(element))
    return int(final_word)