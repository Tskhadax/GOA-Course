#Print numbers divisible by both 3 and 5 from 1 to 100 inclusive.

for i in range(0,100):
    if i % 3 == 0 or i % 5 == 0:
        print(i)