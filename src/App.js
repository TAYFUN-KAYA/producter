import { Routes, Route } from "react-router-dom";
import "./assets/styles/task/content.scss";
import UpBar from "./pages/UpBar";
import LeftBar from "./pages/LeftBar";
import Task from "./pages/homepage/Task";
import Nopage from "./pages/homepage/Nopage";
import AddNewTask from "./pages/homepage/AddNewTask";

function App() {
  return (
    <div className="App">
      <div className="global-container">
        <UpBar />
        <div className="content-container">
          <LeftBar />
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/add-new-task" element={<AddNewTask />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
