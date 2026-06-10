import React, { useEffect, useState } from 'react';
import './GalleryPage.css';

// Images
import heroBg from '../../assets/gallry/gallery hero.png';
import dividerImg from '../../assets/gallry/Group 5 (9).png';
import sampleImg from '../../assets/gallry/2150838495 1.png';
import topDivider from '../../assets/blog/dvider_20 3 (1).png';
import bottomDivider from '../../assets/blog/dvider_20 4 (2).png';

const categories = [
  'All',
  'Yoga & Meditation',
  'Sound Healing',
  'Breathwork',
  'Dharma Talks',
  'Spiritual Teachings',
  'Music, Kirtan & Voice',
  'Dance & Conscious Movement',
  'Arts & Body Practices',
  'Community',
  'Social & Cultural Gatherings',
];

const mediaFilters = ['Both', 'Photos', 'Videos'];

// Gallery items data - using available images and placeholders
const galleryItems = [
  // Page 1 items (1-12)
  { id: 1, type: 'photo', category: 'Yoga & Meditation', img: sampleImg },
  { id: 2, type: 'photo', category: 'Sound Healing', img: sampleImg },
  { id: 3, type: 'video', category: 'Music, Kirtan & Voice', img: sampleImg },
  { id: 4, type: 'photo', category: 'Spiritual Teachings', img: sampleImg },
  { id: 5, type: 'photo', category: 'Dance & Conscious Movement', img: sampleImg },
  { id: 6, type: 'photo', category: 'Yoga & Meditation', img: sampleImg },
  { id: 7, type: 'video', category: 'Arts & Body Practices', img: sampleImg },
  { id: 8, type: 'photo', category: 'Community', img: sampleImg },
  { id: 9, type: 'photo', category: 'Social & Cultural Gatherings', img: sampleImg },
  { id: 10, type: 'photo', category: 'Breathwork', img: sampleImg },
  { id: 11, type: 'video', category: 'Dharma Talks', img: sampleImg },
  { id: 12, type: 'photo', category: 'Spiritual Teachings', img: sampleImg },

  // Page 2 items (13-24)
  { id: 13, type: 'photo', category: 'Yoga & Meditation', img: sampleImg },
  { id: 14, type: 'video', category: 'Sound Healing', img: sampleImg },
  { id: 15, type: 'photo', category: 'Music, Kirtan & Voice', img: sampleImg },
  { id: 16, type: 'photo', category: 'Breathwork', img: sampleImg },
  { id: 17, type: 'photo', category: 'Dance & Conscious Movement', img: sampleImg },
  { id: 18, type: 'video', category: 'Community', img: sampleImg },
  { id: 19, type: 'photo', category: 'Arts & Body Practices', img: sampleImg },
  { id: 20, type: 'photo', category: 'Social & Cultural Gatherings', img: sampleImg },
  { id: 21, type: 'photo', category: 'Dharma Talks', img: null },
  { id: 22, type: 'video', category: 'Spiritual Teachings', img: null },
  { id: 23, type: 'photo', category: 'Yoga & Meditation', img: null },
  { id: 24, type: 'photo', category: 'Sound Healing', img: null },

  // Page 3 items (25-36)
  { id: 25, type: 'photo', category: 'Music, Kirtan & Voice', img: null },
  { id: 26, type: 'video', category: 'Dance & Conscious Movement', img: null },
  { id: 27, type: 'photo', category: 'Breathwork', img: null },
  { id: 28, type: 'photo', category: 'Arts & Body Practices', img: null },
  { id: 29, type: 'photo', category: 'Community', img: null },
  { id: 30, type: 'video', category: 'Yoga & Meditation', img: null },
  { id: 31, type: 'photo', category: 'Spiritual Teachings', img: null },
  { id: 32, type: 'photo', category: 'Social & Cultural Gatherings', img: null },
  { id: 33, type: 'photo', category: 'Dharma Talks', img: null },
  { id: 34, type: 'video', category: 'Sound Healing', img: null },
  { id: 35, type: 'photo', category: 'Music, Kirtan & Voice', img: null },
  { id: 36, type: 'photo', category: 'Breathwork', img: null },

  // Page 4 items (37-48)
  { id: 37, type: 'photo', category: 'Dance & Conscious Movement', img: null },
  { id: 38, type: 'video', category: 'Community', img: null },
  { id: 39, type: 'photo', category: 'Arts & Body Practices', img: null },
  { id: 40, type: 'photo', category: 'Yoga & Meditation', img: null },
  { id: 41, type: 'photo', category: 'Spiritual Teachings', img: null },
  { id: 42, type: 'video', category: 'Social & Cultural Gatherings', img: null },
  { id: 43, type: 'photo', category: 'Dharma Talks', img: null },
  { id: 44, type: 'photo', category: 'Sound Healing', img: null },
  { id: 45, type: 'video', category: 'Music, Kirtan & Voice', img: null },
  { id: 46, type: 'photo', category: 'Breathwork', img: null },
  { id: 47, type: 'photo', category: 'Dance & Conscious Movement', img: null },
  { id: 48, type: 'photo', category: 'Community', img: null },
];

const GalleryPage = () => {
  const [activeMediaFilter, setActiveMediaFilter] = useState('Both');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = galleryItems.filter((item) => {
    const matchesMedia =
      activeMediaFilter === 'Both' ||
      (activeMediaFilter === 'Photos' && item.type === 'photo') ||
      (activeMediaFilter === 'Videos' && item.type === 'video');

    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;

    return matchesMedia && matchesCategory;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reset to page 1 when filters change
  const handleMediaFilter = (filter) => {
    setActiveMediaFilter(filter);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-top-divider">
          <img src={topDivider} alt="divider" />
        </div>
        <img src={heroBg} alt="True balance unites inner and outer worlds" className="gallery-hero-img" />
        <div className="gallery-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

      {/* Title & Filters Section */}
      <section className="gallery-filters-section">
        <div className="gallery-title-block">
          <h4>2026</h4>
          <h2>FESTIVAL GALLERY</h2>
          <img src={dividerImg} alt="divider" className="gallery-divider" />
          <p className="gallery-subtitle">Explore all categories of our oneness festival</p>
        </div>

        {/* Media Filter: Both / Photos / Videos */}
        <div className="gallery-media-filters">
          {mediaFilters.map((filter) => (
            <button
              key={filter}
              className={`media-filter-btn ${activeMediaFilter === filter ? 'active' : ''}`}
              onClick={() => handleMediaFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Category Tags */}
        <div className="gallery-category-tags">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tag ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {currentItems.map((item) => (
            <div className="gallery-grid-item" key={item.id}>
              {item.img ? (
                <>
                  <img src={item.img} alt={`Gallery ${item.id}`} />
                  {item.type === 'video' && (
                    <div className="gallery-play-btn">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.85)" />
                        <polygon points="16,12 30,20 16,28" fill="#333" />
                      </svg>
                    </div>
                  )}
                </>
              ) : (
                <div className="gallery-placeholder">
                  {item.type === 'video' && (
                    <div className="gallery-play-btn placeholder-play">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.15)" />
                        <polygon points="16,12 30,20 16,28" fill="rgba(255,255,255,0.3)" />
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="gallery-pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`gallery-page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="gallery-page-btn gallery-next-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ▶
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default GalleryPage;
