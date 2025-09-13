function UserFriends({ userlist = [] }) {
  if (userlist.length === 0) {
    return <p>You Don't Have Friends Yet.</p>
  }

  return (
    <div>
      <p>This is Your Friends list:</p>
      <ul>
        {userlist.map((item) => (
          <li >
            {item.profilePic} {item.name} is {item.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserFriends