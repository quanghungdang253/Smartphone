
import './App.css';

import './Components/phone/HeaderStyle/reset.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from './Common/Header/MainHeader';
import React, { Suspense, lazy } from 'react';
import Loading from './ui/Loading';
import { HelmetProvider } from 'react-helmet-async';
import CommunicationSettings from './Components/CommunicationSettings/CommunicationSettings';
import { ParentContext } from './Context/Settings/Theme/ThemeContext';
import Products_list from './Pages/Products_list/Products_list';
import Home from './Pages/Home/Home';
import  InforPhone from './Pages/InforPhone/InforPhone';
import MainStoreInfo from './Common/Header/store-map-info/main-store-info';
import MainStoreMapInfo from './Common/Header/store-map-info/main-store-map';
import { Provider } from 'react-redux';
import store from './app/store';
import MainChatbox from './Components/Chat/main-chatbot';
import MainCart from './Pages/cart-pages/main-cart/main-cart';
import router from './router/router';
import MainFooter from './Common/footer/main-footer';
import MainLogin from './Pages/login/main-login';
import { BreadcrumbProvider } from './Context/share-data-bread-crumb/share-data-bread-crumb';
import MainAdmin from './Pages/admin/main-admin';
import LookUpOrders from './Pages/look-up-orders/look-up-orders';
import ShowProduct from './Pages/look-up-orders/components/show-product/show-product';


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
              <div className='CommunicationSetting'>  
                               <CommunicationSettings/>     
              </div> 
              <div className='chatBot'> 
                               <MainChatbox/>
              </div>
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


