// 3) შექმენით <Greeting /> კომპონენტი, რომელიც მიიღებს name props ს
// ამ კომპონენტმა უნდა დაარენდეროს: 'გამარჯობა {name}'
// --> რამოდენიმეჯერ გამოიყენეთ ეს კომპონენტი სხვადასხვა სახელებით 

import './App.css'
import Greeting from './Greeting.jsx'

function App() {
    return (
      <>
        <Greeting name="Nini"/>
        <Greeting name="Gio"/>
        <Greeting name="Ana"/>
      </>
    )
}

export default App
