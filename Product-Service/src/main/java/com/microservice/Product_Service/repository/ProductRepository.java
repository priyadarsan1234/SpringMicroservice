package com.microservice.Product_Service.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.microservice.Product_Service.model.Product;

public interface ProductRepository extends MongoRepository<Product,String> {
    
    Optional<Product> findByName(String name);
    List<Product> findByCategory(String category);
}
