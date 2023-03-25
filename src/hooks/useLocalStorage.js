import { useEffect, useState } from "react";

const useWatchLocalStorage = (key, event) => {
  const [data, setData] = useState(() => {
   return localStorage.getItem(key); 
  });

  const updateData = () => {
    setData(localStorage.getItem(key));
  }

  useEffect(() => {
    window.addEventListener(event, () => updateData());
    return window.removeEventListener(event, () => updateData());
  }, []);

  return data;
}

export default useWatchLocalStorage;