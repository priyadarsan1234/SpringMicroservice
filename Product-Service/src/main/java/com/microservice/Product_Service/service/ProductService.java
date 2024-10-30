package com.microservice.Product_Service.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.Product_Service.model.Product;
import com.microservice.Product_Service.repository.ProductRepository;

@Service
public class ProductService {
    

    @Autowired
    private ProductRepository productRepository;


    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    public Optional<Product> getProductByName(String name) {
        return productRepository.findByName(name);
    }
    public Optional<Product> getProductByid(String id) {
        return productRepository.findById(id);
    }

    public List<Product> getProductByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public List<Product> getall(){
        return productRepository.findAll();
    }
}
