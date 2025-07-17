// 1) შევქმანთ new Map ზღვის ლომების ტიპი
//   1. სახელი, გვრი, საცხოვრებელი 
//   2. დავამატოთ ასაკი ჩენი ზღვის ლომის
//   3. for of ით გადავუაროთ zgvisLomebi.keys() და მათი value ები გამომიტანეთ კონსოლში

// 1.
let lomebiMap = new Map( [ ['Name', 'Lomis saxeli'], ['Surname', 'Lomis Gvari'], ['Address', 'Tbilisi'] ])

// 2.
lomebiMap.set('Age', 50)

// 3.
for (let itemKey of lomebiMap.keys()){
    console.log(itemKey)
}
for (let itemValue of lomebiMap.values()){
    console.log(itemValue)
}