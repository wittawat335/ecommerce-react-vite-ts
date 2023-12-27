import React from "react";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface Update {
  id: number;
  updates: Contact;
}

export interface Action {
  type: "ADD_CONTACT" | "UPDATE_CONTACT" | "DELETE_CONTACT";
  payload: Contact | Update;
}

export interface State {
  contacts: Contact[];
}

export const contactsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts],
      };
    default:
      return state;
  }
};
