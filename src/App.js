import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course/:id" element={<Course/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
