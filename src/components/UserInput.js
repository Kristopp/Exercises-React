import React from 'react'

const UserInput = (props) => {
    return (
        <div>
            <input onChange={props.changeName}></input>
        </div>
    )
}

export default UserInput
