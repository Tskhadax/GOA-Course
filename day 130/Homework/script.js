let imageContainer = document.querySelector('.image')
let images = document.querySelectorAll('.image img')
let input = document.querySelector('input')
let searchBtn = document.querySelector('.inputs button')
let result = document.querySelector('.result')

let view = document.querySelector('#view')
let closeIcon = document.querySelector('.fa-xmark')
let searchBar = document.querySelector('.ask')

let index = 0

let slider = () => {
  images[index].style.opacity = '0'
  index = (index + 1) % images.length
  images[index].style.opacity = '1'
  imageContainer.style.transform = `translateX(-${index * 100}%)`
}
setInterval(slider, 5000)


async function getInfo() {
  let car = input.value
  let apiUrl = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${car}?format=json`)
  let info = await apiUrl.json()
  console.log(info)
  result.innerHTML = ''
  result.parentElement.querySelector('p').textContent = `Found items: ${info.Count}`
  let render = () => {
    let indexs = []
    if (info.Count > 0) {

    //   for (let i = 0; i < 40; i++) {
    //     let randomBikeIndex = Math.floor(Math.random() * Number(info.Count))
    //     if (!indexs.includes(randomBikeIndex)) {
    //       indexs.push(randomBikeIndex)
    //     }
    //   }
    //   console.log(indexs)

      info.Results.map(item => {
        // let p = document.createElement('p')
        // p.textContent = item.Model_Name
        // result.appendChild(p)

        indexs.push(item.Model_Name)
      })
      indexs = indexs.sort()
      indexs.map(item => {
        let p = document.createElement('p')
        p.textContent = item
        result.appendChild(p)
        console.log(item)
      })

    } else {
      result.innerHTML = '<h1> 404 <i class="fa-regular fa-face-frown"></i>'
    }
  }

  render()
}

searchBtn.addEventListener('click', getInfo)
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getInfo()
  }
})


let isOpen = JSON.parse(localStorage.getItem('is open')) || false

let open = () => {
  if (isOpen) {
    searchBar.style.zIndex = '3'
    searchBar.style.opacity = '1'
  }
}
let close = () => {
  if (!isOpen) {
    searchBar.style.zIndex = '-3'
    searchBar.style.opacity = '0'
  }
}

let chackOpen = () => {
  isOpen = !isOpen
  if (isOpen) {
    open()
  } else {
    close()
  }
  localStorage.setItem('is open', JSON.stringify(isOpen))
}

open()
close()
view.addEventListener('click', chackOpen)
closeIcon.addEventListener('click', chackOpen)

