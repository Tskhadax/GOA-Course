// 4) შექმენით უნივერსალური Card კომპონენტი. ამ კომპონენტს უნდა ჰქონდეს:
// --> children
// --> topMargin = False (By Default - ნაგულისხმები მნიშვნელობა)
// --> marginAmount = 10 (By Default - ნაგულისხმები მნიშვნელობა(პიკსელებში))
// Card კომპონენტმა მისი 'შვილები' უნდა გაახვიოს ერთ დივში
// ამ ერთ დივს გაუწერეთ ისეთი სტილები, რომ ვიზუალურად დაემსგავსოს Card_ს (ჩარჩოები, ჩრდილები, BackGround და ა.შ.)
// თუ topMargin == True მაშინ Card ს ჰქონდეს მარგინი
// თუ topMargin == True და კომპონენტს გავუწერეთ marginAmount პროპსი, Card_ს უნდა ჰქონდეს შესაბამისი ზომის margin

function Card({ topMargin = false, marginAmoun = 10, children }) {
    if (!topMargin) {
        return (
            <>
                <div style={{ width: '200px', height: '400px', backgroundColor: 'red', boxShadow: '0px 0px 20px red' }}>
                {children}
                </div>
            </>
        )
    } else {
        return (
            <>
                <div style={{ marginTop: `${marginAmoun}px`, width: '200px', height: '400px', backgroundColor: 'blue', boxShadow: '0px 0px 20px blue' }}>
                {children}
                </div>
            </>
        )
    }

}

export default Card
