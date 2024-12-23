

// // const handleStart = () => {
// //         // Destructuring: cho phép bạn trích xuất một giá trị từ một đối tượng hoặc mảng và gán vào biến tương ứng 
// //                  // ví dụ về Destructuring với mảng(Array)
// //                  // dạng 1 : cơ bản 
// //                  let Arrays = ["title","Đây là dạng 1 cơ bản "];

// //                  const [title,text] = Arrays;
// //                  console.log(title,text);
// //                  //dạng 2 : Bỏ qua phần tử 
// //                  let index = ["phần tử 1","phần tử 2","phần tử 3"];

// //                  let [index1 , , index3] = index;
// //                  console.log(index1,index3) 
// //                  // dạng 3: lấy giá trị mặc định 
// //                  let number = [3];  // ở đây mảng chỉ có 1 phần tử 
// //                  const [a,b=10] = number; 
// //                  console.log(a); // a sẽ lấy giá trị mảng đầu tiên là 3 
// //                  console.log(b); // b sẽ lấy giá trị mảng thứ 2 nhưng mảng chỉ có một pt nên b mặc định sẽ lấy giá trị 10


// //              }
// //              let Arrays = [20];
// //              //cách viết gọn của arrow function 
// //            //    const sum = (a,b) => giá trị trả về     
// //            const  obj = {
// //                name: 'javascript basic',
// //                getName: function(){
// //                    return this;
// //                }
// //            }
// //            console.log(obj.getName());
           
// //            const Course = function (name, price){ // khai báo constructer để khởi tạo các thuộc tính của đối tượng 
// //                this.name = name;
// //                this.price = price;
// //            }
// //            const jsCourse = new Course("Javascript", 10000)
// //            console.log(jsCourse);
           
// //              const [count, setcount=10] = Arrays;
               
           
                   
           
// //                return(
// //                    <div style={{padding: 20}}>
                
                       
// //                         {/* gọi hàm không cần đối số  */}  
                          
// //                    </div>
// //                )

// //   //================================================
// //   1 . Thẻ  <React.Fragment>
// //   2 . Nếu có nhiều nút bấm riêng . ta tạo ra 1 component nút bấm để tái sử dụng 















// import React, { useEffect, useState } from 'react';
// import './App.css';
// import './Components/phone/HeaderStyle/reset.css';
// import axiosClient from './Api/axiosClient';
// import { Link } from 'react-router-dom';

// export default function Vd1() {
//     const linkTivi = '/Searchdata/tivi.json';
//     const linkphone = '/Searchdata/samsung.json';
//     const [Prevalue, Setvalue] = useState('');
//     const [smartphones, SetSmartphones] = useState([]);
//     const [tvs, SetTvs] = useState([]);
//     const [data1, Setdata1] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false); // State to control suggestions visibility
// let Linkjson = ["samssung","tivi"];
//     useEffect(() => {
//         const fetchData = async () => {
             
//             const smartphoneData = await axiosClient(linkphone);
//             const tvData = await axiosClient(linkTivi);
            
//             SetSmartphones(smartphoneData);
//             SetTvs(tvData);

//             console.log("Đã nhận dữ liệu từ smartphones.json và tvs.json");
//         };
//         fetchData();

//     }, []);

//     // Update function for input change
//     function Update(e) {
//         const value = e.target.value.toLowerCase();
//         Setvalue(value);
//         if (value.length > 0) {
//             const filteredData = [
//                 ...smartphones,
//                 ...tvs
//             ].filter((item) =>
//                 item.name.toLowerCase().includes(value) || item.category.toLowerCase().includes(value)
//             );

//             Setdata1(filteredData);
//             setShowSuggestions(filteredData.length > 0); // Show suggestions if there are any
//         } else {
//             Setdata1([]); // Clear suggestions if input is empty
//             setShowSuggestions(false); // Hide suggestions
//         }
//     }

//     // Hide suggestions when clicking outside
//     const handleClickOutside = (event) => {
//         const suggestionsContainer = document.querySelector('.suggestions');
//         if (suggestionsContainer && !suggestionsContainer.contains(event.target)) {
//             setShowSuggestions(false); // Hide suggestions
//         }
//     };

//     useEffect(() => {
//         // Add event listener for clicks
//         document.addEventListener('mousedown', handleClickOutside);
        
//         return () => {
//             // Clean up event listener on unmount
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <div>
//             <input type="text" onChange={Update} /> {/* Handle user input */}
//             {showSuggestions && ( // Only show suggestions if `showSuggestions` is true
//                 <div className="suggestions" style={{ border: '1px solid #ccc', maxHeight: '200px', overflowY: 'auto' }}>
//                     {data1.map((item) => (
//                     <Link 
//                         to={`/Detail/${item.label}/${item.id}`}
//                         key={item.id} 
//                         style={{ margin: '5px 0' }}>
//                         {item.name}

//                         </Link> // Add a key prop
//                     ))}
//                 </div>
//             )}
//             {data1.length === 0 && <p>Không có gợi ý</p>} {/* Show message when no suggestions */}
//         </div>
//     );
// }

// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import axiosClient from './Api/axiosClient';
// import { use } from 'react';
// function Vd1(props) {
//     const [data , setData] = useState();
//     const [prevalue,setValue] = useState();
//     const [setdata, setData1] = useState();
//     const ArrayLinks = ['samsung' , 'tivi'];

// //     useEffect(() => {
// //         const Handledata = async() => {
// //             try {
// //                 const Fetchdata =  ArrayLinks.map(async(item) => 
// //                        await axiosClient(`/Searchdata/${item}.json`)
// //                 )
// //                 setData(Fetchdata); 
// //         }
                    
              
           
            
// //             catch (error) {
// //                     console.error("Error fetcching data"+error);
// //             }   
// //     }
// //     Handledata();
// //     },[])
// useEffect(() => {
//         const HandleData = async() => {
//                         const fetchdata = await axiosClient('/Searchdata/samsung.json');
//                         setData(fetchdata);
//         }
//         HandleData();
// },[])

//     function Update(event) {
//             let value = event.target.value.toLowerCase();
//             setValue(value);
//             if(value.length > 0){
//                     const filtersData = [...data];
//                     filtersData.filter((item) => {
//                             item.name.toLowerCase().includes(value) || item.category.toLowerCase().includes(value);
//                     });
//                     setData1(filtersData);
                    
//             }else {
//                     setData1([]);
//             }

//     }
   
//     return (
//         <div>
//         <input type='text' onChange={Update}/>  
        
//         <ul>
        
//                 { setdata &&  setdata.map((item) => (
//                                 <li key={item.id}> {item.name}  </li>
//                 ))}
//         </ul>
//         {/* sử dụng sự kiện onChange  */}
            
//         </div>
//     );
// }

// export default Vd1;





























// import React, { useEffect, useState } from 'react';
// import axiosClient from './Api/axiosClient';

// function Vd1() {
//     const [data, setData] = useState([]);
//     const ArraysLink = ['samsung', 'tivi'];

//     useEffect(() => {
//         const HandleData = async () => {
//             try {
//                 // Sử dụng Promise.all để xử lý các lời gọi API song song
//                 const link = await Promise.all(
//                     ArraysLink.map((item) =>
//                         axiosClient(`/Searchdata/${item}.json`)
//                     )
//                 );
//                 setData(link); // Cập nhật state với dữ liệu mới
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         HandleData();
//     }, []);

//     useEffect(() => {
//         if (data.length > 0) {
//             console.log(data);
//         }
//     }, [data]); // Log khi dữ liệu thay đổi

//     return <div>{data.length > 0 ? 'Data fetched successfully' : 'Loading...'}</div>;
// }

// export default Vd1;


// import React, { useEffect, useState } from 'react';
// import './App.css';
// import './Components/phone/HeaderStyle/reset.css';
// import axiosClient from './Api/axiosClient';
// import { Link } from 'react-router-dom';

// export default function Vd1() {
//     const links = [
//          "samsung",
//         "tivi"
      
//     ];

//     const [Prevalue, Setvalue] = useState('');
//     const [data, setData] = useState([]);
//     const [data1, Setdata1] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // Gọi axiosClient một lần cho tất cả các liên kết
//                 const responses = await Promise.all(links.map((link) => axiosClient(`/Searchdata/${link}.json`)));

//                 // Kết hợp dữ liệu từ tất cả các API
//                 const combinedData = [...responses];
                

//                 setData(combinedData);
//                 console.log("Đã tải dữ liệu thành công:", combinedData);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     const Update = (e) => {
//         const value = e.target.value.toLowerCase();
//         Setvalue(value);

//         if (value.length > 0 && data) {
//             const filteredData = data.filter(
//                 (item) =>
//                     item.name.toLowerCase().includes(value) ||
//                     item.category.toLowerCase().includes(value)
//             );

//             Setdata1(filteredData);
//             setShowSuggestions(filteredData.length > 0);
//         } else {
//             Setdata1([]);
//             setShowSuggestions(false);
//         }
//     };

//     const handleClickOutside = (event) => {
//         const suggestionsContainer = document.querySelector('.suggestions');
//         if (suggestionsContainer && !suggestionsContainer.contains(event.target)) {
//             setShowSuggestions(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <div>
//             <input type="text" onChange={Update} />
//             {showSuggestions && (
//                 <div className="suggestions" style={{ border: '1px solid #ccc', maxHeight: '200px', overflowY: 'auto' }}>
//                     {data1.map((item) => (
//                         <Link
//                             to={`/Detail/${item.label}/${item.id}`}
//                             key={item.id}
//                             style={{ margin: '5px 0' }}>
//                             {item.name}
//                         </Link>
//                     ))}
//                 </div>
//             )}
//             {data1.length === 0 && Prevalue && <p>Không có gợi ý</p>}
//         </div>
//     );
// }

 // =============================================================================================================
import React, { useEffect, useState } from 'react';
import './App.css';
import './Components/phone/HeaderStyle/reset.css';
import axiosClient from './Api/axiosClient';
import { Link } from 'react-router-dom';

export default function Vd1() {
    const links = ["samsung", "tivi"];

    const [Prevalue, Setvalue] = useState('');
    const [data, setData] = useState([]);
    const [data1, Setdata1] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    links.map((link) => axiosClient(`/Searchdata/${link}.json`))
                );

                // Kiểm tra và kết hợp dữ liệu
                const combinedData = responses.flatMap((response, index) => 
                    (Array.isArray(response) ? response : []).map((item) => ({ 
                        ...item,
                       
                    }))
                  
                );

                setData(combinedData);
                console.log("Đã tải dữ liệu thành công:", combinedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const Update = (e) => {
        const value = e.target.value.toLowerCase();
        Setvalue(value);

        if (value.length > 0) {
            const filteredData = data.filter((item) =>
                (item.name && item.name.toLowerCase().includes(value)) ||
                (item.category && item.category.toLowerCase().includes(value))
            );

            Setdata1(filteredData);
            setShowSuggestions(filteredData.length > 0);
        } else {
            Setdata1([]);
            setShowSuggestions(false);
        }
    };

    const handleClickOutside = (event) => {
       
        const suggestionsContainer = document.querySelector('.suggestions');
      

        if (suggestionsContainer && !suggestionsContainer.contains(event.target)) {
                setShowSuggestions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <input
                type="text"
                onChange={Update}
                placeholder="Tìm kiếm..."
                style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
                onKeyDown={(event) => {
                    if(event.key === 'Enter') {
                        setShowSuggestions(false);
                    }
                       
                }
                  }
            />
            {showSuggestions && (
                <div
                    className="suggestions"
                    style={{ border: '1px solid #ccc', maxHeight: '200px', overflowY: 'auto', marginTop: '5px' }}>
                    {data1.map((item) => (
                        <Link
                            to={`/Detail/${item.label}/${item.id}`}
                            key={item.id}
                            style={{ display: 'block', padding: '5px', textDecoration: 'none', color: 'white' }}
                            onClick={() => {
                                    
                                            setShowSuggestions(false);
                                    
                            }}
                            >
                            {item.name}
                            
                        </Link>
                    ))}
                </div>
            )}
            {data1.length === 0 && Prevalue && <p>Không có gợi ý</p>}
        </div>
    );
}
