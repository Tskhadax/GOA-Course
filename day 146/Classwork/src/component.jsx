//   1) შექმენით მანქანის ქარდები სადაც იქნება სახავდასხვა განსხვავებული მანქანების ინფორმაცია ფოტო ფასი აღწერა და ასე შემდეგ, გააკეთეთ ერთი კომპონენტი და გადაეცით props ები


function component(parameter) {
    return (
        <div>
            <img src={parameter.img} alt="" />
            <h2>{parameter.title}</h2>
            <p>{parameter.price}</p>
        </div>
    )
}

export default component
