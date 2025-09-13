function Card(props) {
    console.log(props)
    return (
        <div>
            <h1>This is title</h1>
            <p>info: </p>
            {props.children}
        </div>
    )
}

export default Card
