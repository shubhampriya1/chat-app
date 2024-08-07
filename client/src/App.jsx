import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chatpage from "./pages/Chatpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Message from "./pages/Message";
import Page404 from "./pages/NotFound";
import PrivateRouter from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/chats" element={<Chatpage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chats/:chatId" element={<Message />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
