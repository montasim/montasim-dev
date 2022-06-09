import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
