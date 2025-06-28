import React from 'react';
import moodsData from '../../data/Moods.json';
import { Link } from 'react-router-dom';

const Moods = () => {
  return (
    <section className="moods-page">
      <h2>Pick a Mood</h2>
      
      <div className='moods-container'>
        {moodsData.map((item, index) => (
          <Link to={`/mood/${item.mood.toLowerCase()}`} key={index}>
            <div className="mood-card">
              <span className="mood-icon">{item.icon}</span>
              <h3 className="mood-title">{item.mood}</h3>
              <p className="mood-desc">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default Moods;
