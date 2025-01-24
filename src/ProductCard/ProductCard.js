import React from "react";
import "./ProductCard.css";
import product1Image from "./../images/amazon-product-1.jpg"
import product2Image from "./../images/amazon-product-2.jpg"

export default function ProductCard(props) {
  const { title, price } = props;
  return (
    <div className="product-card">
      <img src={product1Image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">₹{price}</p>
        <div className="product-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}


export function ProductCard2(props) {
  const { title, price } = props;
  return (
    <div className="product-card product-horizontal">
      <img src={product2Image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">₹{price}</p>
        <div className="product-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
