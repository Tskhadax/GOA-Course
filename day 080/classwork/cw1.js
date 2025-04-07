// 1) საიტზე დაამატეთ ტექსტი. გაუწერეთ მას Javascript-ის კოდი ისე, რომ ტექსტზე დაჭერისას შეიცვალოს იგი და ეკრანზე მის ნაცვლად გამოვიდეს ახალი წინადადება;

p = document.getElementsByTagName("p")

// function changeContent(){
//     p[0].style.color = "red"
//     p[0].innerHTML = "Fuck YOu"
// }


p[0].addEventListener("click" , function(){
    p[0].innerHTML = "Hello me"
})
