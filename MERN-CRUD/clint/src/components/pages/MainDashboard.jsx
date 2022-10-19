import React, { Fragment, useRef } from 'react';
import Swal from 'sweetalert2';
import {FoodRequest} from '../Api Request/ApiRequest';
import RoundLoader from '../common/RoundLoader';
import { ErrorToast, getBase64, IsEmpty, successMes } from '../helper/FormHelper';


const MainDashboard = () => {

    let FoodNameRef,FoodTypeRef,FoodPriceRef,FoodStockQntyRef,FoodImgRef,Loader,FoodDesRef,ImgView=useRef();

    const PreviewImage = () => {
        let ImgFile = FoodImgRef.files[0];
        getBase64(ImgFile).then((base64Img)=>{
          ImgView.src=base64Img;
        })
    }

    const OnFood=()=>{

        let foodName=FoodNameRef.value;
        let foodType=FoodTypeRef.value;
        let foodPrice=FoodPriceRef.value;
        let foodStock=FoodStockQntyRef.value;
        let foodImg=ImgView.src;
        let foodDes=FoodDesRef.value;

        if(IsEmpty(foodName)){
            ErrorToast("Food Name Required");
          }
          else if(IsEmpty(foodType)){
            ErrorToast("Food Type Required");
          }
          else if(IsEmpty(foodPrice)){
            ErrorToast("Food Price Required");
          }
          else if(IsEmpty(foodStock)){
            ErrorToast("Food Stock Required");
          }
          else if(IsEmpty(foodImg)){
            ErrorToast("Food Image Required");
          }
          else if(IsEmpty(foodDes)){
            ErrorToast("Food Description Required");
          }else{

            Loader.classList.remove('d-none');
      
      FoodRequest(foodName,foodType,foodPrice,foodStock,foodImg,foodDes).then((result)=>{
        if(result===true){

          Loader.classList.add('d-none');

          foodName.value="";
          foodType.value="";
          foodPrice.value="";
          foodStock.value="";
          foodImg.value="";
          foodDes.value="";

          successMes();
        
          

        }else{

          ErrorToast('Something Went Wrong');
          console.log('something went wrong');

        }
      })

        }
    }


    // const success=()=>{
    //     Swal.fire({
    //         position: 'top-end',
    //         icon: 'success',
    //         title: 'Your work has been saved',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    // }


  return (
    <Fragment>

<div className='container'>
    <div className='row'>
        <h2>Admin Dashboard</h2>
        <form className="row g-3">
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label text-dark">Food Name</label>
                <input ref={(input)=>FoodNameRef=input} type="text" className="form-control" id="inputEmail4" placeholder='Food Name' required/>
            </div>
            <div className="col-md-6">
                <label for="inputState" className="form-label text-dark">Food Type</label>
                <select ref={(input)=>FoodTypeRef=input} id="inputState" className="form-select" required>
                <option selected>Choose Food</option>
                <option>Sanduiche</option>
                <option>Burgar</option>
                <option>Pizza</option>
                <option>France Fry</option>
                </select>
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label text-dark">Food Price</label>
                <input ref={(input)=>FoodPriceRef=input} type="text" className="form-control"  id="inputAddress" placeholder="Food Price" required/>
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label text-dark">Stock Food Quantity</label>
                <input ref={(input)=>FoodStockQntyRef=input} type="text" className="form-control"  id="inputAddress2" placeholder="Food Quantity" required/>
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label text-dark">Image</label>
                <input onChange={PreviewImage} ref={(input)=>FoodImgRef=input} type="file" className="form-control" id="inputCity" required/>
            </div>
            <div className="col-md-6">
            <label for="exampleFormControlTextarea1" className="form-label text-dark">Food Description</label>
            <textarea ref={(input)=>FoodDesRef=input} className="form-control" id="exampleFormControlTextarea1" placeholder='Enter Food Description' rows="3" required></textarea>
            </div>
            <div className="col-12">
                <button onClick={OnFood} type="submit" className="btn btn-info">Added Food</button>
            </div>
        </form>
    </div>
</div>
    <div className='d-none' ref={(div)=>Loader=div}>

    <RoundLoader />

    </div>

    </Fragment>
  )
}

export default MainDashboard
