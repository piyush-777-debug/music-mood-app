import React from 'react';
import { FaMusic } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
const features = [
  {
    icon: <FaMusic />,
    title: "Mood-Based Playlists",
    description: "Automatically generate song collections tailored to your current mood such as Happy, Sad, Chill, Romantic, or Workout."
  },
  {
    icon: <ImHeadphones />,
    title: "Smooth Audio Streaming",
    description: "Enjoy seamless 30-second audio previews with high-quality playback directly in the browser."
  },
  {
    icon: <FaHeart />,
    title: "Like & Save Favorites",
    description: "Easily mark songs as your favorites and access them anytime in your 'Liked Songs' section."
  },
  {
    icon: <FaSearch />,
    title: "Smart Search",
    description: "Quickly find your favorite songs or artists using the smart search bar."
  },
  {
    icon: <FaMobileButton />,
    title: "Responsive UI",
    description: "Designed to look great and work smoothly on desktops, tablets, and mobile devices."
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">App Features</h2>
      <div className="features-container">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
