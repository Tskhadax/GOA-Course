// 1️⃣ დაწერე სამი Promise, რომლებიც აბრუნებენ "Step 1", "Step 2", "Step 3" თითოეული 1 წამიანი დაყოვნებით. თითოეული უნდა შესრულდეს მხოლოდ მაშინ, როცა წინა დასრულდება. გამოიყენე მხოლოდ then() ჩეინინგი.

// Task 0-0

let function1 = () => {
    return new Promise(function (f1, f2) {
        setTimeout(() => {
            f1('Step 01')
        }, 1000)
    })
}

let function2 = () => {
    return new Promise(function (f1, f2) {
        setTimeout(() => {
            f1('Step 02')
        }, 1000)
    })
}

let function3 = () => {
    return new Promise(function (f1, f2) {
        setTimeout(() => {
            f1('Step 03')
        }, 1000)
    })
}


// Task 0-1

console.log(
    function1().then((value1) => {
        console.log(value1)

        return function2().then((value2) => {
            console.log(value2)

            return function3().then((value3) => {
                console.log(value3)
            })
        })
    })
)

