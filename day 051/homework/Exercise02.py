# CodeWars
def array_diff(a, b):

    filtered_arr = []

    for element in a:
        if element not in b:
            filtered_arr.append(element)

    return filtered_arr