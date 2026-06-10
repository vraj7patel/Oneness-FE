import React, { useEffect } from 'react';
import './BlogInner.css';

// Images
import heroBg from '../assets/blog/image 46.png';
import heroBg2 from '../assets/blog/bgimg.png';
import topDivider from '../assets/blog/dvider_20 3 (1).png';
import bottomDivider from '../assets/blog/dvider_20 4 (2).png';
import flourishImg from '../assets/blog/Group 79 (2).png';
import flourishImg1 from '../assets/blog/Group 5.png';

import cardImg from '../assets/blog/Rectangle 37 (2).png';

const BlogInner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const latestPosts = Array(8).fill({
    source: 'The Times of India',
    date: '22 Mar 2026',
    title: 'Jaipur Oneness festival: अगले 3 दिन जयपुर में दुनियाभर से जुटेंगे 500 स्पीकर,.....',
    excerpt: 'सुबह 10 बजे वेदांता फ्रंट लॉन में फेस्टिवल की शुरुआत \'मॉर्निंग म्यूजिक नाद बिल्विंग साउंड एंड साइलेंस\' से होगी, इस सत्र में कर्नाटक संगीत की प्रस्तुति के जरिए ध्वनि और मौन के बीच के संतुलन को प्रस्तुत किया जाएगा......',
    link: '#'
  });

  return (
    <div className="blog-inner-page">
      {/* HERO SECTION */}
      <section className="blog-inner-hero" style={{ backgroundImage: `url("${heroBg}")` }}>
        <div className="blog-hero-top-divider-white">
          <img src={topDivider} alt="divider" />
        </div>
        
        <div className="blog-inner-hero-content">
          <h2>The Oneness Festival<br/>2026</h2>
          <h1>BLOG NAME</h1>
        </div>

        <div className="blog-hero-bottom-divider">
          <img src={bottomDivider} alt="divider" />
        </div>
      </section>

        <div className="blog-inner-top-divider-white">
          <img src={topDivider} alt="divider" />
        </div>
      {/* CONTENT SECTION */}
      <section className="blog-inner-content-section">
        <div className="blog-inner-container">
          {/* Left Column - Main Content */}
          <div className="blog-inner-left">
            <h1 className="blog-inner-title">GRAVIDA POSUERE SUSCIPIT ELEMENTUM<br/>DONEC EGET INTEGER.</h1>
            <div className="blog-inner-flourish1">
              <img className='flourish1' src={flourishImg1} alt="flourish" />
            </div>
            
            <p>Lorem ipsum dolor sit amet consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum.</p>
            
            <div className="blog-inner-banner">
              <img className="heroBg2" src={heroBg2} alt="herobg" />
              {/* Blog Banner Image */}
            </div>
            
            <p>Lorem ipsum dolor sit amet consectetur. Sed imperdiet eget habitant elementum odio pharetra libero. Neque quis in sed risus vitae turpis tincidunt nunc. Tellus aenean tellus ultrices pharetra viverra. Massa ultricies a donec ipsum. Sit tempus auctor nulla ipsum eu et. Dapibus non a amet urna condimentum. Gravida posuere suscipit elementum donec eget integer. Tempus sit consectetur integer nulla vel.</p>
            
            <p>Vestibulum pretium bibendum egestas arcu tellus neque. In at leo facilisis pulvinar interdum. Imperdiet leo sed feugiat arcu massa nascetur. Interdum euismod purus penatibus nulla fames et feugiat elementum ac. Egestas nisi phasellus et et orci scelerisque diam. Sed ante egestas enim sit orci sit dui massa aliquam. Felis ante purus sed morbi gravida amet tristique sed sociis. Vitae ipsum porta nulla ultricies venenatis quis tristique id et. Laoreet urna neque ullamcorper arcu malesuada habitant <strong>commodo commodo. Proin magna sed</strong> pellentesque turpis posuere. Enim eros convallis odio vehicula. Phasellus arcu at justo bibendum ut nec mi. Amet consectetur faucibus sodales orci dictumst pharetra vel. Fringilla sed nec et convallis dolor turpis. Leo pellentesque justo fermentum tristique morbi nibh tellus.</p>
            
            <p>Tempor in consequat egestas non mattis viverra dictum dui. Elementum integer a morbi euismod semper lectus nam duis magna. Nibh auctor scelerisque tincidunt amet vulputate. Varius volutpat risus nulla faucibus facilisis ultrices pellentesque ullamcorper feugiat. Eu venenatis venenatis sed cras morbi suspendisse enim. Diam donec in accumsan turpis vel suspendisse. Gravida enim vitae imperdiet habitasse platea. Pharetra fringilla amet augue velit faucibus morbi. Aliquam blandit in etiam vestibulum mauris enim enim consequat. Etiam facilisi tortor et pellentesque sagittis. Nisi nisi sit nunc enim. Mauris vel vulputate risus habitant sit pretium at elementum.</p>
            
            <h3 className="blog-inner-quote">“Quis amet velit porta morbi orci magnis congue faucibus egestas.”</h3>
            
            <p>Et porta tincidunt sapien diam ante aenean mattis. Porttitor fringilla morbi ut elementum adipiscing tempus. Adipiscing eget est nunc sed. Sed donec amet vel imperdiet egestas in convallis nulla porta. Id urna fames vel urna. Quam platea tellus cras cras interdum. Molestie non id purus morbi in adipiscing risus consectetur. Lacinia orci dui sed sit risus sed nullam. Est elementum eget molestie viverra posuere convallis cursus sapien. Enim scelerisque tortor odio id commodo augue diam. Odio amet morbi faucibus tincidunt massa adipiscing in sit. Leo risus mi lectus quam. Lacinia mattis turpis vulputate non.</p>
          </div>

          {/* Right Column - Sidebar */}
          <div className="blog-inner-right">
            <div className="blog-search-widget">
              <h3>Search Blogs</h3>
              <div className="search-input-group">
                <input type="text" placeholder="Enter Detail" />
                <button>Search</button>
              </div>
            </div>
            
            <div className="blog-latest-widget">
              <h3>LATEST BLOGS</h3>
              <div className="latest-blogs-list">
                {latestPosts.map((post, index) => (
                  <div className="latest-blog-item" key={index}>
                    <div className="latest-blog-img">
                      <img src={cardImg} alt="Blog Cover" />
                    </div>
                    <div className="latest-blog-info">
                      <div className="latest-blog-meta">
                        <span className="source-icon-small"><img src={flourishImg} alt="icon" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /></span>
                        <span className="source-name-small">{post.source}</span>
                        <span className="date-small"> | {post.date}</span>
                      </div>
                      <h4 className="latest-blog-title">{post.title}</h4>
                      <p className="latest-blog-excerpt">{post.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogInner;
