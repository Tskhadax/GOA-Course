function Li({complated, id, title}) {
    return (
        <li className={`flex items-center w-[100%] justify-between pl-5 pr-5 rounded pt-2 pb-2 ${complated ? 'bg-green-300': 'bg-red-300'}`} >
            <p className="w-[70%]">{id}. {title}</p>
            <div className="flex items-center relative">
                <img src="/public/edit.png" alt="" className="w-[45px] object-cover relative left-[28%] cursor-pointer" />
                <img src="/public/delete.png" alt="" className="w-[45px] object-cover relative left-[15%] bottom-0.5 cursor-pointer" />
                <input type="checkbox" className="ml-5 size-5 relative right-0.5 cursor-pointer" checked={complated} />
            </div>
        </li>
    )
}

export default Li
