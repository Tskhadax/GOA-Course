# CodeWars
def beeramid(bonus, price):
    total_beers = bonus // price
    levels = 0
    while total_beers >= (levels + 1) ** 2:
        levels += 1
        total_beers -= levels ** 2
    return levels