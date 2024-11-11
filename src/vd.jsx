

const handleStart = () => {
        // Destructuring: cho phép bạn trích xuất một giá trị từ một đối tượng hoặc mảng và gán vào biến tương ứng 
                 // ví dụ về Destructuring với mảng(Array)
                 // dạng 1 : cơ bản 
                 let Arrays = ["title","Đây là dạng 1 cơ bản "];

                 const [title,text] = Arrays;
                 console.log(title,text);
                 //dạng 2 : Bỏ qua phần tử 
                 let index = ["phần tử 1","phần tử 2","phần tử 3"];

                 let [index1 , , index3] = index;
                 console.log(index1,index3) 
                 // dạng 3: lấy giá trị mặc định 
                 let number = [3];  // ở đây mảng chỉ có 1 phần tử 
                 const [a,b=10] = number; 
                 console.log(a); // a sẽ lấy giá trị mảng đầu tiên là 3 
                 console.log(b); // b sẽ lấy giá trị mảng thứ 2 nhưng mảng chỉ có một pt nên b mặc định sẽ lấy giá trị 10


             }
             let Arrays = [20];
             //cách viết gọn của arrow function 
           //    const sum = (a,b) => giá trị trả về     
           const  obj = {
               name: 'javascript basic',
               getName: function(){
                   return this;
               }
           }
           console.log(obj.getName());
           
           const Course = function (name, price){ // khai báo constructer để khởi tạo các thuộc tính của đối tượng 
               this.name = name;
               this.price = price;
           }
           const jsCourse = new Course("Javascript", 10000)
           console.log(jsCourse);
           
             const [count, setcount=10] = Arrays;
               
           
                   
           
               return(
                   <div style={{padding: 20}}>
                
                       
                        {/* gọi hàm không cần đối số  */}  
                          
                   </div>
               )

  //================================================
  1 . Thẻ  <React.Fragment>
  2 . Nếu có nhiều nút bấm riêng . ta tạo ra 1 component nút bấm để tái sử dụng 
















               
import React, { useEffect, useState } from 'react';
import './App.css';
import './Components/phone/HeaderStyle/reset.css';
import Main_home from './Components/Home/Main__Home/Main__home';
import { Routes, Route } from 'react-router-dom';
import InformationPhones from './Components/informationPhone/informationPhone';
import categoryApi from './api/categoryApi';
import Home from './api/home';
import Render from './api/samsung';
import CategoryApi from './api/categoryApi';

export default function App() {
    const url = '/samsung.json';
    const [Prevalue, Setvalue] = useState('');
    const [data, Setdata] = useState([]);
    const [data1, Setdata1] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false); // State to control suggestions visibility

    useEffect(() => {
        const FunctionAsync = async () => {
            const fetchdata = await fetch(url);
            const data = await fetchdata.json();
            Setdata(data);
            console.log("đã nhận data");
        }
        FunctionAsync();
    }, []);

    // Update function for input change
    function Update(e) {
        const value = e.target.value.toLowerCase();
        Setvalue(value);
        if (value.length > 0) {
            const filteredData = data.filter((item) =>
                item.name.toLowerCase().includes(value)
            );
            console.log(filteredData);
            Setdata1(filteredData);
            setShowSuggestions(filteredData.length > 0); // Show suggestions if there are any
        } else {
            Setdata1([]); // Clear suggestions if input is empty
            setShowSuggestions(false); // Hide suggestions
        }
    }

    // Hide suggestions when clicking outside
    const handleClickOutside = (event) => {
        const suggestionsContainer = document.querySelector('.suggestions');
        if (suggestionsContainer && !suggestionsContainer.contains(event.target)) {
            setShowSuggestions(false); // Hide suggestions
        }
    };

    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            // Clean up event listener on unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <input type="text" onChange={Update} /> {/* Handle user input */}
            {showSuggestions && ( // Only show suggestions if `showSuggestions` is true
                <div className="suggestions" style={{ border: '1px solid #ccc', maxHeight: '200px', overflowY: 'auto' }}>
                    {data1.map((item) => (
                        <p key={item.id} style={{ margin: '5px 0' }}>{item.name}</p> // Add a key prop
                    ))}
                </div>
            )}
            {data1.length === 0 && <p>Không có gợi ý</p>} {/* Show message when no suggestions */}
        </div>
    );
}
