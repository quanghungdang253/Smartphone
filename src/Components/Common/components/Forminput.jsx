import React from 'react';
import './style/Forminput.css';
import { forwardRef } from 'react';
 const  Forminput  = forwardRef(({ variant, onChange, placeholder, color, label, className }, ref) => {
   
    return (
         <input
                className={`Forminput ${className}`} 
                placeholder={placeholder} 
                ref={ref}

         />
    );
})

export default Forminput;