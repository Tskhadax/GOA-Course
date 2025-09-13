/* 
10) შექმენით Accordion კომპონენტი. ეკრანზე უნდა იყოს ერთგვარი ღილაკი, რომლის შიგთავსიც იქნება:
--> 'Open Accordion', თუ აკორდიონი დახურულია
--> 'Close Accordion', თუ აკორდიონი ღიაა
ღილაკზე დაჭერით, ეკრანზე(სადაც გინდათ) უნდა გამოჩნდეს div ტეგი რაიმე შიგთავსით/ტექსტით
    -აკორდიონი ღიაა, როცა ეს div ტეგი ჩანს
    -აკორდიონი დახურულია, როცა ეს div ტეგი არ ჩანს(ვგულისხმობ HTML სტრუქტურა საერთოდ არაა)
*/

import Accordion from "./Accordion"
import { useState } from 'react'

function App() {
  let [open, setOpen] = useState(false)
  return (
    <div className='bg-gray-700 min-h-[100vh] flex flex-col items-center justify-center gap-[10px] overflow-hidden'>
      <h1 className="text-white font-[800] text-[40px]">{open ? 'აკორდიონი ღიაა' : 'აკორდიონი დახურულია'}</h1>
      <button onClick={() => { setOpen(!open) }} className={`my-[6px] py-[5px] px-[15px] cursor-pointer font-[600] rounded ${open ? 'bg-red-400': 'bg-green-400'}`} >
        {open ? 'Close Accordion' : 'Open Accordion'}
      </button>
      {open ? <div className="h-[300px] ">
        <Accordion /></div> :
        <div className="h-[300px]">
        </div>}
    </div>
  )
}

export default App
