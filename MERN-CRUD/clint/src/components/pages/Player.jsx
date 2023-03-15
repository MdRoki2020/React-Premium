import React, { useEffect, useRef, useState } from 'react'
import { foodCount, InsertRequest, matchingByFoodType, ReadVideo } from '../Api Request/ApiRequest';
import '../Style/Player.css'
import 'react-html5video/dist/styles.css';
import { ErrorToast, IsEmpty } from '../helper/FormHelper';
import RoundLoader from '../common/RoundLoader';
import Swal from 'sweetalert2';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import axios from 'axios';


const Player = () => {

  let fileRef,nameRef,Loader=useRef();

  const OnUpload=()=>{

    let file=fileRef.file[0];
    let name=nameRef.value;

    console.log(file)
    console.log(name)

    if(IsEmpty(file)){
        ErrorToast("Food Name Required");
      }
      else if(IsEmpty(name)){
        ErrorToast("Food Type Required");
      }else{

        Loader.classList.remove('d-none');
  
  InsertRequest(file,name).then((result)=>{
    if(result===true){

      Loader.classList.add('d-none');

      // fileRef.value="";
      // nameRef.value="";

      success();

    }
    else{
      Loader.classList.add('d-none');
      ErrorToast('Something Went Wrong');
      console.log('something went wrong');

    }
  })

    }
  }


  const success=()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Food Added Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }









    const [VideoList,setVideoList]=useState([]);  // let navigate = useNavigate ();
    const [count,setCount]=useState([]);
    const [product,setProduct]=useState([]);

    let foodTypeRef=useRef();

    const show=()=>{
      let foodsType=foodTypeRef.value;

      if(IsEmpty(foodsType)){
        ErrorToast("Food Type Required");
      }else{

        matchingByFoodType(foodsType).then((data)=>{
          
          setProduct(data[0]);
        })
        
      }

    }



    console.log(product)

    // console.log(product)
    



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





  // const MapComponent = withScriptjs(withGoogleMap((props) => {
  // const [location, setLocation] = useState('');
  
  // const handleLocationChange = (event) => {
  //   setLocation(event.target.value);
  // };

  // const MapComponent = withScriptjs(
  //   withGoogleMap((props) => {
  //     const [location, setLocation] = useState('');
  //     // Rest of your code goes here...
  //   })
  // );

  // const handleLocationChange = (event) => {
  //   setLocation(event.target.value);
  // };

  // const handleMapClick = (event) => {
  //   const lat = event.latLng.lat();
  //   const lng = event.latLng.lng();
  //   axios.post('/location', { lat, lng });
  // };



  // function MapComponent(props) {
  //   const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  // }
  
    // const handleMarkerDragEnd = (event) => {
    //   setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    // }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Use geocoding to convert the marker position to an address
      // Send the form data to the server using an HTTP POST request
    }







  return (
    <div>
      <div className="container">

      <div className='count'>
        <h5>Total Count: {count.total}</h5>
    </div>

	<div className="row">
		<div className="col-md-4">
			<div className="">


        <input ref={(input)=>foodTypeRef=input} className='form-control' placeholder='Enter Food Type'/>
        <button onClick={show} className='btn btn-primary mt-2'>Show Details</button>

        <table className="table table-striped mt-4">
			<tbody>

                <tr >
                <th>Foods Name:</th>
                <td>{product.foodsName}</td>
                </tr>

                <tr >
                <th>Food Description</th>
                <td>{product.foodsDescription}</td>
                </tr>

                <tr >
                <th>Foods Type</th>
                <td>{product.foodsType}</td>
                </tr>

                <tr >
                <th>Foods Price</th>
                <td>{product.foodsPrice}</td>
                </tr>

			</tbody>
      </table>


      <h4 className='mt-4'>File Upload</h4>
      <form enctype="multipart/form-data">

        <input type='file' ref={(input)=>fileRef=input} className='form-control mb-2'/>

        <input type='text' ref={(input)=>nameRef=input} className='form-control mb-2' placeholder='Video Name'/>

        <button onClick={OnUpload} className='btn btn-primary '>Submit</button>

      </form>
      
			</div>
		</div>
	<div className="col-md-4">
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
  <div className='col-md-4'>

    <div>

        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        >
          {/* <Marker
            position={markerPosition}
            draggable={true}
            onDragEnd={handleMarkerDragEnd}
          /> */}
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Description:
              <textarea name="description" />
            </label>
            <button type="submit">Save location</button>
          </form>
        </GoogleMap>

    </div>

  </div>
	</div>
	</div>

  <div className='d-none' ref={(div)=>Loader=div}>

    <RoundLoader />

    </div>
    </div>
  )
}

export default Player