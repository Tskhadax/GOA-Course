/* შექმენით უნივერსალური ფუნქცია:
 ▪fakeServer(serverName)
ფუნქციის შიგნით დააგენერეითეთ:
 ▪0 ან 1 და შეინახეთ იგი willResolve ცვლადში
 ▪რიცხვი 100 დან 4000 და შეინახეთ იგი time ცვლადში
ამ ფუნქციამ უნდა დააბრუნოს პრომისი, რომელიც დააბრუნებს პასუხს time დროში.
პრომისი დაარეზოლვებს received data from ${serverName} in ${time}ms იმ შემთხვევაში თუ willResolve === 1
თუ willResolve === 0 პრომისი დაარეჯექთებს რაიმე ერორს.
გამოიყენეთ Promise.any და მის შიგნით რამდენჯერმე გამოიძახეთ შექმნილი ფუნქცია.
თუ ყველა ჩავარდება, დაიჭირეთ AggregateError და გამოიტანეთ ყველა ჩავარდნის მიზეზი .errors მასივით.
 ეს დავალებები გექნებათ ხუთშაბათისთვის
 
*/


let fakeServer = (serverName) => {
    let willResolve = Math.floor(Math.random() * 2)
    let time = Math.floor(Math.random() * 390) + 100
    console.log(`willResolve - ${willResolve}. time - ${time}`)
    
    return setTimeout(()=> {
        return new Promise((f, r)=> {
            if (willResolve) {
                return f(`received data from ${serverName} in ${time}ms`)
            }else {
                return r()
            }
        })
    }, time)
}