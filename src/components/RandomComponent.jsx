import React, { useState, useReducer, useEffect } from "react";



const RandomComponent = () => {

    const INITIALSTATE = {
        message: 'Look what i can do',
        name: ''
    }


    const [input, setInput] = useState('')
    //const [name, setName] = useState('')

    function inputHandle(e){
        setInput(e.target.value)
    }

    function takeInput(){
        dispatch({type: 'change_name', payload: [input]})
        setInput('')
    }

    function reducer(state, action){
        switch (action.type){
            case 'ENTER':
                return {message: 'HOLA'}
            case 'LEAVE':
                return {message: 'CHAU'}
            case 'change_name':
                let [name] = action.payload
                return {...state, name: name}
            default:
                return new Error('Whatever')
        }
    }

    useEffect(() => {
        document.title="hola"
    }  
    ,[])

    const [ state, dispatch ] = useReducer(reducer, INITIALSTATE)

    return (
        <>
            <h1 
            onMouseEnter={() => dispatch({type: 'ENTER'})}
            onMouseLeave={() => dispatch({type: 'LEAVE'})}>
                {state.message}
            </h1>

            <input type="text" placeholder="Enter your name!" value={input} onChange={inputHandle}/>
            <button onClick={takeInput} >Magic!</button>

            <p>
                Hello {state.name}
            </p>
        </>
    )
}

export default RandomComponent