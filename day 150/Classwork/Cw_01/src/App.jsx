//    1) საიტზე დაამატეთ ღილაკი ხოლო როდესაც ამ ღილაკს დააჭერთ ამის შემდეგ ღილაკის ქვემოთ გამოჩნდეს თქვენი სახელი და გვარი

import { useState } from 'react'

function App() {
  const [name, setName] = useState('Hello')

  function click() {
    setName('Ana Puturidze')
  }

  return (
    <div>
      <button onClick={click}>Click me</button>
      <p>{name}</p>
    </div>
  )
}


export default App
