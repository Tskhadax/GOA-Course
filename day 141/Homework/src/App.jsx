//    1) შექმენით ახალი ფაილი დააყენეთ vite და დაწერეთ პატარა ნიუსების საიტი (თქვენ აარჩიეთ თემა) ასევე დაამატეთ (სურათები) და შეეცადეთ რაც შეიძლება მეტი თეგი გამოიყენოთ. გასტილეთ inline css_ით

function App() {
  return (
    <body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh'}}>
      <header style={{ width: '90%', margin: '0', padding: '0' }}>
        <nav style={{ width: '100%' }}>
          <ul style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', listStyle: 'none', fontSize: '20px', fontWeight: 700, cursor: 'pointer' }}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Log in</li>
            <li>Sign up</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Kawasaki Ninja 400</h1>
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <p>
            The Ninja 400 offers the largest displacement in its category at 399cc with the sophistication of twin-cylinder power. Approachable power, superb ergonomics and class-leading performance offer a smooth, manageable ride that's ideal for new riders while also alluring for experienced riders. A low seat height and aggressive styling with LED headlights make the Ninja 400 the ideal choice for riders looking to enter the sport-riding scene.
          </p>
          <img src="https://kawasaki-global-admin.com/ContentStorage/CKM/ProductTrimGroup/63/ce32baf5-912f-42bd-be60-16610ec8ebf2.jpg?w=750" alt="" style={{width:'500px'}} />
        </div>
      </main>
    </body>
  )
}




export default App
