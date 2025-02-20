# CodeWars
def rot13(message):
    result = []
    for char in message:
        if 'a' <= char <= 'z':
            new_char = chr((ord(char) - ord('a') + 13) % 26 + ord('a'))
            result.append(new_char)
        elif 'A' <= char <= 'Z':
            new_char = chr((ord(char) - ord('A') + 13) % 26 + ord('A'))
            result.append(new_char)
        else:
            result.append(char)
    return ''.join(result)