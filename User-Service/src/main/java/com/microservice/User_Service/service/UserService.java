package com.microservice.User_Service.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.microservice.User_Service.external.CartService;
import com.microservice.User_Service.model.Cart;
import com.microservice.User_Service.model.User;
import com.microservice.User_Service.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartService cartService;

    public User CreateUser(User user){
        return userRepository.save(user);
    }

    public Optional<User> find(String userid) {
        List<Cart> carts = cartService.getCart(userid); // Change to List<Cart>
        Optional<User> userOptional = userRepository.findById(userid);
    
        if (userOptional.isPresent()) {
            User user = userOptional.get();
    
            if (user.getCarts() == null) {
                user.setCarts(new ArrayList<>());
            }
    
            if (carts != null) {
                user.getCarts().addAll(carts); // Add all carts to the user's cart list
            }
            return Optional.of(user);
        }
        return Optional.empty();
    }
    


   

    public User Update(User user){
        Optional<User> existing = userRepository.findById(user.getId());
        User user1=existing.get();
        user1.setName(user.getName());
        user1.setPhone(user.getPhone());

        return userRepository.save(user1);
    }
}
