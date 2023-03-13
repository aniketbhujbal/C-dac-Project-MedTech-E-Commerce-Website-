import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import UserServices from '../service/UserServices';
import Footer from './Footer'
import PageRouter from './PageRouter'
import Product from './Product'


function ProductlistbyCategory() {

  let [product , setProduct] =useState([{}]);
  const location = useLocation();
  let statePassed = location.state;

  useEffect(() => {
    console.log(statePassed+":id11")
    UserServices.getAllProductycategory(statePassed).then((resp) => {
      console.log(resp.data[0].email+"inside home request")
        setProduct(resp.data)
    }).catch((err) => {
        console.log("Employee Profile Image Err", err)
    })
   
}, [statePassed])

  return (
        
    <div >
        <PageRouter></PageRouter>
        <hr></hr>
        <div style={{display:"flex"}}>
        <p style={{textAlign:"left",marginLeft:"20px"}}>Category:</p>
        {
            statePassed==="1"?
        <p>&nbsp; Consumable & Disposable</p>:statePassed==="2"?
        <p>&nbsp; Dental</p>:statePassed==="3"?
        <p>&nbsp; Medical Device & Equipment</p>:""
        }
       </div>
      
        <div className=''>
          <main className='col-lg-10' style={{margin:"25px 50px 75px 100px"}}>
            <div className='row'>
            {/* <div className='col-lg-2 col-md-6 col-sm-6'></div> */}
        {
          product.map((p)=>{
            return (
              <div className='col-lg-2 col-md-6 col-sm-6'>
                <Product Product={p}></Product>
              </div>
            )
          })

          }
           {/* <div className='col-lg-1 col-md-6 col-sm-6'></div> */}
          </div>
        </main>
       </div>
    </div>
  )
}

export default ProductlistbyCategory