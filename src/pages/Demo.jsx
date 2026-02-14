// Import necessary components from react-router-dom and other parts of the application.
import React, {useState} from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  const[ name , setName ] = useState('')
  const[ email , setEmail ] = useState('')
  const[ phone , setPhone ] = useState('')
  const[ address , setAddress ] = useState('')

  function saveContact(e){
    e.preventDefault();

    if (name.trim() == ''){
      alert('Name is a requiered field')
      return null
    }

    const body = {
      name: name,
      email: email,
      phone: phone,
      address: address
    }

    fetch('https://playground.4geeks.com/contact/agendas/Gordon%20Freeman/contacts', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        address: address
      })
    })
    .then((resp => {console.log(resp)}))

  }

  return (
    <div className="container d-flex flex-column">

      <h1 className="text-center">Add a new Contact</h1>
      
      <form onSubmit={saveContact} className="container">

        <div className="mb-3">
          <label htmlFor="fullName" className='form-label'>Full Name: </label>
          <input type="text" id='fullName' name='fullName' className='form-control requiered' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className='form-label'>Email: </label>
          <input type="text" id='email' name='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className='form-label'>Phone: </label>
          <input type="text" id='phone' name='phone' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label htmlFor="address" className='form-label'>Address: </label>
          <input type="text" id='address' name='address' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        
        

        
      </form>

      
      <Link to="/">
        Back to contact list
      </Link>
    </div>
  );
};
