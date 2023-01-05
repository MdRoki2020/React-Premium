import { React,useEffect,useState } from 'react'
import ReactPaginate from 'react-paginate';
import { ReadFood } from '../Api Request/ApiRequest';


const AllProducts = () => {

    const [users,setUsers]=useState([]);
    const [pageNumber,setPageNumber]=useState(0);

    const usersPerPage=18;
    const pagesVisited=pageNumber * usersPerPage
    const displayUsers=users.slice(pagesVisited,pagesVisited+usersPerPage)
    const pageCount=Math.ceil(users.length / usersPerPage);
    const changePage=({selected})=>{
      setPageNumber(selected);
    };

    useEffect(()=>{
      getFood();
    },[]);

    const getFood=()=>{
      ReadFood().then((data)=>{
        setUsers(data);
      })
    }

  return (
    <div className='mt-5'>
      <h1 className=''>All Product</h1>

      <div className='container'>
        <div className='row d-block d-lg-flex'>
        {
            displayUsers.map((post,index)=>
                <div key={index} className='col-md-2 d-block d-lg-flex mb-4'>
                    <div className='card text-center'>
                      <h5>{post.foodsName}</h5>
                      <p>{post.foodsDescription}</p>
                      <p>{post.foodsType}</p>
                      <p>{post.foodsPrice}</p>
                      <p>{post.foodsStockQty}</p>
                      <p>{post.createdDate}</p>
                    </div>
                </div>
            )
        }

        </div>
        <div className=''>
        <ReactPaginate 
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
        </div>

      </div>
    </div>
  )
}

export default AllProducts
