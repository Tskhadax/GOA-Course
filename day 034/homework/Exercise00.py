#Code Wars
def cookie(x):
    if type(x) == str:
        return "Who ate the last cookie? It was Zach!"
    elif type(x) == int or type(x) == float:
        return "Who ate the last cookie? It was Monica!"
    else:
        return "Who ate the last cookie? It was the dog!"