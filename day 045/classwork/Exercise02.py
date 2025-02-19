#codewars
def evaluate(equation):
    def calculate(a, b):

        if b == 0:
            return None  
        return (a + b) + (a - b) + (a * b) + (a // b)
    

    parts = equation.split(' @ ')
    

    try:
        result = int(parts[0])
    except ValueError:
        return None
    

    for part in parts[1:]:
        try:
            num = int(part)
            result = calculate(result, num)
            if result is None:
                return None 
        except ValueError:
            return None
    
    return result
