
import React, { useEffect, useState, useMemo } from 'react';
import axiosClient from '../../../Api/axiosClient';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretUp} from "@fortawesome/free-solid-svg-icons"
import {faSearch} from '@fortawesome/free-solid-svg-icons'; 
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import styled from '../style/Search.module.scss';
import iconsearch from '../icon/fire.jpg';
import data_search from '../data/data_search.json';
import Overlay from '../../Overlayer';
import { useRef } from 'react';
function Search({shows}) {

        const [isNavVisible, setIsNavVisible] = useState(false);
    const [data, setData] = useState([]);
    const [datainput, setDatainput] = useState('');
    const [showsuggestions, setShowSuggestions] = useState(false);
   
    // let Clearvalue = document.getElementById("inputproduct"); 
    //==============================đóng mởi phần xu hướng tìm kiếm=======================================
    // search trends : xu hướng tìm kiếm 
    const [searchtrends , setSearchtreands] = useState(false);
 
    const suggestionsRef = useRef(null); // Tạo tham chiếu đến vùng gợi ý

    let Link_Searchtreds = data_search.search_trends;
    const Linkjson = data_search.enpoint;
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
         shows(false);  
      if (suggestionsRef.current &&  !suggestionsRef.current.contains(event.target)) {
                     setSearchtreands(false);
                 
                    document.getElementById("inputproduct").value = "";                                                
        }
           
        const suggestionsContainer = document.querySelector(`.${styled.suggestions}`);
        if (suggestionsContainer && !suggestionsContainer.contains(event.target)) {
                setShowSuggestions(false);
                setSearchtreands(false);
                document.getElementById("inputproduct").value = "";    
                                    
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
            <div className={styled.Containerinput}>  
                 <FontAwesomeIcon icon={faSearch} />
                 <input
                    ref={suggestionsRef}
                    id="inputproduct"
                    className={styled.input}
                    type='text'
                    onChange={(e) => setDatainput(e.target.value)}
                    placeholder='Bạn muốn tìm gì'
                    onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        setShowSuggestions(false);
                        // document.getElementById("inputproduct").value = "";                     
                    }    
                }}
                onClick={ () => {
                     setSearchtreands(true); // Bật gợi ý tìm kiếm
                     shows(true);                  
                }}
            />
            <a className={styled.icon__Close}
                    onClick={() => setSearchtreands(false)}
            >
                {searchtrends ?
                     (<FontAwesomeIcon icon={faXmark}/>  ) : ""

                     }    
            </a>
            </div>
            {showsuggestions ? (
                <div className={styled.suggestions}>
                    {filterdata.map((item) => (
                        <div key={item.id}>
                            <Link
                                to={`/Detail/${item.label}/${item.id}`}
                                className={styled.link}
                                onClick={() => {
                                    setShowSuggestions(false);
                                    setSearchtreands(false);
                                    document.getElementById("inputproduct").value = "";
                                }} 
                            >

                                           {item.name}    
                                <img src={item.image} alt='' className={styled.image} />
                                <h3 className={styled.price}> Giá:{item.price}  </h3>
                            </Link>
                        </div>
                    ))}
                </div>
                ) : ""
            }
            {searchtrends && !showsuggestions ? (
                
                <div className='trend'> 

                    <div> 
                    <FontAwesomeIcon icon={faCaretUp} className={styled.icon} />
                </div>
                <div ref={suggestionsRef}  className={styled.searchtrends} id='searchtrends'>
                <div className={styled.trend}>  
                     <h1> Xu hướng tìm kiếm  </h1>
        <img src={iconsearch} alt='hình ảnh' className={`${styled.image} ${styled.icontrends}`}/>
                </div>   
          <div className={styled.link__trends}> 
                {Link_Searchtreds.map((Item) => (   
                         <div id={Item.id} className={styled.link__trends__item}> 
                          
                            <Link
                                 className={styled.link} 
                                 to={`/label/${Item.enpoint}`}
                                 onClick={() => {
                                    setShowSuggestions(false);
                                    setSearchtreands(false);
                                    document.getElementById("inputproduct").value = "";
                                 }} 
                                 >  
                                   <img src={Item.image} alt='ảnh' className={styled.image}/>                           
                                         {Item.name}                             
                                   </Link>    
                        </div>        
                ))}    
                         </div>
                    </div>
                   
                </div>
            ):null}
           
        </div>
    );
}
export default Search;
