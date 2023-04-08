import { useContext, useState } from "react";
import { GlobalContext } from "./utils/global.context";

const Contact = () => {
  const { Theme } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length < 5 || !email.includes("@")) {
      console.log("error");
      setMessage("Por favor, verifique su informacion nuevamente.");
    } else {
      setName("");
      setEmail("");
      setMessage(`Gracias ${name} te contactaremos via mail. `);
    }
  };

  return (
    <>
      <main style={{ background: Theme.backgroundHome, color: Theme.color }}>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleNameChange}
            value={name}
            placeholder="nombre"
          />
          <input
            onChange={handleEmailChange}
            value={email}
            placeholder="email"
          />
          <button type="submit">Submit</button>
          <div>{message}</div>
        </form>
      </main>
    </>
  );
};

export default Contact;
