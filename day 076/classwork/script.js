// 1)შექმენით რამდენიმე თეგი HTML-ში და javascript-ის გამოყენებით მიეცით სასურველი სტილები და შეუცვალეთ კონტენტი
let paragraph = document.getElementsByTagName("p")
let heading = document.getElementsByTagName("h1")
paragraph[0].style.fontSize = "30px"
heading[0].style.backgroundColor = "blue"
heading[0].style.color = "purple"
paragraph[0].innerHTML = "hello me"

