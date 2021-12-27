import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/search/search";
import User from "./components/user/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user/:userName" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
