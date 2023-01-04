import { React,useEffect,useState } from 'react'
import axios from 'axios'
import _ from 'lodash'

const pageSize=24;
const AllProducts = () => {

    const [posts,setPost]=useState([]);
    const [paginatedPosts,setpaginatedPosts]=useState();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            console.log(res.data);
            setPost(res.data);
            setpaginatedPosts(_(res.data).slice(0).take(pageSize).value());
        })
    },[]);

    const pageCount=posts ? Math.ceil(posts.length/pageSize) :0;
    if(pageCount ===1)return null;
    const pages=_.range(1,pageCount+1)
  return (
    <div className='mt-5'>
      <h1 className=''>All Product</h1>

      <div className='container'>
        <div className='row d-block d-lg-flex'>
        {
            paginatedPosts.map((post,index)=>
                <div key={index} className='col-md-2 d-block d-lg-flex mb-4'>
                    <div className='card text-center'>
                      <h5>userId:{post.title}</h5>
                      <p>UserId:{post.userId}</p>
                      <p>Id:{post.id}</p>
                      <p>Completed:{post.completed}</p>
                    </div>
                </div>
            )
        }

        <nav className='d-flex justify-content-center'>
            <ul className='pagination'>
                {
                    pages.map((page)=>(
                        <li className='page-link'>{page}</li>
                    ))
                }

            </ul>
        </nav>
        </div>
      </div>
    </div>
  )
}

export default AllProducts
