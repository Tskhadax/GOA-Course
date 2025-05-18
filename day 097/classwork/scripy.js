let time = document.querySelector(".time1")

let same = document.querySelectorAll(".same")

let clock = document.querySelector("#clock")

let heartBut = document.querySelector("#heart-but")

let timeBut = document.querySelector("#time-but")

let rateDiv = document.querySelector(".rate")

let adress = ["imgs/black.png","imgs/red.png","imgs/blue.png","imgs/purple.png"]

for(let i=0;i<same.length;i++){
    same[i].addEventListener("click", ()=>{
        clock.src = adress[i]
    })
}

setInterval(() => {
    let date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()



    seconds = seconds < 10 ? `0${seconds}` : seconds

    minute = minute <10  ? `0${minute}` : minute

    hour = hour <10  ? `0${hour}` : hour

    time.textContent = `${hour}:${minute}:${seconds}`

}, 1000)


heartBut.addEventListener("click",() =>{
    time.style.display = "none"
    rateDiv.style.display = "flex"
})

timeBut.addEventListener("click",()=>{
    rateDiv.style.display = "none"
    time.style.display = "flex"

})




