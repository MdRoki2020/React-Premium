import React from 'react'
import { Button } from 'react-bootstrap'
import '../Style/ProductDetails.css'
import { AiOutlineExclamationCircle,AiOutlineDollar,AiOutlineEuroCircle,AiOutlineReload,AiOutlineIssuesClose,AiOutlineCloseCircle,AiOutlineSafety } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ReadById } from '../Api Request/ApiRequest';
import { useState } from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ProductDetails = () => {

    const [product,setProduct]=useState([]);
    // let navigate = useNavigate ();

  const {id}=useParams();
  console.log(id)


  useEffect(()=>{
    ReadById(id).then((data)=>{

        setProduct(data[0]);

      })
  },[id])

  return (
    <div>
        <section className="productDetailsWrapper">
        <div className="productDetails">
            <div className="container">
                <div className="row animate__animated animate__zoomIn">
                    <div className="col-sm-4">
                        <div className="SingleProductImage">
                        <Zoom>
                        <img className='img-fluid img-thumbnail' alt={product.foodsName}
                        src={product.foodImage}
                        width="350" height="250"
                        />
                        </Zoom>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="singleProductDetails">
                            <h3>{product.foodsName}</h3>
                            <p><b>Price:</b> <i>{product.foodsPrice}</i></p>
                            <p><b>Description:</b> <i>{product.foodsDescription}</i></p>
                            <p><b>Type:</b> <i>{product.foodsType}</i></p>
                            <p><b>Stock:</b> <i>{product.foodsStockQty}</i></p>
                        </div>
                        <div className="buttonWrapper mb-3">
                            <span><Button className='btn btn-info'>Buy Now</Button>  <Button className='btn btn-warning'>Add Cart</Button></span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="deliveryOptions">
                            <span className="option"> <AiOutlineExclamationCircle /> Options</span>
                            <p className="option"><AiOutlineDollar /> Payment First</p>
                            <p className="option"><AiOutlineEuroCircle /> Admin Charge<span class="taka"></span></p>
                            <p className="option"><AiOutlineIssuesClose /> Requirement Available</p>
                            <span className="option returnsWarranty"><AiOutlineReload /> Return & Warranty</span>
                            <p className="option return mt-2"><AiOutlineCloseCircle /> Return Not Available</p>
                            <p className="option"><AiOutlineSafety /> Warranty Not Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="postMetaWrapper mb-3">
        <div className="container">
            <div className="row animate__animated animate__zoomIn">
                <div className="col-sm-3">
                    <div className="popularPost mt-4 ">
                        <h5>POPULAR POSTS</h5>
                        <hr/>
                        <div className="Post1 ">
                            <span><img width="60" height="60" src="https://raw.githubusercontent.com/MdRoki2020/roomfinder-project/main/images/post1.jpg" alt=""/> Nature</span>
                        </div>
                        <div className="post2 mt-3">
                            <span><img width="60" height="60" src="https://raw.githubusercontent.com/MdRoki2020/roomfinder-project/main/images/post2.jpg" alt=""/> Shopping for New Dress</span>
                        </div>
                        <div className="post3 mt-3">
                            <span><img width="60" height="60" src="https://raw.githubusercontent.com/MdRoki2020/roomfinder-project/main/images/post3.jpg" alt=""/> Breathtaking Places</span>
                        </div>
                        <div className="post4 mt-3">
                            <span><img width="60" height="60" src="https://raw.githubusercontent.com/MdRoki2020/roomfinder-project/main/images/post4.jpg" alt=""/> Fashion Trend</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="archive mt-4 ">
                        <h5>ARCHIVE</h5>
                        <hr/>
                        <ul>
                            <li><i className="fas fa-arrows-alt"></i>2022</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="categories mt-4 ">
                        <h5>CATEGORIES</h5>
                        <hr/>
                        <ul>
                            <li><i className="fas fa-arrows-alt"></i> Fruits And Vegetables</li>
                            <li><i className="fas fa-arrows-alt"></i> Electronics</li>
                            <li><i className="fas fa-arrows-alt"></i> Beauty Products</li>
                            <li><i className="fas fa-arrows-alt"></i> Beverages</li>
                            <li><i className="fas fa-arrows-alt"></i> Health Products</li>
                            <li><i className="fas fa-arrows-alt"></i> Cooking</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="meta mt-4 ">
                        <h5>META</h5>
                        <hr/>
                        <ul>
                            <li><i className="fas fa-arrows-alt"></i> Log in</li>
                            <li><i className="fas fa-arrows-alt"></i> Entries feed</li>
                            <li><i className="fas fa-arrows-alt"></i> Comments feed</li>
                            <li><i className="fas fa-arrows-alt"></i> WordPress.org</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ProductDetails
