

const Phoneitem = (props) => {  // ĐÂY LÀ COMPONENT CON
     
      const {image,title,price,buy,information} = props;  // sử dụng phương pháp destructuring  
  
    return (
        <div>
            <div className='wrapper element'>     
            <div className=''>
                  <img src={image} alt='' className='image'></img>
            </div>
      <div className='footer'> 
      <div className='footerstyle'> 
            <span className=''>
                  <h3 className='text '>{title} </h3>
            </span>
            <span>
                  <h5 className='text'> {price} </h5>
            </span>
      </div>     
               <div className='Submit'> 
                         <span className='text'> {buy} </span>  
                         <span> {information}</span> 
                  
              </div> 
     q
         </div>
    
 </div>  
        </div>
    );
};




export {Phoneitem};
// ---------------------Heading---------------------------



//-------------- Conditional render ----------------------------------
//  function Greeting(){
    
// let Show = 0;
   
//     const House = new Date().getHours();
//     console.log(House);
//      if(House <= 10){
//             Show = "Good Morning";

//      }else if( House > 10 && House < 18){
//             Show = "Good Afternood";
//      }
//      else{
//         Show = "Good Evening ";
//      }
//      return(
// <h1> {Show} </h1>
//      )
//  }
//-------------------------------------------------

