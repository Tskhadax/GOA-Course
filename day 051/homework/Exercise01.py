# CodeWars
def sum_triangular_numbers(n):
    if n < 1:
        return 0 
    
    return sum((i * (i + 1)) // 2 for i in range(1, n + 1))