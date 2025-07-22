import styled from "styled-components";
const Wrapper = styled.div `
     background-color:white;
     position: relative;
   .image {
         transition: opacity 0.5s ease-in-out;
   }
      .HandleImage__button:hover{
                        border: 4px solid red;
                }
      .HandleImage__button:active{                              // border chuyển màu đỏ khi nhấn chuột
                        border: 4px solid red;
                }
      .HandleImage__button.selected {
                        border: 4px solid red;
                }

`
const HandleImage = styled.div `
display: flex;
justify-content:space-between;
grid-column-gap:3rem;
overflow: hidden;  // nếu nhiều phần tử thì phần tử bị tràn và sẽ ẩn đi
.HandleImage__image {
        
        display: block;
width:100%;

position:relative;
display: flex;
align-items:center;
justify-content: center;
border-radius: 5px;
border: 0.5px solid rgba(22, 22, 22, 0.1);
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1),
                                        0 2px 6px 2px rgba(0, 0, 0, 0.15);                  
}
.HandleImage__image-box-two {
       
     
        max-height: 200px;
        position:relative;
        display: flex;
        align-items:center;
         padding-left:2rem;
        border-radius: 5px;
        border: 0.5px solid rgba(22, 22, 22, 0.1);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1),
                                        0 2px 6px 2px rgba(0, 0, 0, 0.15); 
}
.Link {
display:inline-block;
width:100%;
display:flex;
justify-content:center;
height:115px;  
}
.HandleImage__image img {
        transition: opacity 0.5s ease-in-out;
        transform: scale(0.95);
        cursor: pointer;
     
        object-fit:contain;
                transition: opacity 0.8s ease-in-out;
}
.HandleImage__node {
        position:absolute;
        display:flex;
        grid-column-gap:33em;
        z-index: 100;
        justify-content:space-evenly;
       
       
}
.HandleImage_Slide {
        display: flex;
        grid-column-gap: 10px;              
}

.button {
        border: none;
        color:black;     
}
//==============================================responsive==========================================
@media (max-width: 768px) {
        .image {
                max-width:95%;
                height: auto;
                 object-fit:cover;
        }
        .HandleImage__image {
               
                max-height:4rem;
             
               
                
        }
        .HandleImage__image-box-two {
              
        }
        .HandleImage__image img {
                 transition: opacity 0.5s ease-in-out;
                 transform: scale(0.95);
                 cursor: pointer;
                 height: 100%;
                 width:100%;
                 object-fit:contain;
                 transition: opacity 0.8s ease-in-out;
        }
        .HandleImage__node{
                display:flex;
                justify-content:space-around;
        }
      
}
@media (min-width:768px) and (max-width: 1024px) {
                   .HandleImage__image {
                                 max-height:4rem
                 }
}


`

export default Wrapper;
export {HandleImage}

