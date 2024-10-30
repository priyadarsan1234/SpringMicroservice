package com.microservice.Cart_Service.repository;

import java.util.*;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.microservice.Cart_Service.model.Cart;

public interface CartRepository extends MongoRepository<Cart, String> {
    
    List<Cart> findByUserid(String userid);
    Optional<Cart> findByUseridAndId(String userid, String id); // Corrected method name

    void deleteByUseridAndId(String userid, String id);
}
