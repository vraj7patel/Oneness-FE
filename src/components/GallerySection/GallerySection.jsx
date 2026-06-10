import React from 'react';
import './GallerySection.css';

// Assets
import img1 from '../../assets/homepage/Group 122 (1).png';
import img2 from '../../assets/homepage/Group 122 (2).png';
import img3 from '../../assets/homepage/Group 122 (3).png';
import img4 from '../../assets/homepage/Group 122 (4).png';

import frame1 from '../../assets/homepage/Vector (14).png';
import frame2 from '../../assets/homepage/Vector (15).png';
import frame3 from '../../assets/homepage/Vector (16).png';
import frame4 from '../../assets/homepage/Vector (17).png';
import bottomOrnament from '../../assets/homepage/Vector (18).png';

const GallerySection = () => {
  const galleryItems = [
    { id: 1, frame: frame1 },
    { id: 2, frame: frame2 },
    { id: 3, frame: frame3 },
    { id: 4, frame: frame4 }
  ];

  const [startIndex, setStartIndex] = React.useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % galleryItems.length);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Left Arrow */}
        <button 
          className="gallery-arrow gallery-arrow-left" 
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Images */}
        <div className="gallery-images">
          {galleryItems.map((item, index) => {
            const firstVisibleIndex = startIndex;
            const secondVisibleIndex = (startIndex + 1) % galleryItems.length;
            const isFirst = index === firstVisibleIndex;
            const isSecond = index === secondVisibleIndex;
            const isVisible = isFirst || isSecond;

            return (
              <div 
                key={item.id} 
                className={`gallery-item1 ${isVisible ? 'mobile-visible' : ''} ${isFirst ? 'mobile-first' : ''} ${isSecond ? 'mobile-second' : ''}`}
              >
                <img src={bottomOrnament} alt="" className="gallery-shadow" />
                <img src={item.frame} alt="" className="gallery-frame" />
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button 
          className="gallery-arrow gallery-arrow-right" 
          onClick={handleNext}
          aria-label="Next image"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
