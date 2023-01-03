import React, { useEffect, useState } from 'react'
import { foodCount, ReadVideo } from '../Api Request/ApiRequest';
import '../Style/Player.css'
import 'react-html5video/dist/styles.css';


const Player = () => {

    const [VideoList,setVideoList]=useState([]);  // let navigate = useNavigate ();
    const [count,setCount]=useState([]);

  useEffect(()=>{
    getVideo();
    foodList();
  },[])

  const getVideo=()=>{
    ReadVideo().then((data)=>{
        setVideoList(data);
    })
  }


  const foodList=()=>{
    foodCount().then((data)=>{
        setCount(data);
    })
  }


  return (
    <div>
      <div className="container">

      <div className='count'>
        <h5>Total Product: {count.total}</h5>
    </div>

	<div className="row">
		<div className="col-md-4">
			<div className="img-thumbnail rounded img-fluid">
			</div>
		</div>
	<div className="col-md-8">
		<div className="">
		<table className="table table-striped">
			<tbody>
				{
            VideoList.map((value,key)=>
                <tr key={value._id}>
                <td>{value.videoname}</td>
                <td>{value.filePath}</td>
                <td><img src={`http://localhost:5000/${value.filePath}`} height="70" className="card-img-top img-responsive" alt="img"/></td>
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
