# 2) განუწყვეტლივ სთხოვეთ მომხმარებელს მისი სახელი, სანამ არ შეიყვანს "quit"-ს.

name = input("enter your name: ")
i = 1

while i > 0:
    if name == "quit":
        print(" ")
        break
    else:
        name = input("enter your name: ")
    i += 1