let curentId = JSON.parse(localStorage.getItem('curentId')) || null
console.log(curentId)

let getData = () => {
    let http = new XMLHttpRequest()
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let text = JSON.parse(this.responseText)
            let mainInfo = text.images
            let curentPig = mainInfo[curentId]
            console.log(curentPig)

            // main Tags:
            let img = document.querySelector('img')
            let h3 = document.querySelector('h3')
            let h4Id = document.querySelectorAll('h4')[0]
            let h4Gen = document.querySelectorAll('h4')[1]
            let ageP = document.querySelectorAll('p')[0]
            let licenseP = document.querySelectorAll('p')[1]
            let widthHeight = document.querySelectorAll('p')[2]
            let priceH2 = document.querySelector('h2')

            // create obiect for user
            let render = () => {
                img.src = `./pig API/test/${curentPig.file_name}`
                h3.textContent = text.categories[curentId % (text.categories).length].name
                h4Id.textContent = String(curentId).length >= 2 ? `Id: #0${curentId}` : `Id: #00${curentId}`
                h4Gen.textContent = curentId % 2 === 0 ? 'Female' : 'Male'
                ageP.textContent = `B-Day: ${curentPig.date_captured.split('T')[0]}`
                licenseP.textContent = `License: ${curentPig.license}`
                widthHeight.textContent = `Width X Height: ${curentPig.width}mm X ${curentPig.height}mm`
                priceH2.textContent = 'Price $'+((curentPig.width + curentPig.height) / (Number(curentId) + 1)).toFixed(2)

                console.log(Number(curentPig.width) + Number(curentPig.height))
                console.log((curentPig.width + curentPig.height) / (Number(curentId) + 1))
                console.log(curentId + ' id')
                console.log(ageP)
                console.log(text.categories[curentId % (text.categories).length].name)
                console.log(curentPig.file_name)


                console.log(text)
            }
            render()
        }
    }
    http.open('GET', "./pig API/test/_annotations.coco.json")
    http.send()
}

getData()