export const initialStore=()=>{
  return{
    contacts: [
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_contact':

      const { contact } = action.payload
      console.log(contact)
      console.log(store)
      return {
        ...store,
        contacts: [...store.contacts, contact ]
      };

    case 'set_contacts':

      const { contactsList } = action.payload
      
      return {
        ...store,
        contacts: contactsList
      };

    default:
      throw Error('Unknown action.');
  }    
}
