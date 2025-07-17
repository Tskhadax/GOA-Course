// model change
let icon = document.querySelector('.icon')
let model = JSON.parse(localStorage.getItem('model')) || 'model-1'
let modelChange = (info) => {
    if (info === 'model-2') {
        document.querySelector('header').style.backgroundColor = 'black'
        document.querySelector('header').style.boxShadow = ' 0px 3px 5px  #28002b'
        document.querySelector('main').style.background = 'linear-gradient(black, #28002b)'
        document.querySelector('body').style.color = 'white'
        model = 'model-1'
        localStorage.setItem('model', JSON.stringify(model))
        optionLanguage.style.background = 'linear-gradient(rgb(0, 0, 0), rgb(22, 0, 18))'
    } else {
        document.querySelector('header').style.backgroundColor = 'rgb(2, 0, 0)'
        document.querySelector('main').style.background = 'linear-gradient(black,rgb(121, 0, 0))'
        document.querySelector('body').style.color = 'rgb(255, 180, 180)'
        document.querySelector('header').style.boxShadow = ' 0px 3px 5px rgb(64, 14, 14)'
        model = 'model-2'
        localStorage.setItem('model', JSON.stringify(model))
        optionLanguage.style.background = 'linear-gradient(black, rgb(92, 0, 0))'
    }

}
icon.addEventListener('click', () => {
    modelChange(model)
})
let modelInfo = () => {
    if (model == 'model-1') {
        modelChange('model-2')
    } else {
        modelChange('model-1')
    }
}
modelInfo()