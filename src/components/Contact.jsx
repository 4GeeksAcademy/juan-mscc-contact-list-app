import React from "react";
import { Link } from "react-router-dom";
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
                    <img src="https://placehold.co/200" className='rounded-circle img-fluid object-fit-cover'/>
                </div>

                <div className='w-50 text-start'>
                    <p className="fs-3">{item.name}</p>
                    <p className="fs-5">{item.phone}</p>
                    <p className="fs-5">{item.email}</p>
                    <p className="fs-5">{item.address}</p>
                </div>

                <div className="py-3">
                    <Link to={'/editContact/' + id}> <i className="bi bi-pencil px-2"></i></Link>
                    <i className="bi bi-trash3-fill px-2" onClick={() => deleteContact(id)}></i>
                </div>
                
            </li>
    );
}