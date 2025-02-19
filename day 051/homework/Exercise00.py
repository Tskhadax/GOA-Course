#Codewars
def number_of_duplicate_digits(ndigit):
    count = 0
    for num in range(10**(ndigit-1), 10**ndigit):
        string = str(num)
        for st in range(len(string)-1):
            if string[st] == string[st+1]:
                count +=1
                break
    return count