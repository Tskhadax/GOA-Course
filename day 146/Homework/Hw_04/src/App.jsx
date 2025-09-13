// 4) შექმენით <Product /> კომპონენტი, რომელიც მიიღებს:
// --> title
// --> price
// --> image
// რამოდენიმეჯერ გამოიყენეთ ეს კომპონენტი სხვადასხვა მონაცემებით

import './App.css'
import Product from './Product.jsx'

function App() {
  return (
    <>
      <Product title='Apple Watch' price="$399" image="https://i.pinimg.com/736x/2b/c5/a6/2bc5a6a8634fbb69ba0e066aa5676c39.jpg" />
      <Product title='iPhone' price="$1199" image="https://i.pinimg.com/736x/43/20/46/4320460419995c74ab49734f3ef0bc2d.jpg" />
      <Product title='Apple AirPods' price="$199" image="https://i.pinimg.com/736x/a5/b3/20/a5b320659d522b21ef72a47279f29ec5.jpg" />
      <Product title='Mac Book' price="$999" image="https://i.pinimg.com/1200x/bd/bd/1b/bdbd1b0f8c1d53f6d388480b7df08e4c.jpg" />
    </>
  )
}

export default App