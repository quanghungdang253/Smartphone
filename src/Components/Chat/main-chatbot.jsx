import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './main-chatbot.module.scss';
import imgChatbot from './assets/image/imgChatbot.jpg';
import iconChat from './assets/image/icon-chat.png';
import iconStore from './assets/image/titles.jpg';
import ChatBotLocal from './localChatbot/components/localChatbotUi';
import { Button, Paper } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import {contentWelcome} from './localChatbot/content/content';
function MainChatbox(props) {
    const [closeBotStore, setCloseBotStore] = useState(false);
    const [closeMessage , setCloseMessage] = useState(true);
    const [index , setIndex] = useState(0);
   
     useEffect(() => {
            let sliceContent = setTimeout(() => {
                    setIndex((pre) => {
                         if(pre >= contentWelcome.length - 1)  return 0;
                        else  return pre + 1;                      
                    }
                 )
            },4000)
            return () => clearTimeout(sliceContent);
   },[index])

    return (
        <div className={styles.Mainchatbot}>
              <div className={styles.Mainchatbot__mainWelcome}
                       > 
              {closeBotStore ?  
        (<ChatBotLocal  setCloseBotStore={setCloseBotStore}/>) : (
               closeMessage ? (
                <div className={styles.mainContent}> 
                    <div className={styles.iconClose} onClick={() => setCloseMessage(false)}>  <FontAwesomeIcon
                    icon={faWindowClose}
                   className={styles.iconClose} />   </div>
                    <div className={styles.content} onClick={() => setCloseBotStore(true)}>    
                        <div className={styles.title}>    
                            <img src={iconStore} alt='' className={styles.iconStore} /> 
                            <h1> Quang hùng Store </h1>
                         </div>         
                            <p> {contentWelcome[index]}  </p>  
                    </div>       
                </div>
               ) : ""
                
                )
                                      
                  }                  
             </div>
             <div className={styles.mainBtnChatbot}> 
                <Button className={`${styles.mainChatbox__Chatbotlocal} ${styles.chatbot}`}
                 sx={{textTransform: 'none',
                    transition: "0.3s",
                    "&:active": { opacity: 0.5 },}}
                    onClick={() => setCloseBotStore(true)}>  
                    <Link className={styles.link}>
                             <img src={imgChatbot}alt='' className={`${styles.imgChatAl} ${styles.icon}`}/>
                           <h1>  Chat Trợ lý Al    </h1> 
                          
                    </Link>
                </Button>
                {/* <Button
                 className={`${styles.mainChatbot__ChatbotAl} ${styles.chatbot}` }
                 sx={{textTransform: 'none',
                    transition: "0.3s",
                    "&:active": { opacity: 0.5 },                     }}      > 
                    <Link className={styles.link}> 
                            <img src={imgChatbot}alt='' className={`${styles.imgChatAl} ${styles.icon}`}/>
                          <h1>  Chat với Trợ Lý Al  </h1>  
                     </Link>
                </Button> */}
            </div>
      
        </div>
    );
}
export default MainChatbox;