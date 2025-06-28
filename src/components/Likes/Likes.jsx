import React from 'react';
import { useSelector } from 'react-redux';
import { ImSad } from "react-icons/im";
const Likes = () => {
  const items = useSelector((state) => state.like.items);

  return (
    <div className='songs-page'>
      <h2 className='text-center mb-4 fw-bold'>Your Favourites</h2>

      {items.length === 0 ? (
        <h1 className='text-white display-6 mt-4 text-center fw-bold'>
          There is no favourite music yet <ImSad />
        </h1>
      ) : (
        <div className="songs-container">
          {items.map((song) => (
            <div key={song.id} className="song-card">
              <div className="image-wrapper">
                <img src={song.album.cover_medium} alt={song.title} />
              </div>
              <p><strong>{song.title}</strong> - {song.artist.name}</p>
              <audio controls src={song.preview}></audio>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Likes;
