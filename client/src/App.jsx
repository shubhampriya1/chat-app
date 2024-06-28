import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chatpage from "./pages/Chatpage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chats" element={<Chatpage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
