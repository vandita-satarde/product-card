import React from 'react';
import { createRoot } from "react-dom/client";
import Product, { ProductCard2 }  from './ProductCard/ProductCard';
import './index.css';


const root = createRoot(document.getElementById("root"));


function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", backgroundColor: "#f3f3f3", padding: "20px" }}>
      <Product
        title="Amazon Echo Dot (4th Gen)"
        price="2,499.99"

      />
      <ProductCard2
        title="Fire TV Stick with Alexa Voice Remote"
        price="2,599.99"
         
      />
    </div>
  );
}




root.render(
  <>
    <h1>Amazon</h1>
    <App />
  </>
);
