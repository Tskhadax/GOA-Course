let getInfoFromBackEnd = () => {
    let http = new XMLHttpRequest()
    console.log('Test 001')
    http.onreadystatechange = function () {

        console.log('Tesk 002')

        if (this.readyState == 4 && this.status == 200) {
            let text = JSON.parse(this.responseText)
            console.log(text)

            // random infos :D (8)
            let mainInfo = text.images
            let nameGenerator = text.categories

            console.log(mainInfo)
            console.log(nameGenerator)

            // task 000
            let idList = []
            let original = []
            let count = 0
            let allPrice = []
            let card = document.querySelectorAll('.card')

            while (count < 8) {
                let randomIndex = Math.floor(Math.random() * 20)

                if (idList.includes(randomIndex)) {
                    continue
                } else {
                    count++
                    console.log(mainInfo[randomIndex])
                    idList.push(randomIndex)
                    original.push(randomIndex)
                }
            }
            let render = () => {

                let images = document.querySelectorAll('.images')
                // let Details = card.querySelectorAll('button')

                let index = 0
                for (let i = 0; i < idList.length; i++) {

                    // Task 001
                    // create values
                    let imageSrc = mainInfo[idList[i]].file_name
                    let name = nameGenerator[idList[i] % 4].name
                    let price = ((mainInfo[idList[i]].width + mainInfo[idList[i]].height) / (idList[i] + 1)) < 0 ? ((mainInfo[idList[i]].width + mainInfo[idList[i]].height) / (idList[i] + 1)) * -1 : ((mainInfo[idList[i]].width + mainInfo[idList[i]].height) / (idList[i] + 1)) * 1

                    console.log('Width ' + mainInfo[idList[i]].width)
                    console.log('Height ' + mainInfo[idList[i]].height)
                    console.log('Id: ' + idList[i])


                    allPrice.push(price.toFixed(2))

                    console.log(allPrice)
                    console.log(imageSrc)
                    console.log(name)

                    // miniweba
                    images[i].src = `./pig API/test/${imageSrc}`
                    if (index < 8) {
                        card[index].querySelectorAll('p')[0].textContent = name
                        card[index].querySelectorAll('p')[1].textContent = `#${idList[i]}`
                        card[index].querySelectorAll('p')[2].textContent = idList[i] % 2 == 0 ? 'Gender: F' : "Gender: M"
                        card[index].querySelectorAll('p')[3].textContent = `$${price.toFixed(2)}`

                        index++
                    }
                }
            }

            // gasortireba -id-it
            let sortById = document.querySelector('#sort-id')
            let isSort = true

            let sort1 = () => {
                isSort = !isSort
                if (!isSort) {
                    idList.sort((x, y) => x - y)
                    sortById.style.color = 'rgba(190, 223, 255, 1)'
                    sortById.style.backgroundColor = 'rgba(0, 12, 24, 1)'
                    console.log(idList)
                    // isSort = true
                    render()
                } else {
                    // idList = []
                    idList = [...original]
                    render()
                    console.log(idList)
                    console.log(original)
                    sortById.style.color = 'white'
                    sortById.style.backgroundColor = ''
                }
                console.log('Id List is ' + idList)
            }
            console.log(idList)

            // gasortireba asakit
            let isSort1 = false
            sortedByPrice = document.querySelector("#price")

            let sort2 = () => {
                isSort1 = !isSort1
                if (isSort1) {
                    idList.sort((a, b) => {
                        let priceA = (mainInfo[a].width + mainInfo[a].height) / (a + 1)
                        let priceB = (mainInfo[b].width + mainInfo[b].height) / (b + 1)
                        console.log(b)
                        return priceA - priceB
                    })

                    sortedByPrice.style.color = 'rgba(190, 223, 255, 1)'
                    sortedByPrice.style.backgroundColor = 'rgba(0, 12, 24, 1)'
                } else {
                    idList = [...original]
                    sortedByPrice.style.color = 'white'
                    sortedByPrice.style.backgroundColor = ''
                }

                render()
                console.log('all price is ' + allPrice)
            }

            sortedByPrice.addEventListener('click', () => {
                if (isSort) {
                    isSort = false
                    sortById.style.color = 'white'
                    sortById.style.backgroundColor = ''
                }
                sort2()
            })

            sortById.addEventListener('click', () => {
                if (isSort1) {
                    isSort1 = false
                    sortedByPrice.style.color = 'white'
                    sortedByPrice.style.backgroundColor = ''
                }
                sort1()
            })

            // Male

            let male = document.querySelector('#male')
            let isSort2 = false

            male.addEventListener('click', () => {
                isSort2 = !isSort2

                idList = []
                // original = []
                count = 0

                if (!isSort2) {
                    idList = [...original]
                    male.style.color = 'white'
                    male.style.backgroundColor = ''
                } else {
                    while (count < 8) {
                        let randomIndex = Math.floor(Math.random() * 20)

                        if (idList.includes(randomIndex)) {
                            continue
                        } else if (randomIndex % 2 === 1) { 
                            count++
                            idList.push(randomIndex)
                            original.push(randomIndex)
                        }
                    }
                    male.style.color = 'rgba(190, 223, 255, 1)'
                    male.style.backgroundColor = 'rgba(0, 12, 24, 1)'
                }

                render()
                console.log(idList)
            })

                        // Male

            let female = document.querySelector('#female')
            let isSort3 = false
            
            female.addEventListener('click', () => {
                isSort3 = !isSort3

                idList = []
                // original = []
                count = 0

                if (!isSort3) {
                    idList = [...original]
                    female.style.color = 'white'
                    female.style.backgroundColor = ''
                } else {
                    while (count < 8) {
                        let randomIndex = Math.floor(Math.random() * 20)

                        if (idList.includes(randomIndex)) {
                            continue
                        } else if (randomIndex % 2 === 0) { 
                            count++
                            idList.push(randomIndex)
                            original.push(randomIndex)
                        }
                    }
                    female.style.color = 'rgba(190, 223, 255, 1)'
                    female.style.backgroundColor = 'rgba(0, 12, 24, 1)'
                }

                render()
                console.log(idList)
            })


        render()


        // detalebze gadasvla
        let curentId = JSON.parse(localStorage.getItem('curentId')) || null
        card.forEach(element => {
            element.addEventListener('click', (e) => {
                console.log(e.target.tagName)
                if (e.target.tagName === 'BUTTON') {
                    curentId = element.querySelectorAll('p')[1].textContent.split('#')[1]
                    console.log(curentId)
                    localStorage.setItem('curentId', JSON.stringify(curentId))
                    window.location.href = './main.html'
                }
            })

        })
    }
}
http.open('GET', "./pig API/test/_annotations.coco.json")
http.send()
}

getInfoFromBackEnd()