// ExampleCarouselImage.jsx

import React from 'react';

const ExampleCarouselImage = ({ src, alt }) => {
  return (
    <img 
      src={src}
      className="d-block mx-auto w-50" // Menambahkan kelas mx-auto untuk margin horizontal otomatis
      alt={alt} 
    />
  );
};

export default ExampleCarouselImage;
