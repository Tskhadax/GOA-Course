import {name, surname} from '/Level 139/Classwork/script01.js'

let form = document.querySelector('form')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    console.log(name.value, surname.value)
})
