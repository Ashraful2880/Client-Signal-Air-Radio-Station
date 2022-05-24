import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import About from './Components/About/About';
import AllUsers from './Components/AllUsers/AllUsers';
import CheckBulb from './Components/CheckBulb/CheckBulb';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import RadioStation from './Components/RadioStation/RadioStation';
import Footer from "./Components/Shared/Footer/Footer";
import Header from './Components/Shared/Header/Header';
import Signin from './Components/Signin/Signin';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/checkBulb" element={<CheckBulb />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/radioStation" element={<RadioStation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
