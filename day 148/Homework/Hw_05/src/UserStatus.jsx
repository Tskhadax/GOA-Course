function UserStatus({ userName, isOnilne }) {
    // Task 01
    if (isOnilne) {
        return (
            <h1>{userName} is Online</h1>
        )
    } else {
        return(
            <h1>{userName} is Ofline</h1>
        )
    }

    // Task 02
    return (isOnilne ? <h1>{userName} is Online</h1> : <h1>{userName} is Ofline</h1>)
}

export default UserStatus
