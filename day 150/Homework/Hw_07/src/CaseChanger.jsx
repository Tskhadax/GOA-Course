import { useState } from 'react'

function CaseChanger() {
    let [value, setCase] = useState('hello, this is test text')

    return (
        <div className='h-[100vh] flex justify-center items-center flex-col gap-20 bg-gray-600'>
            <h1 className='text-[60px] text-white font-[700]'>{value}</h1>
            <button onClick={() => {
                setCase(
                    value.toUpperCase() === value ? value.toLowerCase() 
                    : value.toUpperCase()
                )
            }}
            className='px-[25px] py-[10px] bg-black text-white cursor-pointer text-[18px] font-[600] rounded duration-300 ease-in-out hover:bg-gray-700 hover:translate-y-5'>Change case</button>
        </div>
    )
}

export default CaseChanger
