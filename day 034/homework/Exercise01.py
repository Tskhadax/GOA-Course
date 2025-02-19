#Code Wars
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    for i in geese:
        for elements in birds:
            if i == elements:
                birds.remove(i)
    return birds