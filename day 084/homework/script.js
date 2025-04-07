// დღეს ახსნილი მასალის გამოყენებით გააკეთეთ, საიტზე მოძრავი ელემენტი კლავიატურის ისრების საშუალებით, შექმენით ერთი ელემენტი რომლის საიტზე ჰორიზონტალურადაც და ვერტიკალურადაც ამოძრავებას შეძლებთ, ისრების გამოყენებით ,  ასევე დაამატეთ სტილი რათა იყოს ლამაზი და smooth

let doc = document.querySelector("div")

let horizontal = 0
let vertical = 0
let rotation = 0


document.addEventListener("keydown", function(e){
    if(e.key == "ArrowUp"){
        vertical-=10
        doc.style.backgroundColor = "blue"
    }
    else if(e.key == "ArrowDown"){
        vertical += 10
        doc.style.backgroundColor = "red"
    }
    else if(e.key == "ArrowRight"){
        horizontal += 10
        doc.style.backgroundColor = "green"
    }
    else if(e.key == "ArrowLeft"){
       horizontal -= 10
       doc.style.backgroundColor = "yellow"
    }
    else if(e.key == "d"){
        rotation +=10
        doc.style.backgroundColor = "purple"
    }
    else if(e.key == "a"){
        rotation-=10
        doc.style.backgroundColor = "brown"
    }
   

    doc.style.transform = `translateY(${vertical}px) translateX(${horizontal}px) rotate(${rotation}deg)`
})