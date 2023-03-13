package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.web_product.GetUserResponse;
import com.app.dto.web_product.OrderaddressuserResponse;
import com.app.dto.web_product.Address.GetAddressResponse;
import com.app.dto.web_product.cart.CreateOrderRequest;
import com.app.dto.web_product.cart.CreateOrderResponse;
import com.app.dto.web_product.cart.PreviewOrderRequest;
import com.app.dto.web_product.cart.PreviewOrderResponse;
import com.app.entity.Order;
import com.app.service.AddressService;
import com.app.service.IUserService;
import com.app.service.OrderService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    
    @Autowired
    OrderService orderService;
    
    @Autowired
    IUserService userservice;
    
    @Autowired
    AddressService Addressservice;
    
    @PostMapping("/order")
    public ResponseEntity<CreateOrderResponse> createOrder(@RequestBody CreateOrderRequest createOrderRequest) {
   System.out.println(createOrderRequest.getUserName()+"ggg"+createOrderRequest.getAddressId());
        CreateOrderResponse createOrderResponse = orderService.createOrder(createOrderRequest);
        return ResponseEntity.ok(createOrderResponse);
    }

//    @GetMapping("/order/{orderId}")
//    public ResponseEntity<CreateOrderResponse> getOrderById(@PathVariable("orderId") String orderId) {
//
//        CreateOrderResponse createOrderResponse = orderService.getOrderById(orderId);
//        return ResponseEntity.ok(createOrderResponse);
//    }
//
//    @GetMapping("/order/myorders")
//    public ResponseEntity<List<CreateOrderResponse>> getMyOrders() {
//
//        List<CreateOrderResponse> createOrderResponse = orderService.getMyOrders();
//        return ResponseEntity.ok(createOrderResponse);
//    }
//
//    @GetMapping("/orders")
//    @PreAuthorize("hasAuthority('ADMIN_USER')")
//    public ResponseEntity<List<CreateOrderResponse>> getAllOrders() {
//        List<CreateOrderResponse> createOrderResponse = orderService.getAllOrders();
//        return ResponseEntity.ok(createOrderResponse);
//    }

    @PostMapping("/previewOrder")
    public ResponseEntity<PreviewOrderResponse> previewOrder(@RequestBody  PreviewOrderRequest previewOrderRequest) {

        PreviewOrderResponse previewOrderResponse = orderService.previewOrder(previewOrderRequest);

        return ResponseEntity.ok(previewOrderResponse);
    }
    
    @GetMapping("/orderdetails/{Username}")
    public ResponseEntity<?> orderdetails(@PathVariable  String  Username) {

    	GetUserResponse user=userservice.getUserByUserName(Username);
    	System.out.println("1");
        Order previewOrderResponse = orderService.getoder(user.getUserId());
        System.out.println("2");
        GetAddressResponse addressresp=Addressservice.findbyuserId(user.getUserId());

        return ResponseEntity.ok(new OrderaddressuserResponse(user, previewOrderResponse, addressresp));
    }
    
}
