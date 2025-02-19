#codewars
def expanded_form(num):
    num_str = str(num)
    length = len(num_str)
    expanded_parts = []

    for i in range(length):
        digit = int(num_str[i])
        if digit != 0:
            place_value = digit * (10 ** (length - i - 1))
            expanded_parts.append(str(place_value))

    expanded_string = ""
    for i in range(len(expanded_parts)):
        if i == 0:
            expanded_string += expanded_parts[i]
        else:
            expanded_string += " + " + expanded_parts[i]

    return expanded_string