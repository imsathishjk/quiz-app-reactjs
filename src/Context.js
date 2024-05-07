import { createContext, useState } from "react"
import { QuizzData } from "./Data.js";
const NameContext = createContext();
export const AppProvider = (data) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [result, setResult] = useState(false);

    const list = QuizzData //store quiz data inside the list variable to pass all the components



    return (
        <NameContext.Provider value={{ name, email, setName, setEmail, list, result, setResult }}>
            {data.children}
        </NameContext.Provider>
    )
}
export { NameContext };