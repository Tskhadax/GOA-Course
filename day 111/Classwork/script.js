// ცვლადების დეკლარაცია - main
const userUl = document.querySelector('.user-task')
const completedUl = document.querySelector('.completed')

const userInput = document.querySelector('input')
const submit = document.querySelector('button')
const message = document.querySelector('#message')
const clean = document.querySelector('#Clean')

// ცვლადების დეკლარაცია - List
let toDoList = JSON.parse(localStorage.getItem('user-list')) || []
let completedList = JSON.parse(localStorage.getItem('completed')) || []

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
        edit.className = 'Edit'
        remove.className = 'Delete'
        completed.className = 'Completed'

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

        // შესრულებულში დამატება

        const Completed = () => {
            let completedLi = p.textContent
            completedList.push(completedLi)

            localStorage.setItem('completed', JSON.stringify(completedList))
            Remove()

            completedUl.innerHTML = ''
            completedList.map(item => {

                // tasl 02
                let li = document.createElement('li')
                let p = document.createElement('p')
                let div = document.createElement('div')
                let remove = document.createElement('button')

                // task 03
                remove.className = 'Delete'

                // task 04
                p.textContent = item.trim()
                remove.textContent = 'Delete'

                // task 05
                div.appendChild(remove)
                li.appendChild(p)
                li.appendChild(div)

                completedUl.appendChild(li)

                // task 06
                userInput.value = ''
                console.log(toDoList)

                localStorage.setItem('completed', JSON.stringify(completedList))
            })  
            localStorage.setItem('completed', JSON.stringify(completedList))


        }
        localStorage.setItem('completed', JSON.stringify(completedList))
        completed.addEventListener('click', Completed)

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

// clean ფუნქცია
const cleanFunc = () => {
    completedUl.innerHTML = 'Empty'
    completedList = []
    localStorage.setItem('completed', JSON.parse(completedList))
}
// სასტარტოდ რომ ჩაიტვირთოს ყველაფერი რაც ლოკალსთორეიჯშია
addInList()

// მოქმედების მსმენელები
submit.addEventListener('click', add)
clean.addEventListener('click', cleanFunc)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        add()
    }
})