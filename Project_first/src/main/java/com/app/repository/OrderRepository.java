package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

//    Order findByOrderId(String orderId);
//
   Order findByUserId(Long userId);
}
