import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./pages/home/Home";
import Course from "./pages/course/Course";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course/:id" element={<Course/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
