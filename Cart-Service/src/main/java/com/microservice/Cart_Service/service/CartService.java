package com.microservice.Cart_Service.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.Cart_Service.model.Cart;
import com.microservice.Cart_Service.repository.CartRepository;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public Cart creatcart(Cart cart) {
        return cartRepository.save(cart);
    }

    public List<Cart> findall() {
        return cartRepository.findAll();
    }

    public List<Cart> getCartByUserId(String userid) {
        return cartRepository.findByUserid(userid);
    }

    public boolean remove(String userid, String id) {
        Optional<Cart> cartItem = cartRepository.findByUseridAndId(userid, id);
        if (cartItem.isPresent()) {
            cartRepository.deleteByUseridAndId(userid, id);
            return true; // Indicate success
        }
        return false; // Indicate failure
    }
}