// 3) შექმენით Container კომპონენტი, ამ კომპონენტს ჰქონდეს რაიმე თავისი კონტენტი(HTML ტეგები გაუწერეთ). გარდა ამისა გადაეცით children(სადმე დაარენდერეთ)

function Container({children}) {
    console.log(children)
    return (
        <div className="Card">
            <h1>Card info: </h1>
            {children}
        </div>
    )
}

export default Container