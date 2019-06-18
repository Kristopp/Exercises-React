import React from 'react'
import './Person.css'

const Person = (props) => {
    return (
        
        <div className ="Person">
            <input type="text" onChange={props.changed} value={props.name}/>
            <p onClick={props.button}>{`My name is ${props.name} and i am ${props.age}`}</p>
            <p>{props.dontChange}</p>
            
        </div>
    )
}

export default Person
