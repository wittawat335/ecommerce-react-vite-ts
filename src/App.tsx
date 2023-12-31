import { useReducer, useState, useEffect } from "react";
import Header from "@/components/Header";

import { contactsReducer, State, Contact } from "@/reducer/contactsReducer";
import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/ContactList";
import ModalDialog from "./components/ModalDialog";

const intialState: State = {
  contacts: [],
};

function App() {
  const [state, dispatch] = useReducer(contactsReducer, intialState);
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);

  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal((show) => !show);
  };

  const handleEdit = (id: number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    toggleModal();
  };

  //console.log("state", state);
  return (
    <div className="container mt-4">
      <Header />
      <ContactForm
        dispatch={dispatch}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
      />
      <hr />
      {state.contacts.length > 0 && (
        <ContactList
          contacts={state.contacts}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
      )}
      <ModalDialog
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      ></ModalDialog>
    </div>
  );
}

export default App;
