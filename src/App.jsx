import './App.css'
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Dashboard from "./Dashboard";
import MenuBar from './MenuBar'
import { useState } from 'react';
import { useAddress } from "@thirdweb-dev/react";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const address = useAddress();

  return (
    <>
   <MenuBar />
    <div className="container mt-5">
  
  { !address?  <div>  ولت متصل نیست</div>

  : <div>  {address} :ادرس ولت </div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isSignedIn={isSignedIn}>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
   
    </div>
    
    </>
  )
}

export default App
