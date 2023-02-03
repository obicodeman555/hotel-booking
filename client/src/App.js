import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Header from "./components/Header";
import { Suspense } from "react";
import Loader from "./components/loading/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer Theme={"colored"} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
