import { ReactNode, createContext, useContext, useState } from "react";

type ProviderProps = {
  children: ReactNode;
};

export const DataContext = createContext({});

export function DataContextProvider({ children }: ProviderProps) {
  const [contacts, setContacts] = useState([
    {
      id: Date.now(),
      firstName: "Thomas Hardy10",
      lastName: "thomashardy@mail.com",
      phone: "(171) 555-2222",
    },
    {
      id: Date.now(),
      firstName: "Dominique Perrier",
      lastName: "dominiqueperrier@mail.com",
      phone: "(313) 555-5735",
    },
    {
      id: Date.now(),
      firstName: "Maria Anders",
      lastName: "mariaanders@mail.com",
      phone: "(503) 555-9931",
    },
    {
      id: Date.now(),
      firstName: "Fran Wilson",
      lastName: "franwilson@mail.com",
      phone: "(204) 619-5731",
    },
    {
      id: Date.now(),
      firstName: "Martin Blank",
      lastName: "martinblank@mail.com",
      phone: "(480) 631-2097",
    },
  ]);
  return (
    <DataContext.Provider value={{ contacts }}>{children}</DataContext.Provider>
  );
}
