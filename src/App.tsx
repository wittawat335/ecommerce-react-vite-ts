import React, { useState } from "react";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container mt-4">
      <Header></Header>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
