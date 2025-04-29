let days  = document.getElementById("day")
let hours = document.getElementById("houre")
let minutes  = document.getElementById("minut")
let seconds  = document.getElementById("sec")

function update(){
    let currentTime = new Date()
    let newYearDate = new Date("January 01 2026 00:00:00")
    
    let interval = newYearDate-currentTime
    
    let daysInterval = Math.floor(interval / (1000*60*60*24))
    let hoursInterval = Math.floor(interval / (1000*60*60)%24)
    let minutesInterval = Math.floor(interval / (1000*60)%60)
    let secondsInterval = Math.floor((interval / 1000)%60)
    days.textContent = daysInterval
    if(hoursInterval<10){
        hours.textContent = '0' + hoursInterval
    }else{
        hours.textContent = hoursInterval
    }

    if(minutesInterval<10){
        minutes.textContent = "0" + minutesInterval
    }else{
        minutes.textContent = minutesInterval
    }

    if(secondsInterval<10){
        seconds.textContent = "0" + secondsInterval
    }else{
        seconds.textContent = secondsInterval
    }
    

}
setInterval(update, 1000)


