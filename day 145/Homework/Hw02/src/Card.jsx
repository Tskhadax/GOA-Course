
import './Card.css'

function Card(parameter) {
    return (
        <>
            <h1>Hello {parameter.name}!</h1>
            <p>This is my <span>{parameter.type}</span> Task</p>
        </>
    )
}

export default Card