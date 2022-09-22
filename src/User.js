import React from 'react'

function User(props) {

  return (
    <div>
        <h2>Good Morning {props.data.name} </h2>
    </div>
  )
}

export default User