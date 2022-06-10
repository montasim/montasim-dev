import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
