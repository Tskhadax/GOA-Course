// შექმენით 3 პრომისი, პირველი პრომისი დაარეზოლვებს მომხმარებლის ინფორმაციას ობიექტის სახით, მეორე პრომისი დააბრუნებს მომხმარებლის პოსტებს( [ { postName, PostImage },  { postName, PostImage } ,  { postName, PostImage } ]), მესამე პრომისმა დაარეზოლვოს მომხმარებლის მეგობრები, ეგეც ლისტის სახით, თითოეული მეგობარი იქნება ობიექტი. თითოეულ პრომის ქონდეს შესრულების სხვადასხვა დრო. ეს სამივე პრომისი გაუშვით პარალელურად. საბოლოოდ გადაუარეთ დიდი პრომისის სიას და დაბეჭდეთ ეს ყველა ინფორმაცია


// Task 001
let promise01 = new Promise((p1, p2)=> {
    setTimeout(()=> {
        p1({
            name: 'Ana',
            surname: 'Puturidze'
        })
    }, 3000)
})

let promise02 = new Promise((p1, p2) => {
    setTimeout(()=> {
        p1([{post: 'image1'}, {post: 'image2'}, {post: 'image3'}, {post: 'image4'}])
    }, 2000)
})

let promise03 = new Promise((p1, p2) => {
    setTimeout(()=> {
        p1(['friend01', 'friend02', 'friend03'])
    }, 1000)
})


// Task 002

Promise.all([promise01, promise02, promise03]).then((value)=> {
    value.map(item => {
        console.log(item)
    })
})