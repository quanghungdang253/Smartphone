import React, { useState } from 'react';
import styled from 'styled-components';
import Slideimage from './Components/Slideimage';
import PhoneAPI from './services/PhoneAPI';
import InformationPhones from './Components/informationPhone';
import { Circles} from 'react-loader-spinner';

function InforPhone(props) {
    const [data, setData]  = useState([]);
    const [loading, setloading] = useState(true);
    function handleData (Data) {
                setData(Data)
                setloading(false);
    }
    return (
                <Wrapper>
                       <div className='main'>  {/* thẻ section dùng để chia nội dụng thành các phần khác nhau  */}
                                    <PhoneAPI fetchData={handleData}/>
                            {loading ? (
                              
                                <ProgressBar>
                                        <Circles
                                                height="400"
                                                width="80"
                                                color='blue'
                                                ariaLabel='loading'
                                                
                                            />
                                </ProgressBar>
                            ): (
                            <Main> 
                               
                                <Slideimage image={data.image}/>
                                <InformationPhones Data={data}/>
                            </Main>
                            )}
                                   
                                  
                                   

                       </div>

                </Wrapper>

       
    );
}

const Wrapper = styled.div`


`
const ProgressBar = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;


`
const Main = styled.div `
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 7%;
`

export default InforPhone;