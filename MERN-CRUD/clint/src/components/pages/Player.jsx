import React, { useEffect, useRef, useState } from 'react'
import { foodCount, matchingByFoodType, ReadVideo } from '../Api Request/ApiRequest';
import '../Style/Player.css'
import 'react-html5video/dist/styles.css';
import { ErrorToast, IsEmpty } from '../helper/FormHelper';


const Player = () => {

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
