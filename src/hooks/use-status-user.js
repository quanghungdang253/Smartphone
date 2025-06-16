// import { useEffect, useState } from "react";


// function useStatusUser(datas, refreshFlag = 0){
// const [data , setData] = useState(() => {
//         let getData = localStorage.getItem("value");
         
//         return JSON.parse(getData);
// })
// console.log(datas);
// console.log(data);

//  useEffect(() => {
//     try {
//       if (!data) {
//         let cloneData = localStorage.getItem("value");
      
//         if (cloneData) {
//           setData(JSON.parse(cloneData));
//         } else {
//           setData(null); // ✅ Nếu không còn localStorage thì phải reset data
//         }
//       } else {
//         localStorage.setItem("value", JSON.stringify(datas));
//         setData(datas);
//       }
//     } catch {
//       setData(null);
//     }
//   }, [datas, refreshFlag]);

//     return [data];
// }

// export default useStatusUser;


import { useEffect, useState } from "react";

function useStatusUser() { // Remove 'datas' and 'refreshFlag' as direct props for simplicity
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const localUser = localStorage.getItem("currentUser");
      return localUser ? JSON.parse(localUser) : null;
    } catch (e) {
      console.error("Error parsing currentUser from localStorage:", e);
      return null;
    }
  });

  // Use useEffect to react to external changes (like logout) or initial load
  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const localUser = localStorage.getItem("currentUser");
        setCurrentUser(localUser ? JSON.parse(localUser) : null);
      } catch (e) {
        console.error("Error parsing currentUser on storage change:", e);
        setCurrentUser(null);
      }
    };

    // Listen for custom event dispatch on logout/login
    window.addEventListener("user-status-changed", handleStorageChange);
    // Also listen for general storage events (though less reliable for same-tab changes)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("user-status-changed", handleStorageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Function to update user status (e.g., login/logout)
  const setLoggedInUser = (user) => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
    setCurrentUser(user);
    // Dispatch custom event to notify other parts of the app
    window.dispatchEvent(new Event("user-status-changed"));
  };

  return [currentUser, setLoggedInUser];
}

export default useStatusUser;