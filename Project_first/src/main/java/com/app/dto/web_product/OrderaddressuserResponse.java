package com.app.dto.web_product;

import com.app.dto.web_product.Address.GetAddressResponse;
import com.app.entity.Order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderaddressuserResponse {
	
	private GetUserResponse getUserResponse;

	private Order order;
	
	private GetAddressResponse getAddressResponse;

}
