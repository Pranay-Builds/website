import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Content from "./Components/Main";
import Footer from "./Components/Footer";
import Layout from "./Outlet";
import NotFound from "./Components/NotFound";


function App() {
  return (
    <Routes>
      
      <Route element={<Layout />}>
       
        <Route path="/" element={<Content />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
