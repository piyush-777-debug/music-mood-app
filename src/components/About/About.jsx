import React from 'react';
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaHammer } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
const About = () => {
  return (
    <section className="about-section">
      <h2>About Mood Music</h2>
      <p className="about-intro">
        Mood Music is a lightweight, mood-based music player designed to make your listening experience emotional, fun, and effortless.
        Whether you're happy, sad, romantic, or just chilling — we’ve got a playlist for every mood.
      </p>

      <h3><FaFireFlameCurved /> Key Features</h3>
      <ul className="feature-list">
        <li>🎧 Mood-based playlists: Auto-generated based on your chosen emotion.</li>
        <li>❤️ Like your favorite songs and revisit them anytime.</li>
        <li>🔍 Smart search to quickly find songs or artists.</li>
        <li>📱 Fully responsive design — works on all devices.</li>
        <li>🚀 No login required — just pick your vibe and play instantly.</li>
      </ul>

      <h3><FaHammer /> Built With</h3>
      <p className="tech-stack">React, Redux Toolkit, React Router, Deezer API</p>

      <h3><GiStarFormation /> Future Scope</h3>
      <ul className="future-scope">
        <li>User login & personalization</li>
        <li>Custom playlist creation</li>
        <li>Spotify or JioSaavn integration</li>
        <li>Theme customization (light/dark)</li>
      </ul>
      <h3 className='love'>Made with &hearts; with Piyush Verma</h3>
    </section>
  );
};

export default About;
