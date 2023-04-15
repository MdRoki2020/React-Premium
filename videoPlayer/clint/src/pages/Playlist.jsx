import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/Style.css";

const Playlist = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/GetVideo")
      .then((res) => {
        console.log(res.data); // Log the response here
        setVideos(res.data.data); // Update the state with the response data array
      })
      .catch((err) => console.log(err));
  }, []);

  const handleVideoClick = (video) => {
    console.log(video); // add this line
    setCurrentVideo(video);
  };

  return (
    <div className="playlist-container">
      <h1>My Playlist</h1>
      <div className="videos-container">
        {videos.length > 0 &&
          videos.map((video) => (
            <div
              className="video"
              key={video._id}
              onClick={() => handleVideoClick(video)}
            >
              <h2>{video.title}</h2>
            </div>
          ))}
      </div>
      <div className="video-player">
        {currentVideo && (
          <>
            <h2>{currentVideo.title}</h2>
            <video
              controls
              width="640"
              height="360"
              key={currentVideo._id} // add this line
            >
              <source src={currentVideo.url} type="video/mp4" />
              <source src={currentVideo.url} type="video/ogg" />
              <source src={currentVideo.url} type="video/webm" />
              <track
                default
                kind="captions"
                srcLang="en"
                src={currentVideo.captionsUrl}
              />
              <track
                kind="subtitles"
                srcLang="en"
                src={currentVideo.subtitlesUrl}
              />
              <track
                kind="descriptions"
                srcLang="en"
                src={currentVideo.descriptionsUrl}
              />
              <track
                kind="chapters"
                srcLang="en"
                src={currentVideo.chaptersUrl}
              />
              <p>Sorry, your browser doesn't support embedded videos.</p>
            </video>
          </>
        )}
      </div>
    </div>
  );
};

export default Playlist;
