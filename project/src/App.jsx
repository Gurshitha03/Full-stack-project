import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import Drawings from "./pages/Drawings";
import Photography from "./pages/Photography";
import Sculpture from "./pages/Sculpture";
import ArtistDashboard from "./pages/ArtistDashboard";
import CuratorDashboard from "./pages/CuratorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import VisitorDashboard from "./pages/VisitorDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/drawings" element={<Drawings />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/sculpture" element={<Sculpture />} />
        <Route path="/artist" element={<ArtistDashboard />} />
        <Route path="/curator" element={<CuratorDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/visitor" element={<VisitorDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
