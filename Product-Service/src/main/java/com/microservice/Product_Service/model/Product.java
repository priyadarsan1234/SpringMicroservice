package com.microservice.Product_Service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Product")
public class Product {

    @Id
    private String id;
    private String name;
    private String color;
    private String brand;
    private String size;
    private String price;
    private String category;
    private String imagePath;
    private String additionalimage1;
    private String additionalimage2;
    private String additionalimage3;
}
