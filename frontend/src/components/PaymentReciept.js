import React, { useState ,useEffect} from 'react'
import { Next } from 'react-bootstrap/esm/PageItem'
import { Link, useNavigate } from 'react-router-dom'
import "../css/reciept.css"
import PaymentRecieptService from '../service/PaymentRecieptService'
import VendorServices from '../service/VendorServices'
import Orderitemsforpayentslip from './Orderitemsforpayentslip'
function PaymentReciept() {
	const navigate =useNavigate();
    let[userDetails,setUserDetails]=useState({})
    let[oderDetails,setOderDetails]=useState({})
    let[addressDetails,setAddressDetails]=useState({})
    let[itemsDetails,setItemsDetails]=useState([{}])
    let[product,setProduct]=useState([{}])
    useEffect(() => {
      PaymentRecieptService.getReciptInfo().then(
        (res)=>{
            console.log(res.data.getUserResponse.userId)
            setUserDetails(res.data.getUserResponse);
            setOderDetails(res.data.order)
            setItemsDetails(res.data.order.orderItems)
            console.log(res.data.order.orderItems)
            setAddressDetails(res.data.getAddressResponse)
           
        }
      )
    }, [])
    useEffect(() => {
        
         
    
    },[])

	const nextpage=()=>{
		window.print();
	}
    
       
  return (
    <div className='recieptBody'>
		<hr></hr>
        <div class="container">
<div class="row">
					<div class="col-xs-12">
						<div class="grid invoice">
							<div class="grid-body">
								<div class="invoice-title">
									
									<div class="row">
										<div class="col-xs-12">
											<br></br>
											<h2>Invoice<br/><br></br>
											<span class="small">Order {oderDetails.orderId}</span></h2>
										</div>
									</div>
								</div>
								<hr/>
								<div class="row">
									<div class="col-xs-6 col-lg-4">
										<address>
											<strong>Customer Details:</strong><br/>
											<strong>UserName:</strong> {userDetails.userName}<br/>
											{userDetails.firstName}&nbsp;{userDetails.lastName}<br/>
											{userDetails.email}<br/>
											
										</address>
									</div>
									<div class="col-xs-6 col-lg-4 text-right" style={{marginLeft:"420px"}}>
										<address>
											<strong>Shipped To:</strong><br/>
											{addressDetails.addressLine1}<br/>
											{addressDetails.city},<br/>
											{addressDetails.state}, {addressDetails.country}<br/>
											<abbr title="Phone"></abbr> (+91) {addressDetails.phone}
										</address>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<h3>ORDER SUMMARY</h3>
										<table class="table table-striped">
											<thead>
												<tr class="line">
													<td><strong>#</strong></td>
													<td class="text-center"><strong>Order Items</strong></td>
													<td class="text-center"><strong>QTY</strong></td>
													<td class="text-right"><strong>RATE</strong></td>
													<td class="text-right"><strong>SUBTOTAL</strong></td>
												</tr>
											</thead>
                                                {
                                                    itemsDetails.map((p)=>{
                                                        return(    
                                                        <Orderitemsforpayentslip items={p}></Orderitemsforpayentslip>
														
                                                )
                                                                                          })
                                                }
											
											<tr>
													<td colspan="3" >
													</td><td class="text-right"><strong>Total</strong></td>
													<td class="text-right"><strong>Rs.{oderDetails.totalOrderPrice}</strong></td>
												</tr>
										</table>
										
		 
		 <button type="button" class="btn btn-secondary btn-rounded" onClick={nextpage} style={{marginLeft:"200px"}}>Print</button>
		 &nbsp;&nbsp;
		 <Link to={`/regardpage`}>
         <button type="button" class="btn btn-secondary btn-rounded"  >NEXT</button>
         </Link>
         <h1></h1>
									</div>									
								</div>
								
							</div>
						</div>
					</div>
					
				</div>
</div>
    </div>
  )
}

export default PaymentReciept