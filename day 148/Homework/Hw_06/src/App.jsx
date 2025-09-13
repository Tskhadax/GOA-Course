/* 
6) შექმენით UserFriends კომპონენტი რომელიც მიიღებს შემდეგი სახის სიას:
[
  { name: 'Jon', status: 'offline', profilePic: '😎'}, 
  { name: 'Bob', status: 'online', profilePic: '🤗' }
]
ამ კომპონენტმა უნდა დაამუშავოს ეს სია და დაარენდეროს:
    This is Your Friends list:
        * 😎 Jon is offline
        * 🤗 Bob is online
თუ სია ცარიელია -> You Don't Have Friends Yet.
P.S დაიხმარეთ 5 დავალების კომპონენტი
*/

import UserFriends from './UserFriends.jsx'

function App() {
  return (
    <>
      <UserFriends userlist={[
        { name: 'Jon', status: 'offline', profilePic: '😎', id: 1},
        { name: 'Bob', status: 'online', profilePic: '🤗', id: 0 }
      ]} />
      <UserFriends />
    </>
  )
}

export default App
