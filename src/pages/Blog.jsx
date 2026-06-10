import React, { useEffect } from 'react';
import './Blog.css';

// Images
import heroBg from '../assets/blog/image 46.png';
import topDivider from '../assets/blog/dvider_20 3 (1).png';
import bottomDivider from '../assets/blog/dvider_20 4 (2).png';
import flourishImg from '../assets/blog/Group 79 (2).png';
import cardImg from '../assets/blog/Rectangle 37 (2).png';
import did from '../assets/blog/Group 5 (7).png';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = Array(9).fill({
    source: 'The Times of India',
    title: 'Jaipur Oneness festival: अगले 3 दिन जयपुर में दुनियाभर से जुटेंगे 500 स्पीकर,.....',
    excerpt: 'सुबह 10 बजे वेदांता फ्रंट लॉन में फेस्टिवल की शुरुआत \'मॉर्निंग म्यूजिक नाद बिल्विंग साउंड एंड साइलेंस\' से होगी, इस सत्र में कर्नाटक संगीत की प्रस्तुति के जरिए ध्वनि और मौन के बीच के संतुलन को प्रस्तुत किया जाएगा......',
    link: '#'
  });

  return (
    <div className="blog-page">
      {/* HERO SECTION */}
      <section className="blog-hero" style={{ backgroundImage: `url("${heroBg}")` }}>
        <div className="blog-hero-top-divider-white">
          <img src={topDivider} alt="divider" />
        </div>
        <div className="blog-hero-top-divider-yellow">
          <img src={topDivider} alt="divider" />
        </div>
        
        <div className="blog-hero-content">
          <h2>The Oneness Festival<br/>2026</h2>
          <h1>BLOG</h1>
        </div>

        <div className="blog-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

      {/* UPDATES AND BLOGS SECTION */}
      <section className="blog-updates-section">
         <div className="blog-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
        <div className="section-header">
          <h3>2026</h3>
          <h2>ONENESS UPDATES AND<br/>BLOGS</h2>
          <img src={did} alt="flourish" className="did-icon" />
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-card-img">
                <img src={cardImg} alt="Blog Cover" />
              </div>
              <div className="blog-card-content">
                <div className="blog-source">
                  <span className="source-icon"><img src={flourishImg} alt="icon" style={{ width: '26px', height: '23px', objectFit: 'contain' }} /></span>
                  <span className="source-name">{post.source}</span>
                </div>
                <h4 className="blog-title">{post.title}</h4>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="read-more">READ MORE &rarr;</a>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more-container">
          <button className="load-more-btn">LOAD MORE BLOGS</button>
        </div>
         <div className="blog-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="blog-media-section">
        <div className="section-header2">
          <h3 >2026</h3>
          <h2 >ONENESS FESTIVAL MEDIA</h2>
          <img src={did} alt="flourish" className="did-icon" />
        </div>

        <div className="media-grid">
          <div className="media-grid-top">
            <div className="media-video large">
              <div className="play-button"></div>
            </div>
            <div className="media-video large">
              <div className="play-button"></div>
            </div>
          </div>
          <div className="media-grid-bottom">
            <div className="media-video small">
              <div className="play-button"></div>
            </div>
            <div className="media-video small">
              <div className="play-button"></div>
            </div>
            <div className="media-video small">
              <div className="play-button"></div>
            </div>
            <div className="media-video small">
              <div className="play-button"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
