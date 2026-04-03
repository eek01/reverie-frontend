import React from 'react';
import ReactDOM from 'react-dom/client'; //document object model
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // does navigation
import './index.css';
import Layout from "./Layout"; // ./ means this directory
import Home from "./pages/Home";
import Impact from "./pages/Impact";
import Womens from "./pages/Womens";
import Mens from "./pages/Mens";
import Decor from "./pages/Decor";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="impact" element={<Impact />} />
          <Route path="womens" element={<Womens />} />
          <Route path="mens" element={<Mens />} />
           <Route path="decor" element={<Decor />} />
           <Route path="shop/:category/:id" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);