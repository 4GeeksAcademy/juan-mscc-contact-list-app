import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import RandomComponent from "../components/RandomComponent.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const {store, dispatch} =useGlobalReducer()

	useEffect(() => {
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
	}, [])

	return (
		<div className="container">
		  <ul className="list-group">
			{/* Map over the 'todos' array from the store and render each item as a list element */}
			{store && store.contacts?.map((item, index) => {
			  return (
				<li
				  key={index}  // React key for list items.
				  className="list-group-item d-flex justify-content-between"> 
				  
				  
				  <p>{item.name}</p>
				  
				  {/*<button className="btn btn-success" 
					onClick={() => dispatch({
					  type: "add_task", 
					  payload: { id: item.id, color: '#ffa500' }
					})}>
					Change Color
				  </button>*/}
				</li>
			  );
			})}
		  </ul>

		  {/*<RandomComponent />*/}
		</div>
	)
}; 