// import React from 'react';
import Vd1 from './vd1';
import { useState } from 'react';
import './Apps.css';
// Theme: Dark
function Appp(props) {
    const [theme, setTheme] = useState("dark")
    console.log(theme);
    const toggleTheme = () => {
            setTheme(theme === "dark" ? 'light' : 'dark');
    }
    return (
        <div style={{padding: 20}}>
                <button onClick={() => toggleTheme()}> Toggle theme </button>
                <Vd1 theme={theme}/>
        </div>
    );
}

export default Appp;