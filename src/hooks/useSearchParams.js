import React from 'react'
const useSearchParam = param => {
    const getValue = React.useCallback(
      () => new URLSearchParams(window.location.search).get(param),
      [param]
    );
  
    const [value, setValue] = React.useState(getValue);
  
    React.useEffect(() => {
      const onChange = () => {
        setValue(getValue());
      };
  
      window.addEventListener('popstate', onChange);
      window.addEventListener('pushstate', onChange);
      window.addEventListener('replacestate', onChange);
  
      return () => {
        window.removeEventListener('popstate', onChange);
        window.removeEventListener('pushstate', onChange);
        window.removeEventListener('replacestate', onChange);
      };
    }, []);
  
    return value;
  };

  export default useSearchParam