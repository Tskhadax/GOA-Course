// ✅ დავალება 3: ასინქრონული მუშაობის მიმდევრობა
// 🧠 თემა: setTimeout
// 📌 დავალება:
// დაწერე 3 ცალკე setTimeout, რომლებიც აჩვენებენ:
    // "Start"
    // "Middle" (1 წამის შემდეგ)
    // "End" (2 წამში)
// ამით ნახავ როგორ მუშაობს ასინქრონული კოდები.

setTimeout(() => {
    console.log('S T A R T   ! ! !')
}, 0)
setTimeout(() => {
    console.log('M I D D L E   ! ! !')
}, 1000 )
setTimeout(() => {
    console.log('E N D 1   ! ! !')
}, 2000 )