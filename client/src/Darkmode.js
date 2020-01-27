import {useEffect} from 'react';
import Storage from "./Storage"

const DarkMode = event => {

    const [darkMode, setDarkMode] = Storage("darkmode", event);
    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('dark-mode');
        } else 
        if (!darkMode) {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];


}

export default DarkMode;