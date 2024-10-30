package com.microservice.User_Service.external;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.microservice.User_Service.model.Cart;

@FeignClient(name = "CART-SERVICE")
public interface CartService {
    @GetMapping("/cart/{userid}")
    List<Cart> getCart(@PathVariable String userid); // Change to List<Cart>
}

