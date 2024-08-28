// App 컴포넌트: 앱의 메인 구조를 구성하고 라우팅을 관리합니다.

import React from "react";
import {Route, Routes} from"react-router-dom"
import Home from"./pages/Home";
import Login from"./pages/Login";
import Signup from"./pages/Signup";
import Profile from"./pages/Profile";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
  <>
  <AuthContextProvider>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route 
      path="/profile" 
      element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>}/>
    </Routes>
  </AuthContextProvider>
  </> 
);  
};

export default App;