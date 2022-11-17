import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { ReadVideo } from '../Api Request/ApiRequest';
import '../Style/Player.css'

const Player = () => {

    const [VideoList,setVideoList]=useState([]);
    const [videoLink,setVideoLink]=useState("");
  // let navigate = useNavigate ();

  useEffect(()=>{
    getVideo();
  },[])

  const getVideo=()=>{
    ReadVideo().then((data)=>{
        setVideoList(data);
    })
  }

  const singleItem=(videoLink)=>{
    setVideoLink(videoLink)
    // navigate("/player/"+videoLink);
  }

  console.log(videoLink);




  return (
    <div>
      <div class="container">
	<div class="row">
		<div class="col-md-8">
			<div class="mediaPlayer img-thumbnail rounded img-fluid">
				<video width="850" height="500" controls>
				  <source src="demo.mp4" type="video/mp4" size="576"/>
				  <source src="demo.mp4" type="video/mp4" size="720"/>
				  <source src="demo.mp4" type="video/mp4" size="1080"/>
				  
				  
				  {/* <track src="demo.mp4" kind="captions" srclang="en" label="English"/>
				  <track src="demo.mp4" kind="captions" srclang="fr" label="Francais"/>
				  <track src="demo.mp4" kind="captions" srclang="id" label="Indonesia"/>
				  <track src="demo.mp4" kind="captions" srclang="ms" label="Melayu"/> */}
				Your browser does not support the video tag.
				</video>
			</div>
		</div>
	<div class="col-md-4">
		<div class="containsList">
		<table class="table table-striped">
			<tbody>
				{
                    VideoList.map((value)=>
                        <tr key={value._id} onClick={singleItem.bind(this,value.videoLink)}>
                            <td>{value.videoName}</td>
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
