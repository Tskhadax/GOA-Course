// let's declaration variable for change language
let nav = document.getElementsByClassName('nav')
let button = document.getElementsByTagName('button')
let h1 = document.getElementsByTagName('h1')[1]
let h2 = document.getElementsByTagName('h2')
let p = document.getElementsByTagName('p')[0]
let div = document.querySelector('#hero')
let changeLanguage = document.getElementById('global')

// change language function
let language = JSON.parse(localStorage.getItem('User-language')) || 'Eng'


function changeLanguageFunct() {
    if (language === 'Eng') {
        language = 'Geo'
    }
    else if (language === 'Geo') {
        language = 'Kore'
    }
    else if (language === 'Kore') {
        language = 'Eng'
    }


    localStorage.setItem('User-language', JSON.stringify(language))

    changeL()
}

function changeL() {
    // English --> Georgia
    if (language === 'Geo') {
        // header - nav tag text change
        let navArr = ['მისალმება', 'შესახებ', 'კონტაქტი', 'მისალმება', 'შესახებ', 'კონტაქტი']
        let index = 0

        for (let element of nav) {
            element.textContent = navArr[index];
            index++
        }

        // header - button text change
        let buttonArr = ['რეგისტრაცია', 'შესვლა', 'რეგისტრაცია', 'შესვლა', 'უკან']
        index = 0
        for (let element of button) {
            element.textContent = buttonArr[index]
            index++
        }

        // main h1 text change
        h1.textContent = 'კეთილი იყოს თქვენი სტუმრობა'

        // main h2 text change
        let h2Arr = ['შესახებ', 'კონტაქტი']
        index = 0
        for (let element = 1, index = 0; h2.length > element; index++, element++
        ) {
            h2[element].textContent = h2Arr[index]
        }

        // main (about text)
        p.textContent = 'ეს საიტი მომხმარებლისთვის პერსონალური გზამკვლევია. აქ იქნება შესასრულებელი საქმეების სია, პატარა თამაშები და ყველაფერი დანარჩენი, რაც მომხმარებელს სიამოვნებას მიანიჭებს.'
        // 
    }
    // Georgia --> Korean
    else if (language == 'Kore') {
        // header - nav tag text change
        let navArr = ['환영', '웹사이트에 관하여', '문의하기', '환영', '웹사이트에 관하여', '문의하기']
        let index = 0

        for (let element of nav) {
            element.textContent = navArr[index];
            index++
        }

        // header - button text change
        let buttonArr = ['등록', '로그인', '등록', '로그인', '뒤쪽에']
        index = 0
        for (let element of button) {
            element.textContent = buttonArr[index]
            index++
        }

        // main h1 text change
        h1.textContent = '오신 것을 환영합니다'
        h2[0].innerHTML = `
            <span class="span1">S</span>
            <span class="span2">a</span>
            <span class="span3">l</span>
            <span class="span4">a</span>
            <span class="span5">N</span>
            <span class="span6">a</span>
            <span class="span1">-에</span>
            `
        div.style.flexDirection = 'column-reverse'

        // main h2 text change
        let h2Arr = ['웹사이트에 관하여', '문의하기']
        index = 0
        for (let element = 1, index = 0; h2.length > element; index++, element++
        ) {
            h2[element].textContent = h2Arr[index]
        }

        // main (about text)
        p.textContent = '이 사이트는 사용자를 위한 개인 가이드입니다. 할 일 목록, 간단한 게임 등 사용자에게 즐거움을 선사할 모든 것이 준비되어 있습니다'
        // 

    }
    // Korean --> English
    else if (language == 'Eng') {
        // header - nav tag text change
        let navArr = ['welcome', 'About', 'Contact', 'welcome', 'About', 'Contact']
        let index = 0

        for (let element of nav) {
            element.textContent = navArr[index];
            index++
        }

        // header - button text change
        let buttonArr = ['SingUp', 'LogIn', 'SingUp', 'LogIn', 'Back']
        index = 0
        for (let element of button) {
            element.textContent = buttonArr[index]
            index++
        }

        // main h1 text change
        h1.textContent = 'Welcome to'
        h2[0].innerHTML = `
        <span class="span1">S</span>
        <span class="span2">a</span>
        <span class="span3">l</span>
        <span class="span4">a</span>
        <span class="span5">N</span>
        <span class="span6">a</span>
            `
        div.style.flexDirection = 'column'

        // main h2 text change
        let h2Arr = ['About', 'Contact']
        index = 0
        for (let element = 1, index = 0; h2.length > element; index++, element++
        ) {
            h2[element].textContent = h2Arr[index]
        }

        // main (about text)
        p.textContent = 'This site is a personal guide for the user. There will be a to-do list, small games, and everything else that the user will enjoy.'
        // 
    }
}
changeLanguage.addEventListener('click', changeLanguageFunct)

// changeLanguageFunct()
changeL()

// Menu things
// declaratin variable
let menu = document.querySelector('#menu')
let menuTask = document.querySelector('#navigation')

// listener
let isOpen = false
menu.addEventListener('click', () => {
    if (!isOpen) {
        menuTask.style.right = '0'
        menu.style.trasfrorm = 'rotate(90deg)'
        menu.className = "fa-solid fa-xmark"
        isOpen = true
    } else {
        menuTask.style.right = '-100%'
        isOpen = false;
        menu.className = 'fa-solid fa-bars'
    }
})
