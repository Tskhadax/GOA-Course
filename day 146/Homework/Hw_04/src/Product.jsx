import './Product.css'

function Product(props) {
    return (
        <>
            <div className="product">
                <img src={props.image} alt="" />
                <h1>{props.price}</h1>
                <h3>{props.title}</h3>
            </div>
        </>
    )
}

export default Product