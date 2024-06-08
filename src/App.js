import { useState } from 'react';
import './App.css';
import Banner from './Banner';
import PlayGame from './PlayGame';

function App() {

  const [isPlay,setIsPlay] = useState(false);

  const toggleFunction = (pre) => {
     setIsPlay((pre) => !pre);
  }

  return (
    <div className="App">
      {isPlay ? <PlayGame /> : <Banner toggle={toggleFunction} />}
      
    </div>
  );
}

export default App;
