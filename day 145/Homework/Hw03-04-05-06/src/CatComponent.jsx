import cat from '../public/Cat.jpg'
import './Component.css'

function CatComponent(info) {
    return (
        <div className="card">
            <div className="image-div">
                <img src={cat} alt="" />
            </div>
            <div className="infos">
                <h1>{info.name}</h1>
                <p>This is {info.name}'s photo</p>
            </div>
            <button>View</button>
        </div>
    )
}

export default CatComponent