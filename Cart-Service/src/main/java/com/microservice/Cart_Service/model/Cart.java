package com.microservice.Cart_Service.model;

import java.math.BigDecimal; // Consider using BigDecimal for price

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
@Document(collection = "Cart")
public class Cart {
    @Id
    private String id;
    private String userid;
    private String name;
    private String color;
    private String brand;
    private String size;
    private BigDecimal price; // Change to BigDecimal
    private String category;
    private String imagePath;
    private String additionalimage1;
    private String additionalimage2;
    private String additionalimage3;
}