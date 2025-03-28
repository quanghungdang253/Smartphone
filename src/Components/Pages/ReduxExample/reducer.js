import { useReducer } from "react";

import React from "react";

const initialReducer = {count : 0};

const counterReducer = (state,action) => {
        switch(action.type) {
                case "INCREMENT": {
                        return {count : state.count + 1};
                        
                }
                case "DECREMENT": {
                        return {count : state.count - 1};
                }
                case "RESET": {
                        return {count : 0};
                }

                default: {
                        return state;
                }
                }
        }
        function Count() {
            const [state , dispatch] = useReducer(counterReducer , initialReducer);



            return (
                <div>
                        <h1> Số   {state.count}  </h1>
                        <button onClick={() => dispatch({type : "INCREMENT"})}> Tăng </button>

                </div>
            )
        }


        export default Count;
