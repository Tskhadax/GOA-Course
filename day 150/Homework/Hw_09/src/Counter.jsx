import { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0)

    return (
        <div className='bg-gray-900 h-[100vh] flex justify-center items-center flex-col gap-[20px]'>
            <h1 className={`text-[60px] font-[800] ${count > 0 ? 'text-green-400' : count === 0 ? 'text-white' : 'text-red-400'}`}>{count}</h1>
            <h3 className='text-[30px]'>{count > 0 && count < 100 ? '😊': count == 0 ? '🤔': count < 0 ? '😢': '🫨'}</h3>
            <div className='flex items-center gap-[20px]'>
                <button onClick={() => {
                    setCount(count - 1)
                }} 
                className='px-[20px] bg-black text-white rounded font-[900] text-[30px] cursor-pointer duration-100 ease-out hover:bg-red-500'>-</button>
                <button onClick={()=> {
                    setCount(0)
                }} className='px-[20px] py-[7px] bg-black text-white rounded font-[600] text-[20px] cursor-pointer duration-100 ease-out hover:bg-orange-500'>Reset</button>
                <button onClick={() => {
                    setCount(count + 1)
                }} className='px-[20px] bg-black text-white rounded font-[900] text-[30px] cursor-pointer duration-100 ease-out hover:bg-green-500'>+</button>
            </div>
        </div>
    )
}

export default Counter
