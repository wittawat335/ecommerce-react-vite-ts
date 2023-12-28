import { useReducer, useState } from "react";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

import { contactsReducer, State, Contact } from "./reducer/contactsReducer";

const intialState: State = {
  contacts: [],
};

function App() {
  const [state, dispatch] = useReducer(contactsReducer, intialState);
  return (
    <div className="container mt-4">
      <Header></Header>
      <ContactForm dispatch={dispatch}></ContactForm>
    </div>
  );
}

export default App;
