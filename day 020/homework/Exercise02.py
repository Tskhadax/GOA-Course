#3) შექმენით სია და for loop დახმარებით გამოიტანეთ მხოლოდ ლუწი ინდექსებზე მდგომი ელემენტები

arr = ["vano","giorgi","mariami","nikolozi","luka"]

for i in range(5):
    if i % 2:
        print(arr[i])