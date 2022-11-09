import React, { Fragment, useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import { useSelector } from 'react-redux';
import { Delete, GetProductList, UpdateFood } from '../Api Request/ApiRequest';
import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";
import '../Style/MainDashboard.css'
import { ErrorToast } from '../helper/FormHelper';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'



const MainDashboard = () => {

    let navigate = useNavigate();

  let [searchKeyword,setSearchKeyword]=useState("0");
    let [perPage,setPerPage]=useState(5);

    useEffect(()=>{
        GetProductList(1,perPage,searchKeyword);
    },[])

    let ALLProduct=useSelector((state)=>(state.product.ALLProduct));
    let Total=useSelector((state)=>(state.product.Total));

    const handlePageClick = (event) => {
        GetProductList(event.selected+1,perPage,searchKeyword)
    };

    const perPageOnChange=(e)=>{
        setPerPage(parseInt(e.target.value))
        GetProductList(1,e.target.value,searchKeyword)
    }

    const searchKeywordOnChange=(e)=>{
        setSearchKeyword(e.target.value)
        if((e.target.value).length===0){
            setSearchKeyword("0")
            GetProductList(1,perPage,'0')
        }
    }

    const searchData=()=>{
        GetProductList(1,perPage,searchKeyword)
    }

    const UpdateItem=(id)=>{
          navigate("/updatefood/"+id);
      }

    const DeleteItem=(id)=>{
        Delete(id).then((data)=>{
            if(data===true){

                successMes();

            }else{
                ErrorToast('Something Went Wrong !');
            }
        })
    }


    const successMes=()=>{

        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            GetProductList(1,perPage,searchKeyword);
            swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
            )
        }
        })

    }

  return (
<Fragment>
<div className="container my-5">
    <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-6">
                              <h5>My Product List</h5>
                          </div>
                          <div className="col-2"> 
                              <select onChange={perPageOnChange}  className="form-control mx-2 form-select-sm form-select form-control-sm" >
                                  <option value="5">5 Per Page</option>
                                  <option value="10">10 Per Page</option>
                                  <option value="20">20 Per Page</option>
                                  <option value="30">30 Per Page</option>
                                  <option value="50">50 Per Page</option>
                                  <option value="100">100 Per Page</option>
                              </select>
                          </div>
                          <div className="col-4">
                              <div className="input-group mb-3">
                                  <input onChange={searchKeywordOnChange} type="text" className="form-control form-control-sm" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                  <button onClick={searchData} className="btn  btn-outline-primary btn-sm mb-0" type="button">Search</button>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-12">
                              <div className="table-responsive data-table">
                                  <table className="table ">
                                      <thead className="sticky-top bg-white">
                                      <tr>
                                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Foods</th>
                                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price</th>
                                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Stock</th>
                                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Added Date</th>
                                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      {
                                          ALLProduct.map((item,i)=>
                                              <tr>
                                                  <td>
                                                      <div className="d-flex px-2 py-1">
                                                          <div>
                                                              <img src={item.foodImage} className="avatar me-3" alt='' width="80" height="80"/>
                                                          </div>
                                                          <div className="d-flex flex-column justify-content-center">
                                                              <h6 className="mb-0  text-xs">{item.foodsName}</h6>
                                                              <p className="text-xs  text-secondary mb-0">{item.foodsDescription}</p>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>
                                                      <p className="text-xs font-weight-bold mb-0">{item.foodsType}</p>
                                                      <p className="text-xs  text-secondary mb-0">{item.foodsPrice} Taka </p>
                                                  </td >
                                                  <td>
                                                      <p className="badge  bg-success">{item.foodsStockQty}</p>
                                                  </td>
                                                  <td>
                                                      <span className="text-secondary text-xs font-weight-bold">{item.createdDate}</span>
                                                  </td>
                                                  <td>
                                                      <span onClick={UpdateItem.bind(this,item._id)} className='edit text-info'><AiOutlineEdit/></span>&nbsp; &nbsp; &nbsp; &nbsp;<span onClick={DeleteItem.bind(this,item._id)} className='delete text-danger'><AiOutlineDelete/></span>
                                                  </td>
                                              </tr>
                                          )
                                      }


                                      </tbody>
                                  </table>
                              </div>
                          </div>
                          <div className="col-12 mt-5">
                              <nav aria-label="Page navigation example">
                                  <ReactPaginate
                                      previousLabel="<"
                                      nextLabel=">"
                                      pageClassName="page-item"
                                      pageLinkClassName="page-link"
                                      previousClassName="page-item"
                                      previousLinkClassName="page-link"
                                      nextClassName="page-item"
                                      nextLinkClassName="page-link"
                                      breakLabel="..."
                                      breakClassName="page-item"
                                      breakLinkClassName="page-link"
                                      pageCount={Total/perPage}
                                      marginPagesDisplayed={2}
                                      pageRangeDisplayed={5}
                                      onPageChange={handlePageClick}
                                      containerClassName="pagination"
                                      activeClassName="active"
                                  />
                              </nav>
                          </div>
                      </div>
                  </div>
                </div>
            </div>

        </div>
    </div>
</div>
</Fragment>
  )

}

export default MainDashboard
