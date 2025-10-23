// src/App.js
import React from "react";
import ImageSlider from "./components/ImageSlider";
import "./App.css";

const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?auto=format&fit=crop&w=800&q=80",
];

function App() {
  return (
    <div className="app-container">
      <h1>Awesome React Image Slider</h1>
      <ImageSlider images={images} />
      <p>Enjoy smooth transitions and stunning photos!</p>
      <footer className="app-footer">App developed by Abinaya</footer>
    </div>
  );
}

export default App;
