// 5) შექმენით UserStatus კომპონენტი, რომელიც მიიღებს: 
// --> userName
// --> isOnline = false (ნაგულისხმები მნიშვნელობა)
// თუ isOnline == true კომპონენტი დაარენდერებს `{userName} is Online`
// თუ isOnline == false კომპონენტი დაარენდერებს `{userName} is Offline`
// გააკეთეთ ამ კომპონენტის ორი ვარიანტი:
//     1. if else გამოყენებით
//     2. ternary operator გამოყენებით


import UserStatus from './UserStatus.jsx'

function App() {
  return (
    <UserStatus userName='Ana' isOnilne={true}/>
  )
}

export default App
