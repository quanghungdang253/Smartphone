import React from 'react';
import styled from 'styled-components';

function Navigation_header(props) {
    return (
        <Navigation>
            <div className='Navication__call'> 
                    <div> 
                        <i class="fa-solid fa-phone fa-shake"></i>
                    </div>
                    <div className='call'> 
                        <span> Gọi mua hàng </span>
                        <span> 123456789 </span>
                    </div> 
            </div>
        </Navigation>
    );
}

const Navigation = styled.div `
   color: white;

   display:flex;
   align-items: center;
.Navication__call {
         display: flex;
}
.fa-solid.fa-phone.fa-shake {
        font-size: 1.6rem;
        color: green;
}
.call {
        display: flex;
        flex-direction: column;
        grid-row-gap:2px;
}


`
export default Navigation_header;