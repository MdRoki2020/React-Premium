import React, { useState } from 'react';
import './App.css';
import firstImage from '../src/image/blog1.jpg';
import secondImage from '../src/image/blog2.jpg';
import thirdImage from '../src/image/blog3.jpg';

function App() {
  const [mainImage, setMainImage] = useState(firstImage);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="App">
      <div className="product-image-viewer">
        <div className="main-image-viewer">
          {mainImage && <img src={mainImage} alt="Main Image" />}
        </div>
        <div className="small-image-viewers">
          <img
            src={secondImage}
            alt="Image 1"
            onClick={() => handleImageClick(secondImage)}
          />
          <img
            src={thirdImage}
            alt="Image 2"
            onClick={() => handleImageClick(thirdImage)}
          />
          {/* Add more small images here */}
        </div>
      </div>
    </div>
  );
}

export default App;
