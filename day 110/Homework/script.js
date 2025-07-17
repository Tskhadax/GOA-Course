// ცვლადების დეკლარაცია - main
const userUl = document.querySelector('.user-task')
const userInput = document.querySelector('input')
const submit = document.querySelector('button')
const message = document.querySelector('#message')


// ცვლადების დეკლარაცია - List
let toDoList = JSON.parse(localStorage.getItem('user-list')) || []

// დამატების ფუნქცია საიტზე
const addInList = () => {

    // task 00
    userUl.innerHTML = ''
    localStorage.setItem('user-list', JSON.stringify(toDoList))

    // task 01
    toDoList.map(item => {

        // tasl 02
        let li = document.createElement('li')
        let p = document.createElement('p')
        let div = document.createElement('div')
        let edit = document.createElement('button')
        let remove = document.createElement('button')
        let completed = document.createElement('button')


        // task 03
        edit.classList = 'Edit'
        remove.classList = 'Delete'
        completed.classList = 'Completed'

        // task 04
        p.textContent = item.trim()
        edit.textContent = 'Edit'
        remove.textContent = 'Delete'
        completed.textContent = 'Completed'

        // task 05
        div.appendChild(remove)
        div.appendChild(edit)
        div.appendChild(completed)

        li.appendChild(p)
        li.appendChild(div)

        userUl.appendChild(li)

        // task 06
        userInput.value = ''
        console.log(toDoList)

        localStorage.setItem('user-list', JSON.stringify(toDoList))

        // სიიდან ამოშლის ფუნქცია
        const Remove = () => {

            // Task 00
            let removeList = toDoList.indexOf(p.textContent)

            // Task 01
            toDoList.splice(removeList, 1)
            console.log(toDoList)

            localStorage.setItem('user-list', JSON.stringify(toDoList))

            addInList()
        }

        remove.addEventListener('click', Remove)

        // დაედითება

        let isEdit = false
        const Edit = (e) => {
            let parent = e.target.parentElement.parentElement.querySelector('p')
            let index = toDoList.indexOf(parent.textContent)
            console.log(e.target)

            if (!isEdit) {
                edit.textContent = 'Save'
                parent.setAttribute('contenteditable', true)
                parent.focus()
                parent.style.padding = '5px 10px'
                isEdit = true
            } document.addEventListener('keypress', (e) => {
                if (e.key === '*') {
                    edit.textContent = "Edit"
                    isEdit = false
                    newValue = parent.textContent
                    parent.style.padding = '0px'
                    toDoList[index] = newValue
                    parent.setAttribute('contenteditable', false)
                    localStorage.setItem('user-list', JSON.stringify(toDoList))
                }
            })
        }

        edit.addEventListener('click', Edit)

    })
}

// სიაში დამატება
const add = () => {
    let userInputValue = userInput.value

    if (userInputValue.trim() !== '') {

        message.style.color = '#0f0'
        message.textContent = 'Add Completed Sucsessful '

        toDoList.push(userInputValue.trim())
        addInList()

        localStorage.setItem('user-list', JSON.stringify(toDoList))
    } else {
        message.style.color = 'red'
        message.textContent = "You Can't Add Space In Your Task List "
    }

}

// სასტარტოდ რომ ჩაიტვირთოს ყველაფერი რაც ლოკალსთორეიჯშია

addInList()

// მოქმედების მსმენელები
submit.addEventListener('click', add)

// document.addEventListener('keydown', (e) =>{
//     console.log(e.key)
// })

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        add()
    }
})
