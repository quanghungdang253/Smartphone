// import React from 'react';
// import PropTypes from 'prop-types';
// import { increase , decrease} from './counterSlice';
// import { useDispatch, useSelector } from 'react-redux';
// CounterFeature.propTypes = {
    
// };

// function CounterFeature(props) {
//     // thực hiện lấy state hiện tại trong store 
//     const counter  = useSelector(state => state.counter);
//    const dispatch = useDispatch();
//     if(counter === undefined) return;
//     const handleIncrease = () => {
//             const action = increase("hello");
//             dispatch(action);
            
        
//     }
  
//     return (
//         <div>
//              Counter : {counter};

//              <button onClick={() => handleIncrease()}>  Tăng  </button>
//         </div>
//     );
// }

// export default CounterFeature;




    import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Todoform from '../todo/todoform';
    function CounterFeature({value ,  Todoform }) {

        
  
    
        return (
            <Container>
                   
                     
                
            </Container>
        );
    }



    const Container = styled.div`

    
    
    `
    export default CounterFeature;