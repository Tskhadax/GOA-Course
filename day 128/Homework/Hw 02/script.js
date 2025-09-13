// 2️⃣ შექმენი Promise, რომელიც აბრუნებს რიცხვს (მაგ. 2). შემდეგი then()-ებში გაამრავლე ეს რიცხვი ჯერ 2-ზე, შემდეგ მიღებული შედეგი 3-ზე, შემდეგ 4-ზე. ბოლო then()-ში დაბეჭდე საბოლოო შედეგი

let function1 = () => {
    return new Promise(function (f1, f2) {
        f1(3)
    })
}

function1().then((value) => {
    return value * 2
}) .then((value1) => {
    return value1 * 3
}) .then((value2) => {
    return value2 * 4
}) .then((value3) => {
    console.log(value3)
})