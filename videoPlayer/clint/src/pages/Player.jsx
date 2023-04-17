import React , { useState, useEffect } from 'react'
import axios from "axios";
import '../assets/css/PlayerStyle.css'
import { GetVideo } from '../ApiRequest/APIRequest';


const Player = () => {

    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
  

    useEffect(()=>{
      GetData();
    },[])
  
    const GetData=()=>{
      GetVideo().then((data)=>{
        setVideos(data);
        setCurrentVideo(data[0]);
  
        })
    }

  
    const handleVideoClick = (video) => {
      console.log(video);
      setCurrentVideo(video);
    };
  
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className=" video-player mediaPlayer img-thumbnail rounded img-fluid">
                {currentVideo && (
                  <>
                    <video
                      controls
                      width="850" height="450"
                      key={currentVideo._id}
                    >
                      <source src={currentVideo.videoUrl} type="video/mp4" />
                      <source src={currentVideo.videoUrl} type="video/ogg" />
                      <source src={currentVideo.videoUrl} type="video/webm" />
                      <track default kind="captions" srcLang="en" src={currentVideo.captionsUrl} />
                      <track kind="subtitles" srcLang="en" src={currentVideo.subtitlesUrl} />
                      <track kind="descriptions" srcLang="en" src={currentVideo.descriptionsUrl} />
                      <track kind="chapters" srcLang="en" src={currentVideo.chaptersUrl} />
                      <p>
                        Sorry, your browser doesn't support embedded videos.
                      </p>
                    </video>
                  </>
                )}
              </div>
            </div>
  
            <div className="col-sm-4">
              <div className="containsList">
              <table className="table table-striped">
                <tbody>
                    {videos.length > 0 &&
                    videos.map((video) => (
                       <tr key={video._id} onClick={() => handleVideoClick(video)}>
                        <td>{video.title}</td>
                       </tr>
                    ))}
                </tbody>
               </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Player;
  