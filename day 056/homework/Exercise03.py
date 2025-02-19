# CodeWars
def proofread(st):
    s = "ei"
    st = st.split(". ")
    l = []
    
    for i in st:
        i = i.capitalize()
        if "ie" in i:
            i = i.replace("ie","ei")
        elif "Ie" in i:
            i = i.replace("I","E")
        
        l.append(i)
    return ". ".join(l)