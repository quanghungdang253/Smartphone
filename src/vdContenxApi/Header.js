// // // import React, { useContext } from 'react';
// // // import { Appcontext, AppProvider } from '../Context/Appcontext';

// // // import styled from 'styled-components';

// // // function Header(props) {
  


// // //     return (
// // //       <Appcontext.Consumer> 
      
// // //       {({ custom_color, Toggle }) => (
// // //                 <div
// // //                     style={{
// // //                         backgroundColor: custom_color ? '#333' : '#fff',
// // //                         color: custom_color ? '#fff' : '#000',
// // //                         padding: '20px',
// // //                         borderRadius: '8px',
// // //                     }}
// // //                 >
// // //                     <h1>{custom_color ? 'Dark Mode' : 'Light Mode'}</h1>
// // //                     <p>This is the content area.</p>
// // //                     <button onClick={Toggle}>
// // //                         Toggle Theme
// // //                     </button>
// // //                 </div>
// // //             )}
// // //     </Appcontext.Consumer>
  
    
// // //     );
// // // }

// // // const Wrapper = styled.div`
     
// // // `


// // // export default Header;



// // import React from 'react';
// // import { Createcontext } from '../Context/Appcontext';
// // import styled from 'styled-components';

// // function Header() {
// //     return (
// //         <Createcontext.Consumer>
// //             {({ bool, Button }) => (
// //                 <div
// //                     style={{
// //                         backgroundColor: bool ? '#333' : '#fff',
// //                         color: bool ? '#fff' : '#000',
// //                         padding: '20px',
// //                         borderRadius: '8px',
// //                     }}
// //                 >
// //                     <h1>{bool ? 'Dark Mode' : 'Light Mode'}</h1>
// //                     <p>This is the content area.</p>
// //                     <button onClick={Button}>Sáng</button>
// //                     <button onClick={Button}>Tối</button>
// //                 </div>
// //             )}
// //         </Createcontext.Consumer>
// //     );
// // }

// // const Wrapper = styled.div`
// //     // Styles nếu cần
// // `;

// // export default Header;



// import React, { useState, useContext } from 'react';
// import { Createcontext } from '../Context/Appcontext';
// import styled from 'styled-components';

// function Header() {
//     const { bool, Button } = useContext(Createcontext); // Lấy dữ liệu từ context
//     const [selectedMode, setSelectedMode] = useState(bool ? 'Dark' : 'Light'); // Quản lý trạng thái nút

//     const handleModeChange = (mode) => {
//         setSelectedMode(mode); // Cập nhật trạng thái nút
//         if (mode === 'Dark' && !bool) Button(); // Kích hoạt chế độ tối
//         if (mode === 'Light' && bool) Button(); // Kích hoạt chế độ sáng
//     };

//     return (
//         <div
//             style={{
//                 backgroundColor: bool ? '#333' : '#fff',
//                 color: bool ? '#fff' : '#000',
//                 padding: '20px',
//                 borderRadius: '8px',
//             }}
//         >
//             <h1>{bool ? 'Dark Mode' : 'Light Mode'}</h1>
//             <p>This is the content area.</p>
//             <button
//                 onClick={() => handleModeChange('Light')}
//                 style={{
//                     backgroundColor: selectedMode === 'Light' ? '#ddd' : '#fff',
//                 }}
//             >
//                 Sáng
//             </button>
//             <button
//                 onClick={() => handleModeChange('Dark')}
//                 style={{
//                     backgroundColor: selectedMode === 'Dark' ? '#ddd' : '#fff',
//                 }}
//             >
//                 Tối
//             </button>
//         </div>
//     );
// }

// const Wrapper = styled.div`
//     // Styles nếu cần
// `;

// export default Header;


import React, { useState, useContext } from 'react';
import { Createcontext } from '../Context/Appcontext';
import styled from 'styled-components';

function Header() {
    const { bool, Button } = useContext(Createcontext); // Lấy dữ liệu từ context
    const [selectedMode, setSelectedMode] = useState(bool ? 'Dark' : 'Light'); // Quản lý trạng thái

    const handleModeChange = (mode) => {
        setSelectedMode(mode); // Cập nhật trạng thái radio
        if (mode === 'Dark' && !bool) Button(); // Kích hoạt chế độ tối
        if (mode === 'Light' && bool) Button(); // Kích hoạt chế độ sáng
    };

    return (
        <div
            style={{
                backgroundColor: bool ? '#333' : '#fff',
                color: bool ? '#fff' : '#000',
                padding: '20px',
                borderRadius: '8px',
            }}
        >
            <h1>{bool ? 'Dark Mode' : 'Light Mode'}</h1>
            <p>This is the content area.</p>
            <form>
                <label>
                    <input
                        type="radio"
                        value="Light"
                        checked={selectedMode === 'Light'}
                        onChange={() => handleModeChange('Light')}
                        style={{ display: 'none' }} // Ẩn radio button
                    />
                    <Image
                      
                        alt="Light Mode"
                        onClick={() => handleModeChange('Light')}
                        isSelected={selectedMode === 'Light'}
                    />
                </label>
                <label style={{ marginLeft: '10px' }}>
                    <input
                        type="radio"
                        value="Dark"
                        checked={selectedMode === 'Dark'}
                        onChange={() => handleModeChange('Dark')}
                        style={{ display: 'none' }} // Ẩn radio button
                    />
                    <Image
                      
                        alt="Dark Mode"
                        onClick={() => handleModeChange('Dark')}
                        isSelected={selectedMode === 'Dark'}
                    />
                </label>
            </form>
        </div>
    );
}

const Image = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: ${(props) => (props.isSelected ? '3px solid #007BFF' : 'none')};
    border-radius: 8px;
`;

export default Header;
