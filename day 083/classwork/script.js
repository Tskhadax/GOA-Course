document.addEventListener
('click',function(event){
    console.log(event.target)
    event.target.style.color = 'red'
})