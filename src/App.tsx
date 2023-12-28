import { useReducer, useState } from "react";
import Header from "@/components/Header";

import { contactsReducer, State, Contact } from "@/reducer/contactsReducer";
import ContactForm from "@/components/ContactForm";

const intialState: State = {
  contacts: [],
};

function App() {
  const [state, dispatch] = useReducer(contactsReducer, intialState);

  console.log("state", state);
  return (
    <div className="container mt-4">
      <Header></Header>
      <ContactForm dispatch={dispatch}></ContactForm>
    </div>
  );
}

export default App;
