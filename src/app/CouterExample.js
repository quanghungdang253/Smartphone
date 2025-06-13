// 

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { increment, decrement, reset } from './counterSlideExample';

function CounterExample(props) {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.counter.value);

  return (
    <Container>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <div>
        SỐ: {selector}
      </div>
    </Container>
  );
}

const Container = styled.div`
  button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
  }
  div {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export default CounterExample;
