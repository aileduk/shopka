import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./CartPage/CartPage";
import MainPage from "./MainPage/MainPage";
import ProductPage from "./ProductPage/ProductPage";
import { ContextProvider } from "../../Context/context";

function App() {
  return (
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product" element={<ProductPage />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>
  );
}

export default App;
