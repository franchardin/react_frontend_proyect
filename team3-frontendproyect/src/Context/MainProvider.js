import MainContext from './MainContext';
import React from "react";

const MainProvider = ({ children }) => {

    const [darkMode, setDarkMode] = React.useState(true);

    const currentState = JSON.parse(localStorage.getItem('state'));

    const saveStorage = () => localStorage.setItem('state', JSON.stringify(currentState));


    const toggleDarkMode = (e, dark2) => {
        let darkMode = !dark2;
        setDarkMode(darkMode);
        currentState.darkMode = darkMode;
        console.log('dark mode: ' + darkMode);
        saveStorage();
    }

   
    return (
        <MainContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider;