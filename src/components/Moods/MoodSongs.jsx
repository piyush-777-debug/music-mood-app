import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addbutton } from '../../features/LikeSlice';


const MoodSongs = () => {

  const dispatch = useDispatch();
  const { moodName } = useParams();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchval, setsearchval] = useState("")

  const notify = () => toast("Great Choice😍! Added to like songs");

const handleSearch = async (e) => {
  e.preventDefault();
  if (!searchval.trim()) return;
  if (loading) return;


  setLoading(true);
  try {
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchval}`
    );
    setSongs(res.data.data);
    setError(null);
  } catch (error) {
    setError("Failed to search.");
    console.error(error);
  } finally {
    setLoading(false);
  }

  setsearchval("");
};
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${moodName}`
        );
        setSongs(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch songs');
        setLoading(false);
      }
    };

    fetchSongs();
  }, [moodName]);

  if (loading) return (
    <div className="loading spinner-grow text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
  
  if (error) return <p>{error}</p>;


  return (
    <div className="songs-page">
      <h2>{moodName.charAt(0).toUpperCase() + moodName.slice(1)} Songs</h2>
      <form onSubmit={handleSearch}>
        <input
        className='search-box'
        type="text"
        placeholder="Search for a song..."
        value={searchval}
          onChange={(e) => setsearchval(e.target.value)}
        />
        <button type="submit" className='submit'>Search</button>
      </form>
      
      <div className="songs-container">
        {songs.map((song) => (
          <div key={song.id} className="song-card">
          <div className="image-wrapper">
            <img src={song.album.cover_medium} alt={song.title} />
            <button className='icon-heart'
            onClick={() => {
              dispatch(addbutton(song));
              notify();
            }}
            ><FaRegHeart/></button>
          </div>
          <p><strong>{song.title}</strong> - {song.artist.name}</p>
          <audio controls src={song.preview}></audio>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default MoodSongs;
