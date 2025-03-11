// 5)Splice მეთოდის გამოყენებით ჩაანაცვლეთ სიაში ყველა უარყოფითი რიცხვი 0 - ით

let myArr = [12, -231, 120, 20, -123]

for (let index = 0; myArr.length >= index; index ++){
    if (myArr[index] < 0){
        myArr.splice(index, 1, 0)
    }
}
console.log(myArr)