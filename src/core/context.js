import { createContext } from "react";

const Context = createContext({
    darkMode: false,
    setDarkMode: () =>  {}
});

const DarkMode = { inverted: false }

export { Context, DarkMode }