import { Contact } from "@/reducer/contactsReducer";
import { FC } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"; //npm i react-icons

const ContactItem: FC<Contact> = ({ id, firstName, lastName, phone }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <AiFillEdit size={20} className="icon" />
      </td>
      <td>
        <AiFillDelete size={20} className="icon" />
      </td>
    </tr>
  );
};

export default ContactItem;
