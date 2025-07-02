
import './App.css';

import './Components/phone/HeaderStyle/reset.css';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from './Components/Header/MainHeader';
import React, { Suspense, lazy } from 'react';
import Loading from './Components/Common/components/Loading';
import { HelmetProvider } from 'react-helmet-async';
import CommunicationSettings from './Components/CommunicationSettings/CommunicationSettings';
import { ParentContext } from './Context/Settings/Theme/ThemeContext';
import Products_list from './Components/Pages/Products_list/Products_list';
import Home from './Components/Pages/Home/Home';
import  InforPhone from './Components/Pages/InforPhone/InforPhone';
import MainStoreInfo from './Components/Header/store-map-info/main-store-info';
import MainStoreMapInfo from './Components/Header/store-map-info/main-store-map';
import { Provider } from 'react-redux';
import store from './app/store';
import MainChatbox from './Components/Chat/main-chatbot';
import MainCart from './Components/Pages/cart-pages/main-cart/main-cart';
import HandleAlert from './Components/Common/components/handle-alert';
import MainFooter from './Components/Common/footer/main-footer';
import Breadcrumb from './Components/Common/location/location';
import MainLogin from './Components/Pages/login/main-login';
import { BreadcrumbProvider } from './Context/share-data-bread-crumb/share-data-bread-crumb';
import MainAdmin from './Components/Pages/admin/main-admin';
import LookUpOrders from './Components/Pages/look-up-orders/look-up-orders';
import ShowProduct from './Components/Pages/look-up-orders/components/show-product/show-product';
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
                  <Route path='/' element={<Home />} />
                  <Route path='label/:namephone' element={<Products_list/>} />
                  <Route path='/Detail/:link/:id' element={<InforPhone />} />  
                  <Route path='/StoreInfo' element={<MainStoreInfo/>} />
                  <Route path='/GoogleMap' element={<MainStoreMapInfo/>} />
                  <Route path='/Cart' element={<MainCart />} />
                  <Route path='/Login' element={<MainLogin/>} />
                  <Route path='/Admin' element={<MainAdmin/> } />
                  <Route path='/LookProduct' element={<LookUpOrders/>} />
                  <Route path='/ShowProduct' element={<ShowProduct />} />
                </Routes>
              </ContentWrapper>
            </HelmetProvider>             
                    
            <div className='CommunicationSetting'>  
              <CommunicationSettings/>     
            </div> 
            <div className='chatBot'> 
        <div className="bg-">

        </div>
              <MainChatbox/>
        
            </div>
          </ParentContext>    
        </Style>
              <FooterWrapper>
                     <MainFooter />
              </FooterWrapper>
              {/* <CounterExample/> */}
        </Provider>
    </BreadcrumbProvider>
    );
  }
  
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


