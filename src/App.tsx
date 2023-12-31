import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/ContactList";
import ModalDialog from "@/components/ModalDialog";
import { Navbar } from "@/components/Navbar";

import { contactsReducer, State, Contact } from "@/reducer/contactsReducer";
import { useReducer, useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { DataContext, DataContextProvider } from "./context/DataContext";

const intialState: State = {
  contacts: [],
};

function App() {
  //[result ที่ return กลับมา,ส่วนของการเรียกใช้ action ที่อยู่ใน reducer]
  const [state, dispatch] = useReducer(contactsReducer, intialState); //(ชื่อ reducer ที่จะเรียกใช้, state ที่เราจะส่งเข้าไปทำงาน)
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

  return (
    <DataContextProvider>
      <div className="container mb-4">
        <Navbar></Navbar>
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
    </DataContextProvider>
  );
}

export default App;
