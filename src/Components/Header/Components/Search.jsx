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
  
   .FormSearch {
            color: white;
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
            width:90%;
            outline:none;
            border:0;
         }
        
    }
    .Search__submit {
        padding:1rem 1rem;
                button {
                        border:none;
                       background-color:transparent;
                       font-weight:700;
                }
        }


`

export default Search;