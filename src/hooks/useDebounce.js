import React,{ useState,useCallback,useRef,useEffect } from 'react'

// 对一个给定值，实现防抖
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
  
    React.useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      console.log(1)
  
      return () => {
          console.log(2)
        clearTimeout(handler);
      };
    }, [value]);
  
    return debouncedValue;
  };
  

export default useDebounce