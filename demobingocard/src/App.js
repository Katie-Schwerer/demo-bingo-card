//import logo from './logo.svg';
import {Route, Routes} from "react-router-dom"
import './App.css';
import Survey from './Components/Survey';
import Board from "./Components/Board";
import Title from "./Components/Title";
import Download from "./Components/Download";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/title" element={<Title />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
}

export default App;
