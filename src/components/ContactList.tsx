import { FC } from "react";
import { Contact } from "@/reducer/contactsReducer";
import Table from "react-bootstrap/Table";

type ContactListProps = {
  contacts: Contact[];
};

const ContactList: FC<ContactListProps> = ({ contacts }) => {
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
            </tr>
          </thead>
          <tbody>
            {contacts.map(({ id, firstName, lastName, phone }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ContactList;
