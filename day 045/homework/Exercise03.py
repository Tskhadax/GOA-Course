#codewars
def small_enough(array, limit):
    count = 0
    for i in array:
        if i > limit:
            count += 1
    
    if count > 0:
        return False
    else:
        return True