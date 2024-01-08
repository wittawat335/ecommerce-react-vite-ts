import { FC, useContext } from "react";
import Table from "react-bootstrap/Table";

import { Action, Contact } from "@/reducer/contactsReducer";
import ContactItem from "./ContactItem";
import { DataContext } from "../context/DataContext";

type ContactListProps = {
  contacts: Contact[];
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
};

const ContactList: FC<ContactListProps> = ({
  contacts,
  handleEdit,
  dispatch,
}) => {
  //const { contacts } = useContext(DataContext);
  return (
    <div className="contacts-list">
      <h3 className="contacts-list-title">List of Contacts</h3>
      <div className="contacts-list-table-container">
        <Table striped bordered hover className="contacts-list-table">
          <thead className="contacts-list-header">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item) => (
              <ContactItem
                key={item.id}
                {...item}
                handleEdit={handleEdit}
                dispatch={dispatch}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ContactList;
