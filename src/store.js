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
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
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
      console.log(contactsList)
      console.log(store)
      return {
        ...store,
        contacts: contactsList
      };

    default:
      throw Error('Unknown action.');
  }    
}
