let idBtn = document.querySelector('#idit')
let all = document.querySelectorAll('button')[2]
let completed = document.querySelectorAll('button')[3]
let notCompleted = document.querySelectorAll('button')[4]
let random10 = document.querySelectorAll('button')[5]
let sumBtn = document.querySelector('#sum')

let question = document.querySelector('.question')
let No = question.getElementsByTagName('button')[0]
let Yes = question.getElementsByTagName('button')[1]

let container = document.querySelector('.container')
let result = document.querySelector('.result')

let ID = document.querySelectorAll('input')[0]
let Sum = document.querySelectorAll('input')[1]

let message = document.querySelectorAll('span')
let blur = document.querySelector('.blur')

let curent = JSON.parse(localStorage.getItem('curent')) || null
let lastFilter = localStorage.getItem('lastFilter') || 'all'
let allList = JSON.parse(localStorage.getItem('list')) || []


let getData = () => {
    let http = new XMLHttpRequest()

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let list = JSON.parse(this.responseText)
            console.log(list)

            if (allList.length === 0) {
                allList = list
                localStorage.setItem('list', JSON.stringify(allList))
            }

            let showList = (myList, filterType) => {
                result.innerHTML = ''
                container.querySelector('span').textContent =
                    filterType === 'all' ? 'All items' :
                        filterType === 'completed' ? 'Completed items' :
                            filterType === 'item' ? 'user id' :
                                filterType === 'rendom' ? 'Rendom task' :
                                    filterType === 'send' ? 'User sorted' :
                                        'Not Completed items'

                myList.map((item, index) => {
                    if (filterType === 'completed' && !item.completed) return
                    if (filterType === 'notCompleted' && item.completed) return
                    if (filterType === 'item' && item.id != ID.value.trim()) return

                    // create var
                    let li = document.createElement('li')
                    let p = document.createElement('p')
                    let div = document.createElement('div')

                    let remove = document.createElement('i')
                    let edit = document.createElement('i')
                    let completedBox = document.createElement('input')

                    completedBox.type = 'checkbox'
                    edit.classList = "fa-solid fa-pen-to-square"
                    remove.classList = "fa-solid fa-trash"

                    div.appendChild(edit)
                    div.appendChild(remove)
                    div.appendChild(completedBox)

                    p.textContent = item.id + '. ' + item.title
                    p.style.color = item.completed ? '#0f0' : '#f00'

                    item.completed ? completedBox.checked = true : completedBox.checked = false

                    li.appendChild(p)
                    li.appendChild(div)

                    if (item.completed) {
                        p.style.textDecoration = 'line-through 1px solid'
                        item.completed = true
                    }
                    result.appendChild(li)

                    // event listenet Part 1
                    // remove
                    remove.addEventListener('click', () => {
                        console.log(myList)
                        myList.splice(index, 1)
                        localStorage.setItem('list', JSON.stringify(myList))
                        showList(myList, filterType)
                    })

                    // completed
                    completedBox.addEventListener('click', () => {
                        if (item.completed) {
                            item.completed = false
                            console.log(item)
                        } else {
                            item.completed = true
                        }
                        console.log(item)
                        localStorage.setItem('list', JSON.stringify(myList))
                        showList(allList, filterType)
                    })
                    // edit
                    let edited = false
                    edit.addEventListener('click', () => {
                        let beforeP = item.title
                        console.log(beforeP)

                        if (!edited) {
                            p.focus()
                            p.style.padding = '5px 10px'
                            p.setAttribute('contenteditable', true)

                            edit.classList = "fa-solid fa-pen"
                            edit.style.color = 'orange'
                            edited = true
                        } else {
                            p.style.padding = '0'

                            edit.classList = "fa-solid fa-pen-to-square"
                            edit.style.color = 'white'
                            edited = false

                            if (p.value !== beforeP) {
                                blur.style.opacity = '1'
                                blur.style.zIndex = '1'

                                No.addEventListener('click', () => {
                                    p.value = item.id + '. ' + beforeP
                                    blur.style.opacity = '0'
                                    blur.style.zIndex = '-1'
                                    p.setAttribute('contenteditable', false)
                                    localStorage.setItem('list', JSON.stringify(allList))
                                    showList(allList, lastFilter)
                                })
                                Yes.addEventListener('click', () => {
                                    item.title = p.textContent

                                    p.value = item.id + '. ' + p.value
                                    blur.style.opacity = '0'
                                    blur.style.zIndex = '-1'

                                    p.setAttribute('contenteditable', false)
                                    showList(allList, lastFilter)

                                    localStorage.setItem('list', JSON.stringify(allList))
                                })
                            } else {
                                p.setAttribute('contenteditable', false)
                                showList(allList, lastFilter)

                            }
                        }
                    })
                    // localStorage.setItem('list', JSON.stringify(myList))
                })
                localStorage.setItem('list', JSON.stringify(myList))
                localStorage.setItem('lastFilter', JSON.stringify(filterType))
            }

            // all btn
            all.addEventListener('click', () => {
                showList(allList, 'all')
            })

            // completed btn
            completed.addEventListener('click', () => {
                showList(allList, 'completed')
            })

            // not completed btn
            notCompleted.addEventListener('click', () => {
                showList(allList, 'notCompleted')
            })

            // take task for id
            idBtn.addEventListener('click', () => {
                if (ID.value > 0 && ID.value < 201) {
                    let find = false
                    message[0].textContent = ''
                    for (let item of allList) {
                        if (item.id == ID.value) {
                            result.innerHTML = ''
                            showList(allList, 'item')
                            find = true
                            break
                        }
                    }
                    if (!find) {
                        message[0].textContent = 'არაა ნაპოვნი'
                    }
                } else {
                    message[0].textContent = 'არასწორი შიგთავსი'
                    message[0].style.color = 'red'
                }
            })

            // random 10 Task
            random10.addEventListener('click', () => {
                result.innerHTML = ''
                let randomTasks = []

                while (randomTasks.length < 10) {
                    let randomIndex = Math.floor(Math.random() * allList.length)
                    let task = allList[randomIndex]

                    if (!randomTasks.includes(task)) {
                        randomTasks.push(task)
                    }
                }
                showList(randomTasks, 'random')
            })


            // sumBtn
            sumBtn.addEventListener('click', () => {
                let index = Number(Sum.value)

                if (index < 201 && index > 0) {
                    message[1].textContent = ''

                    let newList = allList.slice(0, index)

                    showList(newList, 'send')
                } else {
                    message[1].textContent = 'არასწორი შიგთავსია',
                        message[1].style.color = 'red'
                }
            })
        }
    }

    http.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    http.send()
}

getData()

// THE END (: