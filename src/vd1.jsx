import React from 'react';
import Vd2 from './vd2';
function Vd1({ theme }) {
    // cách 1:  const theme = props.theme;  
    // cách 2; descripturing: {theme}

    return (
        <div>
                <Vd2 theme={theme}/>
        </div>
    );
}

export default Vd1;