import { useEffect, useState } from "react";


function useStatusUser(datas){
const [data , setData] = useState(() => {
        let getData = localStorage.getItem("value");
        return JSON.parse(getData);
})
useEffect(() => {
//  localStorage.removeItem("value")
  if(!datas){
      let cloneData = localStorage.getItem("value");
      if(cloneData){
            setData(JSON.parse(cloneData));
      }  
  } else {
      localStorage.setItem("value", JSON.stringify(datas));
      setData(datas);
  }
},[datas])

    return [data];
}

export default useStatusUser;


// import { useEffect, useState } from "react";

// function useStatusUser(datas) {

//   const [data, setData] = useState(null);
// localStorage.removeItem("value")
//   useEffect(() => {
//     try {
//       if (!datas) {
//         const cloneData = localStorage.getItem("value");
//         if (cloneData) {
//           setData(JSON.parse(cloneData));
//         }
//       } else {
//         localStorage.setItem("value", JSON.stringify(datas));
//         setData(datas);
//       }
//     } catch (error) {
//       console.error("Error parsing data:", error);
//       setData(null);
//     }
//   }, [datas]);

//   return [data];
// }

// export default useStatusUser;