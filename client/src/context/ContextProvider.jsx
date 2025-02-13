import { useState } from "react";
import UseContext from "./UseContext";

const ContextProvider = ({ children }) => {
    const [selectedRole, setSelectedRole] = useState('');
    return (
        <UseContext.Provider value={{ selectedRole, setSelectedRole }}>
            {children}
        </UseContext.Provider>
    )
}
export default ContextProvider;