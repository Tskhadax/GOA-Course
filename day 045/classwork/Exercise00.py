#codewars
def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    return walk.count("n") == walk.count("s") and walk.count("e") == walk.count("w")