import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { ReadVideo } from '../Api Request/ApiRequest';
import '../Style/Player.css'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import mainVideo from '../upload/dark_cover_page2.mp4'


const Player = () => {

    const [VideoList,setVideoList]=useState([]);
  // let navigate = useNavigate ();

  useEffect(()=>{
    getVideo();
  },[])

  const getVideo=()=>{
    ReadVideo().then((data)=>{
        setVideoList(data);
    })
  }


  return (
    <div>
      <div class="container">
	<div class="row">
		<div class="col-md-8">
			<div class="mediaPlayer img-thumbnail rounded img-fluid">
			
			<Video autoPlay loop muted width="320" height="240"
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          poster="http://sourceposter.jpg"
          onCanPlayThrough={() => {
              // Do stuff
          }}>
          <source src={mainVideo} type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src={mainVideo} default />
      </Video>



			
			</div>
		</div>
	<div class="col-md-4">
		<div class="containsList">
		<table class="table table-striped">
			<tbody>
				{
            VideoList.map((value)=>
                <tr key={value._id}>
                    <td>{value.videoname}</td>
                </tr>
            )
        }
			</tbody>
    </table>
		</div>
	</div>
	</div>
	</div>
    </div>
  )
}

export default Player
