import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Main2 from "./pages/Main2";
import Policy from "./pages/Policy";
import Setting from "./pages/Setting";
import "./css/reset.css";
import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main2" element={<Main2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
