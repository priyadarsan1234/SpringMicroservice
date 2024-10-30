package com.microservice.User_Service.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.User_Service.model.User;
import com.microservice.User_Service.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User CreateUser(@RequestBody User user){
        return userService.CreateUser(user);
    }

    @GetMapping("/{id}")
    public Optional<User> find(@PathVariable String id){
        return userService.find(id);
    }

    @PostMapping("/update")
    public User update(@RequestBody User user){
        return userService.Update(user);
    }
}
