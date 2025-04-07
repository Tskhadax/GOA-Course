document.addEventListener('click',function(event){
    console.log(event.target.id)
    event.target.textContent = event.target.id
    event.target.style.color = event.target.id
})