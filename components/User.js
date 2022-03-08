import React from 'react'

function User({users}) {
  return (
    <div>
      {
          users.map((user)=>{
              return <div key={user.key}>
                  <p>{user.name} and {user.email}</p>
              </div>
          })
      }
    </div>
  )
}

export default User