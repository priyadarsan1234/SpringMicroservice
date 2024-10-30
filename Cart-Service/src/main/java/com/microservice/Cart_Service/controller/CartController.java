package com.microservice.Cart_Service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus; // For HTTP status codes
import org.springframework.http.ResponseEntity; // For ResponseEntity
import org.springframework.web.bind.annotation.*;

import com.microservice.Cart_Service.model.Cart;
import com.microservice.Cart_Service.service.CartService;

@RestController
@RequestMapping("cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping
    public ResponseEntity<Cart> createcart(@RequestBody Cart cart) {
        Cart createdCart = cartService.creatcart(cart);
        return new ResponseEntity<>(createdCart, HttpStatus.CREATED); // Return 201 Created
    }

    @GetMapping("/{userid}")
    public List<Cart> getCartByUserId(@PathVariable String userid) {
        return cartService.getCartByUserId(userid);
    }
    @DeleteMapping("/{userid}/{id}") // Change to DELETE
    public ResponseEntity<Void> removeFromCart(@PathVariable String userid, @PathVariable String id) {
        boolean removed = cartService.remove(userid, id);
        if (removed) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Return 204 No Content
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return 404 Not Found if not found
    }
}