import React , {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import UserServices from '../service/UserServices';
import VendorServices from '../service/VendorServices';

function Orderitemsforpayentslip(props) {
const [product, setproduct] = useState({})
    useEffect(() => {
        console.log(props.items.productId+"::id")
      VendorServices.getProductById(props.items.productId).then((rsep)=>{
        console.log(rsep.data)
       setproduct(rsep.data)
      })
    },[props])
    

  return (
    
    <tr>  
	<td></td>
	<td><strong>{product.productName}</strong><br/>{product.description}</td>
	<td class="text-center">{props.items.quantity}</td>
    <td class="text-center">Rs.{product.price}</td>
	<td class="text-right">Rs.{product.price*props.items.quantity}</td>
    </tr>
   
  );
    
  }
export default Orderitemsforpayentslip;