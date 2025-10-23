// src/components/ImageSlider.js
import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <div style={{ textAlign: "center" }}>
        <button onClick={slideLeft} style={{ fontSize: "2rem" }}>{"<"}</button>
        <img
          src={images[index]}
          alt={`slide-${index}`}
          style={{ width: "400px", borderRadius: "10px", margin: "0 20px" }}
        />
        <button onClick={slideRight} style={{ fontSize: "2rem" }}>{">"}</button>
      </div>
    )
  );
};

export default ImageSlider;
