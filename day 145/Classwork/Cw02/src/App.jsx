// 2) შექმენით css ფაილი და დააიმპორტეთ თქვენს თითოეულ კომპონენტში(თუ გნებავთ თითოეული კომპონენტისთვის ცალკე css შექმენით), თქვენს საიტს უნდა ჰქონდეს გასტილული Header და Footer კომპონენეტები. ასევე შექმენით რაიმე Card კომპონენეტი. გადმოიწერეთ რაიმე სურათი, შეინახეთ თქვენი პროექტის ფოლდერში და დააიმპორტეთ იგი Card კომპონენტში. საბოლოოდ დაარენდერეთ ეს სურათი. 

import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Card/>
      <Footer />
    </>
  )
}

export default App