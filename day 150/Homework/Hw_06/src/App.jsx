// 6) ეკრანზე გამოაჩინეთ რიცხვი 2; შექმენით ღილაკი.
// --> ამ ღილაკზე ყოველ დაჭერისას რიცხვი გაორმაგდეს.

import { useState } from "react"

function App() {
  let [value, setMultiply] = useState(2)

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg-gray-600 gap-10 w-full'>
      <h1 className='text-7xl text-white font-[900]'>{value}</h1>
      <div className="flex gap-10">
        <button onClick={() => {
          setMultiply(value * 2)
        }} className="bg-black text-white px-8 py-3 text-[20px] tracking-[2px] font-[500] rounded cursor-pointer duration-300 ease-in-out hover:bg-green-600 hover:translate-y-3 active:scale-[1.2] active:bg-green-500">Click</button>
        <button onClick={() => {
          setMultiply(2)
        }} className="bg-black text-white px-8 py-3 text-[20px] tracking-[2px] font-[500] rounded cursor-pointer duration-300 ease-in-out hover:bg-red-900 hover:translate-y-3 active:scale-[1.2] active:bg-red-500" >Reset</button>
      </div>
    </div>
  )
}

export default App
