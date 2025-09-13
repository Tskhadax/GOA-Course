// 5) შექმენით <DrawRec/> კომპონენტი, რომელიც მიიღებს props ებს:
// --> color
// --> width
// --> height
// ამ კომპონენტმა უნდა დაარენდეროს ოთხკუთხედი, რომელსაც ექნება გარკვეული სიგრძე, სიგანე და Background ფერი


import './App.css'
import DrawRec from './DrawRec.jsx'

function App() {
  return (
    <>
      <DrawRec color='red' width='300px' height='400px' />
      <DrawRec color='blue' width='400px' height='300px' />
      <DrawRec color='green' width='100px' height='200px' />
    </>
  )
}

export default App
