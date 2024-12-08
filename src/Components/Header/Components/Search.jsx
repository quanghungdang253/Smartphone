import { Button, TextField } from '@mui/material';
import {useRef} from 'react';
import React from 'react';
import styled from 'styled-components';
import Forminput from '../../Common/components/Forminput';
const Search = () => {   // component cha 
    const inputRef = useRef(null);  // kiến thức useRef 
    const  onAdd = () => {      
        console.log(inputRef.current)               
        if(inputRef.current){
                     alert("Đã tìm thấy sản phẩm "+inputRef.current.value);
        }else{
                    alert("không tìm thấy sản phẩm ");
        }
    }
  
    return (
            <FormSearch>                                                            
                <Searchs>   
                             <span className='Search__Input'> 
                                         <i class="fa-solid fa-magnifying-glass"> </i>
                             </span>  
                           <Forminput
                                    className="Formsearch"
                                    placeholder="Bạn muốn tìm sản phẩm gì"
                                    ref={inputRef}
                                    
                           />
                    <span className='Search__submit'>                            
                                 <Button variant='OutlinedButton' onClick={() => onAdd()}> Tìm kiếm   </Button>
                    </span>
                </Searchs>  
            </FormSearch>    
    )
}
   
                 


const FormSearch = styled.div `
            display:flex;
            align-items:center;
        
        
`
const Searchs = styled.div`
    display:flex;
    border-radius: 3rem;
    align-items:center;
    justify-content:center;
  
   .Formsearch {
            color: white;
            border-radius:10px;
            border:1px solid white;
            
   }
   .Formsearch::placeholder{
    font-size:0.9rem;
   }
    .Search__Input {
        padding: 0rem 1rem 0rem 1rem;
         display: flex;
        align-items: center;
        .fa-solid.fa-magnifying-glass {
          color: white;
        }
         input {
            font-size:1rem;
        
            border-radius:10px;
         }
        
    }
    .Search__submit {
        padding:1rem 1rem;
        color:white;
                button {
                        border:none;
                       background-color:transparent;
                       font-weight:700;
                       border: 1px solid white;
                }
        }


`

export default Search;