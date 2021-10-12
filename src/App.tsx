import { useEffect, useState } from 'react';
import Demo from './page/demo'
import {store} from './redux/store'
import Hoc from './components/Hoc'
function App(props: any) {
  const { num } = store.getState()
  const [currentNum,setCurrentNum] = useState<number | string>(num)
  useEffect(() => {
    store.dispatch({
      type: 'change',
      params: {
        num: 1
      }
    })
  },[])
  return (
    <div className="App">
      <Demo/>
      <Hoc message='newMsg'/>
    </div>
  );
}

export default App;
