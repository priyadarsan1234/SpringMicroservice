package com.microservice.Product_Service.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.Product_Service.model.Product;
import com.microservice.Product_Service.service.ProductService;


@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    

    @Autowired
    private ProductService productService;

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        return productService.createProduct(product);
    }

    @GetMapping("/name/{name}")
    public Optional<Product> findByname(@PathVariable String name){
        return productService.getProductByName(name);
    }
    @GetMapping("/id/{id}")
    public Optional<Product> findByid(@PathVariable String id){
        return productService.getProductByid(id);
    }

    @GetMapping("/category/{category}")
    public List<Product> findBycategory(@PathVariable String category){
        return productService.getProductByCategory(category);
    }

    @GetMapping
    public List<Product> getall(){
        return productService.getall();
    }
}
