import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chatpage from "./pages/Chatpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Message from "./pages/Message";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chats" element={<Chatpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path='/chats/:chatId' element={<Message/>}/>
      </Routes>
    </Router>
  );
}

export default App;
