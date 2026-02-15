export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
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
