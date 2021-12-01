import themes from "./themes";
import React, {useState} from 'react';

const ThemeContext = React.createContext();
export const ThemeProvider = (props) => {
    const [defaultTheme,setDefault] = useState(Object.keys(themes)[0]);
    const [theme, setTheme] = useState(themes[defaultTheme]);
    const toggleTheme = ()=>{
        if(defaultTheme==='light') {
            setDefault('dark');
        }else{
            setDefault('light');
        }
        setTheme(themes[defaultTheme]);
    }
    return (
        <ThemeContext.Provider value={{theme, setTheme:toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext;