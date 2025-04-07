// შექმენით ცვლადი სადაც მომხმარებელი შემოიყვანს საათს, თქვენი დავალებაა გაიგოთ ეს საათი რომელ დღის მონაკვეთს ეკუთვნის(დილა,შუადღე,საღამო,ღამე)

let time  =(prompt("Enter Time:"))

switch (time){
    case "12:00":
    case "13:00":
    case "14:00":
    case "15:00":
        console.log("dila")
        break
    case "16:00":
    case "17:00":
    case "18:00":
    case "19:00":
        console.log("shuadge")
        break
    case "20:00":
    case "21:00":
    case "22:00":
        console.log("sagamo")
        break
    case "23:00":
        console.log("ghame")
}