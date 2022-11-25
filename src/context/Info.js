import { createContext, useState } from "react";

export const InfoContext = createContext();

export default function InfoProvider({ children }) {

    const [user, setuser] = useState([]);

    return (
        <InfoContext.Provider
            value={{
                user,
                setuser,
            }}
        >
            {children}

        </InfoContext.Provider>
    )
}