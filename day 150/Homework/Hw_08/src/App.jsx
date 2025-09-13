/* 
8) შექმენით Like კომპონენტი. დაარენდერეთ ეკრანზე:
--> თეთრი გული, თუ არ არის დალაიკებული(initial State)
--> წითელი/გაფერადებული გული, როცა გულზე დავაწკაპებთ.
უნდა შეიძლებოდეს დალაიქება&ლაიიქის მოხსნა
გამოიყენეთ გულის svg + tailwind
*/

import Like from './Like.jsx'

function App() {
  return (
    <div className='bg-gray-900 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] min-h-[100vh] gap-[20px] justify-center items-center p-[50px]'>
      <Like post='https://i.pinimg.com/736x/cc/63/4d/cc634d99cad406656d1f4e78e5308947.jpg' title='Seoul, South Korea ❤️' profileImage='https://i.pinimg.com/1200x/ff/e3/d3/ffe3d375f6cee257eb7fb8844e804571.jpg' name='An_nA' />
      <Like post='https://i.pinimg.com/736x/8c/ed/2a/8ced2a656e5c4806de544f83eb7cc92b.jpg' title='Shanghai, China ❤️' profileImage='https://i.pinimg.com/1200x/ff/e3/d3/ffe3d375f6cee257eb7fb8844e804571.jpg' name='An_nA' />
      <Like post='https://i.pinimg.com/736x/96/b3/ad/96b3adacfa5fba42c05b0e4f31e5ed49.jpg' title='London, UK ❤️' profileImage='https://i.pinimg.com/1200x/ff/e3/d3/ffe3d375f6cee257eb7fb8844e804571.jpg' name='An_nA' />
      <Like post='https://i.pinimg.com/736x/cc/63/4d/cc634d99cad406656d1f4e78e5308947.jpg' title='New York, USA ❤️' profileImage='https://i.pinimg.com/1200x/01/64/6d/01646db9d878ac3f59d272f6877598cf.jpg' name='An_nA' />
      
    </div>
  )
}

export default App
