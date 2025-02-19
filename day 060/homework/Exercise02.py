# CodeWars
def latest_clock(a, b, c, d):
    digits = sorted([a, b, c, d], reverse=True)
    
    for i in range(len(digits)):
        for j in range(len(digits)):
            if i != j:
                hour = digits[i] * 10 + digits[j]
                if 0 <= hour <= 23:
                    remaining = [digits[k] for k in range(len(digits)) if k != i and k != j]
                    
                    for m in range(len(remaining)):
                        for n in range(len(remaining)):
                            if m != n:
                                minute = remaining[m] * 10 + remaining[n]
                                if 0 <= minute <= 59:
                                    return f"{hour:02}:{minute:02}"