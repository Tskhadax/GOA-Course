import dog from '../public/Dog.jpg'
import './Component.css'

function DogComponent(info) {
    return (
        <div className="card">
            <div className="image-div">
                <img src={dog} alt="" />
            </div>
            <div className="infos">
                <h1>{info.name}</h1>
                <p>This is {info.name}'s photo</p>
            </div>
            <button>View</button>
        </div>
    )
}

export default DogComponent