import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Typography, Card ,TextField, Paper, CardActions, CardContent} from "@mui/material";
import styles from "./localChatbotUi.module.scss";
import iconStore from '../../assets/image/titles.jpg';
import iconUser from '../../assets/image/iconUser.jpg';
import iconSendMessage from '../../assets/image/sendMessage.png';
import content from "../content/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
const ChatBotLocal = (props) => {
        const setCloseBotStore = props.setCloseBotStore;
     
        const [input , setInput] = useState(null);
        const [message , setMessage] = useState([]);
        const [handleShowMess , setHandleShowMess] = useState(true)
       
        const handleMessage = () => {
        if(!input) { 
            return;
        }
        let messageUser = {nameClass: "user" , icon: iconUser, content: input,  textClass: "textUser"}
        setMessage((pre) => {
            return [...pre , messageUser]
        })
    }
    const handleCloOpenBot = () => {
        setCloseBotStore(false);
      
    }
    useEffect(() => {
        if(message.length === 0){
             return;
        }
        let messageUser = message[message.length - 1]
        if(messageUser.nameClass === "user"){
            
        
     let time = setTimeout(() => {
            let messageStore = {nameClass:"store", icon: iconStore, content: content[input], textClass: "textStore"}
            setMessage((pre) => {
                    return [...pre, messageStore];
                });
            },2000)

             return () => clearTimeout(time)
            }
    },[message])
    
    return (
        <Paper className={styles.Container}>  
            <div className={styles.Container__header}>
                <div className={styles.boxheader}>  
                    <img src={iconStore} alt="" 
                    className={`${styles.iconStore} ${styles.icon}`}/>
                    <h1 className={styles.nameClass}> Quang Hùng Store </h1>
                </div>
                <FontAwesomeIcon
                   icon={faWindowClose}
                   className={styles.iconClose}
                   onClick={() =>  handleCloOpenBot()}
                  />
            </div>
            <div className={styles.Container__content}>
                    <div className={styles.contentWelcome}>  
                                <img src={iconStore} alt=""
                                 className={`${styles.iconMessage} ${styles.icon}`}/>
                                <h1>

                                  Xin chào Anh/Chị! Em là trợ lý hỗ trợ nhanh của Quang Hùng Store <br/> 
                                  Em rất sẵn lòng hỗ trợ Anh/Chị 😊 
  
                                 </h1>
                    </div>
                                                   

                    
                    
                {message.length > 0 ? (
                    <div className={styles.mainContent}>  
                        {message.map((Item , index) => (
                            <div key={index} className={`${styles.Items} ${styles[Item.nameClass]}`}>  
                                <img src={Item.icon} alt="" 
                                className={`${styles.iconMessage} ${styles.icon}`}/>
                                <h1 className={styles[Item.textClass]}> {Item.content} </h1>
                            </div>
                        ))}
                    </div>
                   
                ) : (
                    null
                   
                )}
       
            </div>
            <div className={styles.Container__boxBottom}> 
                <div className={styles.boxInput}> 
                        <TextField 
                            onChange={(e) => setInput(e.target.value)}
                            className={styles.formInput}
                            label="Nhập thông tin"
                            variant="outlined"
                           InputProps={{
                                sx: { textAlign:'center', height:'50px',      borderRadius:'20px',
                            },
                           }}
                           InputLabelProps={{
                            sx: {
                                 fontSize: "12px",
                                 marginBottom:'10px'
                            }
                           }}
                       />
                            <Button 
                                className={styles.btnSend}
                                onClick={() => handleMessage()}
                                > 
                                <img src={iconSendMessage} alt="" className={styles.iconSend}/>
                             </Button>
                      
                 </div> 
            </div>
        </Paper>

    )
}

export default ChatBotLocal;