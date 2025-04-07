// შექმენით ცვლადი month ამ ცვლადში მომხმარებელს უნდა შემოატანინოთ თვე ოღონდ რიცხვების საშუალებით(მაგ. 1=იანვარი , 2=თებერვალი , 3 = მარტი) , ამ რიცხვების მეშვეობით დაადგინეთ რომელი თვეა და გამოსახეთ კონსოლში, ამისთვის აუცილებლად გამოიყენეთ switch , იმ შემთხვევაში თუ მომხმარებელმა შემოიყვანა სხვა სიტყვა ან 12 ზე მეტი რიცხვი console-ში გამოიტანოს რომ "ასეთი თვე არ არსებობს"

let month = Number(prompt("Enter Month:"))

switch(month){
    case 1:
        console.log("იანვარი")
        break
    case 2:
        console.log("თებერვალი")  
        break 
    case 3:
        console.log("მარტი") 
        break
    case 4:
        console.log("აპრილი")
        break     
    case 5:
        console.log("მაისი")
        break
    case 6:
        console.log("ივნისი")
        break  
    case 7:
        console.log("ივლისი")
        break 
    case 8:
        console.log("აგვისტო")
        break 
    case 9:
        console.log("სექტემბერი")
        break 
    case 10:
        console.log("ოქტომბერი")
        break 
    case 11:
        console.log("ნოემბერი")
        break 
    case 12:
        console.log("დეკემბერი")
        break 
    default:
        console.log("ასეთი თვე არ არსებობს")
}