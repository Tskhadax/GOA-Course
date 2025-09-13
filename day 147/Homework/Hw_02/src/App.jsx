import User from './User.jsx'

function App() {
    return (
      <>
        <User name='user 01' age={16} bio="Not found"/>
        <User name='user 02' bio="Not found"/>
        <User age={16} bio="Not found"/>
        <User name='user 04' age={16}/>
        <User name='user 05'/>
      </>
    )
}

export default App
