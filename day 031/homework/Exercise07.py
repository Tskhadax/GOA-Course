# Code Wars
def find_smallest_int(arr):
    v = arr[0]
    for i in arr:
        if i < v:
            v = i
    return v