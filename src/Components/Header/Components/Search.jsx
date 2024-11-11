import {useRef} from 'react';
import React from 'react';
import styled from 'styled-components';
const Search = () => {
    const inputRef = useRef(null);  // kiến thức useRef 
    const  onAdd = () => {                     
        if(inputRef.current){
                alert("Đã tìm thấy sản phẩm "+inputRef.current.value);
        }else{
            alert("không tìm thấy sản phẩm ");
        }
    
    }

    return (
     
            <FormSearch>   {/* form-Search  */}                 
                                               
                <Searchs>   
                    <span className='Search__Input'> 
                            <i class="fa-solid fa-magnifying-glass"> </i>
                            <input type='text' placeholder='Bạn muốn tìm sản phẩm nào' ref={inputRef}/>                            
                    </span>
                    <span className='Search__submit'>
                                 <button onClick={() => onAdd()}> Search </button>
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
    background-color:#fff;
    
   
    .Search__Input {
        padding: 0rem 1rem 0rem 1rem;
       display: flex;
       align-items: center;
        .fa-solid.fa-magnifying-glass {
            color:black;
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