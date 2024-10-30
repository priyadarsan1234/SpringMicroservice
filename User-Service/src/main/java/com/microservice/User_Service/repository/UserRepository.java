package com.microservice.User_Service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.microservice.User_Service.model.User;

public interface UserRepository extends MongoRepository<User, String> {

}
