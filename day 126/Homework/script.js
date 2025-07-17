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
            let render = () => {

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

                let images = document.querySelectorAll('.images')
                let card = document.querySelectorAll('.card')

                let index = 0
                for (let i = 0; i < idList.length; i++) {

                    // Task 001
                    // create values
                    let imageSrc = mainInfo[idList[i]].file_name
                    let name = nameGenerator[idList[i] % 4].name
                    let price = ((mainInfo[idList[i]].width + mainInfo[idList[i]].height) / (idList[i] + 1)) < 0 ? ((mainInfo[idList[i]].width + mainInfo[idList[i]].height) / (idList[i] + 1)) * -1 : ((mainInfo[idList[i]].width + mainInfo[idList[i]].height) / (idList[i] + 1)) * 1


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
                if (isSort) {
                    idList.sort((x, y) => x - y)
                    sortById.style.color = 'rgba(190, 223, 255, 1)'
                    sortById.style.backgroundColor = 'rgba(0, 12, 24, 1)'
                    console.log(idList)
                    isSort = true
                    render()
                } else {
                    idList = original
                    isSort = false
                    render()
                    console.log(idList)
                }
            }
            sortById.addEventListener('click', sort1)

            // gasortireba asakit
            let isSort1 = false
            sortedByPrice = document.querySelector("#price")

            let sort2 = () => {
                if (isSort1) {
                    allPrice.sort((x, y) => x - y)
                    sortedByPrice.style.color = 'rgba(190, 223, 255, 1)'
                    sortedByPrice.style.backgroundColor = 'rgba(0, 12, 24, 1)'
                    console.log(allPrice)
                    isSort1 = true
                    render()
                } else {
                    isSort1 = false
                    render()
                }
            }

            sortedByPrice.addEventListener('click', sort2)
            render()
        }
    }
    http.open('GET', "./pig API/test/_annotations.coco.json")
    http.send()
}

getInfoFromBackEnd()