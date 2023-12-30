import { useReducer, useState } from "react";
import Header from "@/components/Header";

import { contactsReducer, State, Contact } from "@/reducer/contactsReducer";
import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/ContactList";

const intialState: State = {
  contacts: [],
};

function App() {
  const [state, dispatch] = useReducer(contactsReducer, intialState);

  console.log("state", state);
  return (
    <div className="container mt-4">
      <Header />
      <ContactForm dispatch={dispatch} />
      <hr />
      {state.contacts.length > 0 && <ContactList contacts={state.contacts}/>}
    </div>
  );
}

export default App;
