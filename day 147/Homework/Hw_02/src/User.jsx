// 2) შექმენით User კომპონენეტი, რომელსაც ექნება:
// --> name
// --> bio = 'No Bio' (By Default - ნაგულისხმები მნიშვნელობა)
// --> age = 18 (By Default - ნაგულისხმები მნიშვნელობა)
// მოახდინეთ props ობიექტის დესტრუქცია ფუნცქიის პარამეტრშივე 
// შექმენით ეს კომპონენტი რამოდენიმეჯერ(სცადეთ age props ის არ გადაცემა)

function User({ name, bio = "No Bio", age = 18 }) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Bio: {bio}</h2>
            <h3>Age: {age}</h3>
        </div>
    )
}

export default User