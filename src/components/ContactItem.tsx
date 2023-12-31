import { Contact, Action } from "@/reducer/contactsReducer";
import React, { FC } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"; //npm i react-icons

interface ExtraProps {
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}

const ContactItem: FC<Contact & ExtraProps> = ({
  id,
  firstName,
  lastName,
  phone,
  handleEdit,
  dispatch,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <AiFillEdit size={20} className="icon" onClick={() => handleEdit(id)} />
      </td>
      <td>
        <AiFillDelete
          size={20}
          className="icon"
          onClick={() => {
            const comfirmDelete = window.confirm(
              `Are you sure you want to delete contact for user ${firstName} ${lastName}?`
            );
            if (comfirmDelete) {
              dispatch({
                type: "DELETE",
                payload: { id },
              });
            }
          }}
        />
      </td>
    </tr>
  );
};

export default ContactItem;
