package com.microservice.User_Service.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cart {

    private String id;
    private String userid;
    private String productid;
    private String productname;
}
