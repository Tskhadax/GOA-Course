/* 
7) შექმენით UserCard კომპონენტი. რომელიც მიიღებს: სახელს, გვარს, ასაკს, სქესს, მეგობრების სიას,(ისეთი როგორც დავალება 6 ში), სტატუსს(isOnline) და ა.შ.
-> მოახდინეთ props დესტრუქცია ფუნქციის პარამეტრშივე
-> გააფორმეთ და გამოსახეთ ეს მონაცემები
-> გამოიყენეთ დავალება 5 ის კომპონენტი რათა გამოსახოთ User ის სტატუსი
-> გამოიყენეთ დავალება 6 ის კომპონენტი რათა გამოსახოთ User ის მეგობრები
ცოტა შეალამაზეთ ეს კომპონენტი
*/

import UserCard from './UserCard.jsx'
function App() {
  return (
    <div>
      <UserCard name='Ana' surname='Puturidze' age={16} grender='F' friendList={[{ name: 'Friend-01', status: 'Online' }, { name: 'Friend-02', status: 'Ofline' }]} />
    </div>
  )
}

export default App
