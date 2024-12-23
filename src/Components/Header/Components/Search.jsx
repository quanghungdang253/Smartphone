
// import React, { useEffect, useState } from 'react';
// import axiosClient from '../../../Api/axiosClient';
// import { Link } from 'react-router-dom';
// import { List } from '@mui/material';
// import styled from '../style/Search.module.scss';
// function Search(props) {
//     const [data , setData] = useState([]);  // thiết lập giá trị lần đầu tải 
//     const [datainput , setDatainput] = useState(''); // thiết lập lấy giá trị nhập liệu 
//     const [filterdata, setfilterdata] = useState([]);
//     // suggestions : gợi ý, để xuất 
//     const [showsuggestions , setShowSuggestions] = useState(false);

//     let Linkjson = ["samsung","tivi"];
//     useEffect(() => {
//         const Handledata = async() => {
//             try {
//                 let Fetchdata  = await Promise.all(
//                         Linkjson.map((List) => 
//                                 axiosClient(`/Searchdata/${List}.json`)
//                         )
//                 )
//                 // combinedData : dữ liệu kết hợp 
//                 const combinedData = Fetchdata.flatMap((response, index) => 
//                 (Array.isArray(response) ? response : []).map((Item) => ({  ...Item  })    
//             ))
//                      setData(combinedData);
//                      console.log("Đã tải dữ liệu thành công "+combinedData);
                
//         }
//              catch (error) {
//                     console.error("Lỗi lấy dữ liệu "+error);
//          }
//             }
//            Handledata();
//     },[])

//     function Update(event) {
//              let value = event.target.value.toLowerCase();
//                 setDatainput(value);
//                     if(value.length > 0 ){
//                     let setData = data.filter((Item) => {
//                       return  Item.name.toLowerCase().includes(value)
//                     })
//                          setfilterdata(setData);
//                         setShowSuggestions(setData.length > 0);
//                 }else {
//                             setfilterdata([]);
//                             setShowSuggestions(false);
//                 }
               
//     }
   
//     const handleClickoutside = (event) => {
//         const suggestionsContainer = document.querySelector(`.${styled.suggestions}`);
//         if(suggestionsContainer && !suggestionsContainer.contains(event.target)){
//                 setShowSuggestions(false);
//         }
      
//     }

//     useEffect(() => {
//             document.addEventListener('mousedown', handleClickoutside);

//             return () => {
//                 document.removeEventListener('mousedown', handleClickoutside);
//             }
//     },[])
//     return (
//         <div  className={styled.Container}>
//                <input 
//                     className={styled.input}
//                     type='text'
//                     onChange={Update}
//                     placeholder='Bạn muốn tìm gì'
//                     onKeyDown={(event) => {
//                     if(event.key === 'Enter') {
//                                 setShowSuggestions(false);
//                     }
                       
//                 }}
//                     />
//                     {showsuggestions && (
//                                     <div
//                                         className={styled.suggestions}
//                                        >
//                                         {filterdata.map((item) => (
//                                             <div>  
//                                                <Link
//                                                     to={`/Detail/${item.label}/${item.id}`}
//                                                     key={item.id}
//                                                     className={styled.link}
//                                                     onClick={() => {                                    
//                                                         setShowSuggestions(false);                                                      
//                                                 }}
//                                                 >
//                                                              {item.name}
//                                                     <img src={item.image} alt='' className={styled.image}/>
//                                                </Link>                        
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                                 {filterdata.length === 0 && datainput && <p>Không có gợi ý</p>}


//         </div>
//     );
// }

// export default Search;



import React, { useEffect, useState, useMemo } from 'react';
import axiosClient from '../../../Api/axiosClient';
import { Link } from 'react-router-dom';
import styled from '../style/Search.module.scss';
import { useRef } from 'react';
function Search(props) {
    const [data, setData] = useState([]);
    const [datainput, setDatainput] = useState('');
    const [showsuggestions, setShowSuggestions] = useState(false);
    //==============================đóng mởi phần xu hướng tìm kiếm=======================================
    // search trends : xu hướng tìm kiếm 
    const [searchtrends , setSearchtreands] = useState(false);
    const suggestionsRef = useRef(null); // Tạo tham chiếu đến vùng gợi ý
    let Link_Searchtreds = [
        {
                id:1,
                enpoint: "samsung",
                name: "Samsung đời mới",
                image:"https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png"
        },
        {
                id:2,
                enpoint: "IPhone",
                name: "Dòng Iphone 16 đời mới ",
                image: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-16-pro-max-titan-den.png"
        }
    ];



    const Linkjson = ["samsung", "tivi"];
    useEffect(() => {
        const Handledata = async () => {
            try {
                const Fetchdata = await Promise.all(
                    Linkjson.map((List) => axiosClient(`/Searchdata/${List}.json`))
                );

                const combinedData = Fetchdata.flatMap((response) =>
                    (Array.isArray(response) ? response : []).map((Item) => ({...Item})
           
                ));
                setData(combinedData);
                console.log("Đã tải dữ liệu thành công " + combinedData);
            } catch (error) {
                console.error("Lỗi lấy dữ liệu " + error);
            }
        };

        Handledata();
    }, []);

    const filterdata = useMemo(() => {
        if (!datainput.trim()) {
            return [];
        }

        const filtered = data.filter((Item) =>
            Item.name.toLowerCase().includes(datainput.toLowerCase())
        );

       
        return filtered;
    }, [datainput, data]);

    useEffect(() => {
        setShowSuggestions(filterdata.length > 0);
    }, [filterdata]);

    const handleClickoutside = (event) => {  
      if (  suggestionsRef.current &&  !suggestionsRef.current.contains(event.target)) {
                     setSearchtreands(false);
        }
           
        const suggestionsContainer = document.querySelector(`.${styled.suggestions}`);
        if (suggestionsContainer && !suggestionsContainer.contains(event.target)) {
                setShowSuggestions(false);
         
        }
     
    };
  
    useEffect(() => {
        document.addEventListener('mousedown', handleClickoutside);
       
        return () => {
            document.removeEventListener('mousedown', handleClickoutside);
        };
    }, []);

    return (
        <div className={styled.Container}>
            <input
                id='inputproduct'
                className={styled.input}
                type='text'
                onChange={(e) => setDatainput(e.target.value)}
                placeholder='Bạn muốn tìm gì'
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        setShowSuggestions(false);
                    }
                }}
                onClick={() => {
                        setSearchtreands(true);
                }}
            />
            {showsuggestions ? (
                <div className={styled.suggestions}>
                    {filterdata.map((item) => (
                        <div key={item.id}>
                            <Link
                                to={`/Detail/${item.label}/${item.id}`}
                                className={styled.link}
                                onClick={() => setShowSuggestions(false)}
                            >
                                {item.name}
                                <img src={item.image} alt='' className={styled.image} />
                            </Link>
                        </div>
                    ))}
                    {console.log(searchtrends)}
              
                  
              
          
                </div>
                ): ""
            }
            {searchtrends && !showsuggestions ? (
                <div ref={suggestionsRef}  className={styled.searchtrends} id='searchtrends'>
                            {Link_Searchtreds.map((Item) => (
                               
                         <div id={Item.id}> 
                            <Link className={styled.link}  to={`/label/${Item.enpoint}`}>   {Item.name}  </Link>    
                        </div>
            ))}    
                    </div>

            ):null}

            
        </div>
    );
}
export default Search;
