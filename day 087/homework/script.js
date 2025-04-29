let button = document.querySelector("button")

let player1 = document.getElementById("player1")

let player2 = document.getElementById("player2")

let score1 = document.getElementById("score1")

let score2 = document.getElementById("score2")

let h1 = document.getElementById("h1")

let h2 = document.querySelector(".h2")

let body = document.body

let span1 = document.getElementById("span1")

let span2 = document.getElementById("span2")

let bigdiv = document.querySelector(".bigdiv")

let gif = document.querySelector(".gif")

let againbut = document.querySelector("#again")

let audio2 = new Audio("audio2.wav")
let audio = new Audio("dice mp3.mp3")

let count1 = 0
let count2 = 0



button.addEventListener("click", function() {

    let counter1 = Math.floor(Math.random() * 6) + 1
    let counter2 = Math.floor(Math.random() * 6) + 1

    setTimeout(function () {
       
            player1.src = `dice_${counter1}.png`
            player2.src = `dice_${counter2}.png`
            switch (true) {
                case counter1 > counter2:
                    h1.textContent = "PLAYER 1 WON"
                    count1++

                    break
                case counter1 < counter2:
                    h1.textContent = "PLAYER 2 WON"
                    count2++

                    break
                default:
                    h1.textContent = "DRAW"

            }
            score1.textContent = count1
            score2.textContent = count2


            if (count1 == 10) {
                bigdiv.style.display = "flex"
                span1.textContent = "10"
                span2.textContent = count2
                gif.style.display = "block"
                audio2.play()

            } else if (count2 == 10) {
                bigdiv.style.display = "flex"
                span2.textContent = "10"
                span1.textContent = count1
                h2.textContent = "Player 2 Won"
                gif.style.display = "block"
                audio2.play()
            }

            

    }, 1200)

    audio.play()
})



againbut.addEventListener("click",function(){
    location.replace("index.html")
})
