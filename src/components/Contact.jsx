import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Contact({item, id, updateContacts}){
    
    const {store, dispatch} =useGlobalReducer()
    
    function deleteContact(id){
        fetch(`https://playground.4geeks.com/contact/agendas/Gordon%20Freeman/contacts/${id}`, {
            method: 'DELETE'
        })
        .then((resp) => {
            if(!resp.ok) {throw new Error('Error detected')}
            return
        })
        .then(() => {
            updateContacts()
        })
        .catch((error)  => {
            console.error(error.message)
        })
    }

    return (
            <li
            key={id}  // React key for list items.
            className="list-group-item d-flex justify-content-between px-4"> 
                
                <div>
                    <img src="https://placehold.co/300" className='rounded-circle img-fluid object-fit-cover'/>
                </div>

                <div className='w-50 text-start'>
                    <p className="fs-3">{item.name}</p>
                    <p className="fs-5">{item.phone}</p>
                    <p className="fs-5">{item.email}</p>
                    <p className="fs-5">{item.adress}</p>
                </div>

                <div className="py-3">
                    <i className="bi bi-pencil px-2"></i>
                    <button onClick={() => deleteContact(id)}><i className="bi bi-trash3-fill px-2"></i></button>
                </div>
                
            </li>
    );
}