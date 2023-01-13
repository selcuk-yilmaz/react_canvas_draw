
import './App.css';
import CanvasDraw from "react-canvas-draw";
import map from "./assets/mapApi.jpg"

function App() {


  return (
    <div>
      <CanvasDraw brushRadius={3} imgSrc={map} />
        
        <CanvasDraw/>
    </div>
  );
}

export default App;
