import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export function ToggleProvider({ children }) {
    const [toggleValue, setToggleValue] = useState(false);

    const handleToggle = (value) => {
        setToggleValue(value);
    };

    return (
        <ToggleContext.Provider value={{ toggleValue, handleToggle }}>
            {children}
        </ToggleContext.Provider>
    );
}

// Custom hook để sử dụng trong component khác
export function useToggle() {
    return useContext(ToggleContext);
}
