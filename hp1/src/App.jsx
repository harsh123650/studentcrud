import Contact from './Contact.jsx';
import Home from './Home.jsx';
import { BrowserRouter as Router, Routes, Route, Link, useLocation,Navigate } from 'react-router-dom';

import { useState } from "react";
import UserLogin from './Userlogin.jsx';
import Mynavbar from './Mynavbar.jsx';
import Studentlist from './Studentlist.jsx';

// ProtectedRoute component
function ProtectedRoute({ isLoggedIn, children }) {
   return isLoggedIn ? children : <Navigate to="/" replace />;
 }
export default function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false); // 
  return (
    <>
     <Router>
      <Mynavbar /> {/* Always render Navbar component */}
      <Routes>
        {/* { <Route path="/" element={<UserLogin/>} /> }
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/ser" element={<Service />} />
       <Route path="/api" element={<API />} />  */}

         <Route path="/" element={<UserLogin setIsLoggedIn={setIsLoggedIn} />} />
        
      
       <Route path="/home" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />   </ProtectedRoute> } />   
      <Route path="/studentlist" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Studentlist />   </ProtectedRoute> } />
       <Route path="/contact" element={  <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Contact/>   </ProtectedRoute> } />
       
       
       
      
      </Routes>
      
    </Router>

    </>
  )
}

