
import './App.css';

import './Components/phone/HeaderStyle/reset.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from './Common/Header/MainHeader';
import { HelmetProvider } from 'react-helmet-async';
import CommunicationSettings from './Components/CommunicationSettings/CommunicationSettings';
import { ParentContext } from './Context/Settings/Theme/ThemeContext';
import { Provider } from 'react-redux';
import store from './app/store';
import MainChatbox from './Components/Chat/main-chatbot';
import router from './router/router';
import MainFooter from './Common/footer/main-footer';

import { BreadcrumbProvider } from './Context/share-data-bread-crumb/share-data-bread-crumb';


export default function App() {
 
    return (
      <BreadcrumbProvider>  
  
        <Provider store={store}>  
       
        <Style>
          <ParentContext>
            <HelmetProvider>   
              <MainHeader />
                <ContentWrapper>
                  <Routes>
                    {router.map((item) => (
                        <Route key={item.id} path={item.path} element={<item.element />} />
                    ))}
                   </Routes>
                 </ContentWrapper>
            </HelmetProvider>             
                     <div className='CommunicationSetting'>  <CommunicationSettings/>    </div>                     
                     <div className='chatBot'>   <MainChatbox/>  </div>
                           
          </ParentContext>    
        </Style>
              <FooterWrapper>
                                   <MainFooter />
              </FooterWrapper>
             {/* <CounterExample /> */}
        </Provider>
       
    </BreadcrumbProvider>
    );
  }
    {/* <CounterExample/> */}
  const Style = styled.div`
    position: relative;
    /* min-height: 100vh; */
    padding-bottom: 100px; /* Adjust this value based on your footer height */
    
    .chatBot {
      position: fixed;
      bottom: 10px;
      right: -20px;
      z-index: 1500;
    }
    @media (max-width:768px) {
    .CommunicationSetting {
          display: none;
      }
    }
    .CommunicationSetting {
      /* Your styles here */
    }
  `;
  
  const ContentWrapper = styled.div`
    flex: 1;
    padding-bottom: 50px; /* Add some padding at the bottom */
  `;
  
  const FooterWrapper = styled.div`
 
  
  `;


