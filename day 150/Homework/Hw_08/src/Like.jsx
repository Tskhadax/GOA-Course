import { useState } from 'react'

function Like({ post, title, profileImage, name }) {
    let [like, setLike] = useState({ icon: '🤍', count: 50 })

    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-[10px] rounded  px-[20px] py-[15px] bg-gray-800 max-w-[min-content]'>
                <div className='flex items-center gap-[20px]'>
                    <img src={profileImage} alt={profileImage} className='w-[40px] h-[40px] object-cover rounded-[50%]' />
                    <p className='text-white font-[800] leading-[18px]'>{name} <br /> <span className='font-[100] text-[12px]'>2h 🌐</span></p>
                </div>
                <p className='text-white'>{title}</p>
                <div className='h-[300px] w-[250px] object-cover duration-300 ease-in-out overflow-hidden'>
                    <img src={post} alt={post} className='object-cover duration-300 ease-in-out overflow-hidden hover:scale-[1.1] cursor-pointer' />
                </div>
                <div className='flex items-center justify-between pb-[10px]'>
                    <div className='flex gap-[3px] items-center'>
                        <button className='text-[28px] cursor-pointer active:scale-[0.7] duration-100 ease-in-out ' onClick={() => {
                            if (like.icon === '🤍') {
                                setLike({ icon: '❤️', count: like.count + 1 })
                            } else {
                                setLike({ icon: '🤍', count: like.count - 1 })
                            }
                        }}>{like.icon}</button>
                        <p className='text-white font-[800]'>{like.count}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='text-[28px] cursor-pointer'>💬</div>
                        <p className='text-white font-[800]'>10</p>
                    </div>
                    <div className='flex items-center justify-between pr-[10px]'>
                        <div className='text-[28px] cursor-pointer pb-[2px]'>📩</div>
                        <p className='text-white font-[800]'>5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Like
