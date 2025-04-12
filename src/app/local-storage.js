



export const saveToLocalStorage = (key, state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (e) {
      console.warn('Lưu localStorage không thành công:', e);
    }
  };
  
  export const loadFromLocalStorage = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn('Tải localStorage thất bại:', e);
      return undefined;
    }
  };
  
  export const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('Xóa localStorage thất bại:', e);
    }
  };
  