import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Login } from "./Login";
import { QuizComp } from "./QuizComp";
function App() {
  return (
    <div className="App flex items-center justify-center h-[100vh] w-[100vw] bg-yellow-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/quiz" element={<QuizComp />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
