import React,{useRef} from 'react';
import './App.css';
import CanvasDraw from "react-canvas-draw";
import map from "./assets/mapApi.jpg"

function App() {
const firstCanvas=useRef(null)
const secondCanvas=useRef(null)

const handleClick =()=>{
  const data=firstCanvas.current.getSaveData();
  console.log(data);
  secondCanvas.current.loadSaveData(data);
}

  return (
    <div>
      <button onClick={handleClick}>Save Drawing</button>
      <CanvasDraw
        brushRadius={3}
        brushColor="#130f40"
        catenaryColor="red"
        hideGrid={false}
        style={{ border: "2px solid #000" }}
        // imgSrc={map}

        ref={firstCanvas}
      />

      <CanvasDraw hideGrid={true} disabled={true} ref={secondCanvas} />
    </div>
  );
}

export default App;
