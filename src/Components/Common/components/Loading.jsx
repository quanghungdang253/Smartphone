import { Circles } from "react-loader-spinner";
import { ProgressBar } from "react-loader-spinner";
import React from 'react';
import styled from "styled-components";
function Loading(props) {
    return (
        <ProgressBars>
                                        <Circles
                                                height="200"
                                                width="200"
                                                color='blue'
                                                ariaLabel='loading'
                                                
                                            />
                                            <h1 className="loading"> Đang tải................</h1>
        </ProgressBars>
    );
}
const ProgressBars = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            grid-column-gap: 3rem;
            position: relative;
            top: 200px;
            .loading {
                font-size:1.5rem;
                font-family: 'Times New Roman', Times, serif
            }


`
export default Loading;