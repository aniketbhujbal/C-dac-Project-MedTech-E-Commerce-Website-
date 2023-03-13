package com.app.service;

import java.util.List;

import com.app.dto.web_product.cart.CreateOrderRequest;
import com.app.dto.web_product.cart.CreateOrderResponse;
import com.app.dto.web_product.cart.PreviewOrderRequest;
import com.app.dto.web_product.cart.PreviewOrderResponse;
import com.app.entity.Order;

public interface OrderService {

    CreateOrderResponse createOrder(CreateOrderRequest createOrderRequest);

    PreviewOrderResponse previewOrder(PreviewOrderRequest previewOrderRequest);

    CreateOrderResponse getOrder(String orderId);
//
//    List<CreateOrderResponse> getMyOrders();
//
//    List<CreateOrderResponse> getAllOrders();

	Order getoder(long userId);
}
