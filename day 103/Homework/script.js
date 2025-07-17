let watch = document.querySelector('#watch')

let watch1 = document.querySelector('#black')
let watch2 = document.querySelector('#red')
let watch3 = document.querySelector('#blue')
let watch4 = document.querySelector('#violet')

watch1.addEventListener('click', function(){
    watch.src='./imgs/black.png'
})
watch2.addEventListener('click', function(){
    watch.src='./imgs/red.png'
})
watch3.addEventListener('click', function(){
    watch.src='./imgs/blue.png'
})
watch4.addEventListener('click', function(){
    watch.src='./imgs/purple.png'
})

// dro
let getTime = () =>{
    const now = new Date()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    h < 10 ? h = '0' + h : h = h
    m < 10 ? m = '0' + m : m = m
    s < 10 ? s = '0' + s : s = s

    document.querySelector('#time').textContent = `${h}:${m}:${s}`

    setInterval(getTime, 1000)
}
getTime()

let timeButton = document.querySelector('#timeB')
timeButton.addEventListener('click', function(){
    document.getElementById('a').innerHTML = `<p id="time"></p>`
    getTime()
})

let heart = document.querySelector('#heart')
let icon = document.querySelector('i')
let open = false
let blurBg = document.querySelectorAll('.blur')[0]
icon.addEventListener('click', function(){
    open == false ? (blurBg.style.opacity = '1', blurBg.style.zIndex = '4', open=true) : (blurBg.style.opacity = '0', blurBg.style.zIndex = '-3', open=false)
})

let blurBg2 = document.querySelector('.blur2')
let button2 = document.getElementById('buyy')

button2.addEventListener('click', function(){
    open == false ? (blurBg2.style.opacity = '1', blurBg2.style.zIndex = '4', open=true) : (blurBg2.style.opacity = '0', blurBg2.style.zIndex = '-2', open=false)
})
heart.addEventListener('click', function(){
    document.getElementById('a').innerHTML = `<img src='./imgs/heart.png'>`
})

let registration = document.querySelector('#submit1')
registration.addEventListener('click', function(event){
    event.preventDefault()
    // console.log(document.getElementsByTagName('form')[0].target)
    // let name = document.getElementById


})