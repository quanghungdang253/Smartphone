import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

// import  styles from '../HeaderStyle/Productads.module.css'
const Productads = () => {
    const [Preimage] = useState([
       "https://cellphones.com.vn/sforum/wp-content/uploads/2020/08/OPPO-F17-1.jpg",
       "https://cdn.tgdd.vn/Files/2020/01/20/1232366/0_800x450.jpg",
       "https://cdn.tgdd.vn/Files/2020/02/04/1234384/1_1280x720-800-resize.jpg",
       "https://cellphones.com.vn/sforum/wp-content/uploads/2020/03/Samsung-Galaxy-M21-leaked-image.jpg",
       "https://cdn.tgdd.vn/Files/2018/02/17/1067643/galaxys9vss9plus_800x450.jpg"
      

    ])

    const [Preindex , Setindex] =  useState(0); 
    useEffect(() => {

        if(Preindex === Preimage.length ){
                Setindex((Preindex) => Preindex = 0)
                    }
        else if(Preindex < 0){
            Setindex((Preindex) => Preindex = Preimage.length - 1);
      }

    },[Preindex, Preimage.length])

         useEffect(() => {
            const Settime = setInterval(() =>{
                             Setindex((Preindex) => Preindex + 1)
                     },2000)

                    return(() => clearInterval(Settime));
                    }, [Preimage[Preindex]])

    const Right = () =>{
                        Setindex((Preindex) => Preindex + 1);
    }

    const Left = () => {
                         Setindex((Preindex) => Preindex - 1);
    }
    return(
                <Wrapper>  {/*className='Wrapper'  */}
                     <Aside> 
                     <img src={Preimage[Preindex]} alt='' className='image' />
                          {/* className={styles.navigation} */}
                                <div className='Navigation'>   {/* styles.navigationleft */ }
                                            <Button variant='outlined'  className= 'Navigation__iconLeft icon'  data-nodeLeft  onClick={() => Left()}> 🢤 </Button>
                                            <Button variant='outlined' className='Navigation__iconRight icon' data-nodeRight   onClick={() => Right()}> 🢧 </Button>
                                </div> 
                    </Aside>                       
                </Wrapper>
    )
}

const Wrapper = styled.div  `
   

        .image {
            height: 27.5rem;
            width:100%;
            border-radius: 1.5rem;
            position: relative;
          
        }
        &:hover + .Navigation .icon {  // bộ chọn anh em liền kề 
            display: block;
        }
        .Navigation__iconRight {
               position: relative;
               left: 22.6rem;       
        }
        .icon {
            width: 1rem;
            color : red;
            border: 1px solid;
            opacity: 0.7;
            height: 2rem;
             border-radius: 1rem;
             transition: all 2ms so
        }
       
      
        .Navigation {
            
            position: absolute;
            bottom:50%;
            display: none;
        
        }
        .image:hover ~ .Navigation, // khi ta hover và image thì nút sẽ hiển thị 
        .Navigation:hover  // bổ sung thêm khi ta hover vào nút bấm thì hiển thị tránh trường hợp hover vào nút sẽ k hiển thị
        { // chọn tất các các phần tử tử anh chị em sau phần tử .image 
      .icon {
            border: 3px solid red;
      }

        display: flex; /* Hiển thị các nút khi hover */
      
    }
     


`
const Aside = styled.div`
            width: 600px;

`

export default Productads;

