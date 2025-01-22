import { createContext, useState } from "react";

export const RegexStore = createContext();

export const RegexProvider = ({children}) => {
  let[email, setEmail] = useState(null);
  let[err , setErr] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
      setErr("Invalid email address");
    }
    else{
      setErr("");
      alert("Email is valid!");
    }
  }

  return(
    <RegexStore.Provider value={{email , err , handleChange , handleSubmit}}>
      {children}
    </RegexStore.Provider>
  )
}

