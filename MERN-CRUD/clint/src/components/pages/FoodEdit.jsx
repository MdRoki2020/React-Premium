import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ReadById, UpdateFood } from '../Api Request/ApiRequest';
import RoundLoader from '../common/RoundLoader';
import { ErrorToast, getBase64, IsEmpty } from '../helper/FormHelper';

const FoodEdit = () => {

    const [foodData,setFood]=useState([]);

    let foodsNameRef,foodsTypeRef,foodsPriceRef,foodsStockQtyRef,foodsDescriptionRef,userImgRef,userImgView,Loader=useRef();

    const {id}=useParams();


  useEffect(()=>{
    ReadById(id).then((data)=>{

        setFood(data[0]);

      })
  },[id])

      console.log(foodData)


  let navigate=useNavigate();
    
    
    const PreviewImage = () => {
        let ImgFile = userImgRef.files[0];
        getBase64(ImgFile).then((base64Img)=>{   
            userImgView.src=base64Img;
        })
    }

    
    
    const UpdateMyFood = () => {
        let foodName=foodsNameRef.value;
        let foodType=foodsTypeRef.value;
        let foodPrice=foodsPriceRef.value;
        let foodStockQty=foodsStockQtyRef.value;
        let foodDescription= foodsDescriptionRef.value;
        let photo=userImgView.src

        console.log(foodName);


        if(IsEmpty(foodName)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(foodType)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(foodPrice)){
            ErrorToast("Last Name Required !")
        }
        else if(IsEmpty(foodStockQty)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(foodDescription)){
            ErrorToast("Password Required !")
        }
        else{
            Loader.classList.remove('d-none');

            UpdateFood(id,foodName,foodType,foodPrice,foodStockQty,foodDescription,photo).then((result)=>{
                if(result===true){
                    Loader.classList.add('d-none');
                    
                    navigate("/adminDashboard");
                }
            })
        }
    }


  return (
    <Fragment>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="container-fluid">
                            <img  ref={(input)=>userImgView=input} className="icon-nav-img-lg" src={foodData['foodImage']} alt={foodData['foodsName']}/>
                            <hr/>
                            <div className="row">
                              <div className="col-4 p-2">

                                  <label>Profile Picture</label>
                                  <input onChange={PreviewImage}  ref={(input)=>userImgRef=input} className="form-control animated fadeInUp" type="file"/>
                              </div>
                              <div className="col-4 p-2">
                                  <label>Food Name</label>
                                  <input key={Date.now()} defaultValue={foodData['foodsName']} ref={(input)=>foodsNameRef=input} className="form-control animated fadeInUp" required/>
                              </div>
                              <div className="col-4 p-2">
                                  <label>Food Type</label>
                                  <select key={Date.now()} defaultValue={foodData['foodsType']} ref={(input)=>foodsTypeRef=input} className="form-control animated fadeInUp" required>
                                    <option selected>Choose Food</option>
                                    <option>Sanduiche</option>
                                    <option>Burgar</option>
                                    <option>Pizza</option>
                                    <option>France Fry</option>
                                  </select>
                              </div>
                              <div className="col-4 p-2">
                                  <label>Food Price</label>
                                  <input key={Date.now()} defaultValue={foodData['foodsPrice']}  ref={(input)=>foodsPriceRef=input} className="form-control animated fadeInUp" type="text" required/>
                              </div>
                              <div className="col-4 p-2">
                                  <label>Food Quentity</label>
                                  <input key={Date.now()} defaultValue={foodData['foodsStockQty']} ref={(input)=>foodsStockQtyRef=input}  className="form-control animated fadeInUp" type="mobile" required/>
                              </div>
                              <div className="col-4 p-2">
                                  <label>Food Description</label>
                                  <textarea key={Date.now()} defaultValue={foodData['foodsDescription']} ref={(input)=>foodsDescriptionRef=input} className="form-control" id="exampleFormControlTextarea1"  rows="3" required></textarea>
                               </div>
                              <div className="col-4 p-2">
                                  <button onClick={UpdateMyFood}  className="btn w-100 float-end btn-primary animated fadeInUp">Update</button>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className='d-none' ref={(div)=>Loader=div}>

    <RoundLoader />

    </div>
    </Fragment>
  )
}

export default FoodEdit
