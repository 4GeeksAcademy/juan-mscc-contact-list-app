import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import RandomComponent from "../components/RandomComponent.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Contact from "../components/Contact.jsx";

export const Home = () => {

	const {store, dispatch} =useGlobalReducer()

	function updateContacts(){
		console.log('Updating!')
		fetch('https://playground.4geeks.com/contact/agendas/Gordon%20Freeman/contacts')
		.then((resp) => {
			if(!resp.ok) {throw new Error('Error')}
			console.log(resp)
			return resp.json()
		})
		.then((resp) => {
			console.log(resp.contacts)
			dispatch({type: 'set_contacts', payload: {contactsList: resp.contacts}})
		})
		.catch((error) => {
			console.error(error, error.message)
		})
	}

	useEffect(() => {
		updateContacts()
	}, [])

	return (
		<div className="container">
		  <ul className="list-group">
			{store && store.contacts?.map((item) => {
			  return (
				<Contact item={item} id={item.id} updateContacts={updateContacts} key={item.id}/>
			  );
			})}
		  </ul>

		  {/*<RandomComponent />*/}
		</div>
	)
}; 