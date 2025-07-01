//import logo from './logo.svg';
import {Route, Routes} from "react-router-dom"
import './App.css';
import Survey from './Components/Survey';
import Board from "./Components/Board";
import Title from "./Components/Title";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
