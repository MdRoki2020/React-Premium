import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Card} from 'react-bootstrap'
import { } from "react-icons/ai";
import { ReadFood } from '../Api Request/ApiRequest';
import '../Style/FoodStore.css'

const FoodStore = () => {

  const [foodList,setFoodList]=useState([]);

  useEffect(()=>{
    getProduct();
  },[])

  const getProduct=()=>{
    ReadFood().then((data)=>{
      setFoodList(data)
    })
  }

  console.log(foodList)
  return (
    <div>
      <h1>Food Wall</h1>
      
      <section className='container'>
        <div className='row d-block d-lg-flex'>
        
        {
                foodList.map((value,key)=>

                <div className='col-md-2 d-block d-lg-flex mb-4'>
                  <Card className='shadow singleProduct'>
                    <Card.Img variant="top" src={value.foodImage} />
                    <Card.Body>
                      <h6>{value.foodsName}</h6>
                      <span>{value.foodsPrice} ৳</span>
                      <span>{value.description}</span>
                    </Card.Body>
                  </Card>
			          </div>

                )
        }
        
        </div>
      </section>
    </div>
  )
}

export default FoodStore
