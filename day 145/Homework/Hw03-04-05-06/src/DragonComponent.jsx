import dragon from '../public/Dragon.jpg'
import './Component.css'

function DragonComponent(info) {
    return (
        <div className="card">
            <div className="image-div">
                <img src={dragon} alt="" />
            </div>
            <div className="infos">
                <h1>{info.name}</h1>
                <p>This is {info.name}'s photo</p>
            </div>
            <button>View</button>
        </div>
    )
}

export default DragonComponent