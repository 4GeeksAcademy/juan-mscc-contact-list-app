import React, { useState, useReducer } from "react";



const RandomComponent = () => {

    const INITIALSTATE = {
        
    }

    function reducer(state, action){
        switch (action.type){
            case 'ENTER':
                return 'HOLA'
            case 'LEAVE':
                return 'CHAU'
            default:
                return new Error('Whatever')
        }
    }

    const [ state, dispatch ] = useReducer(reducer, 'Look what i can do')

    return (
        <h1 
        onMouseEnter={() => dispatch({type: 'ENTER'})}
        onMouseLeave={() => dispatch({type: 'LEAVE'})}>
            {state}
        </h1>
    )
}

export default RandomComponent