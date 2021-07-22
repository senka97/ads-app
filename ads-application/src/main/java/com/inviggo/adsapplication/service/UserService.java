package com.inviggo.adsapplication.service;

import com.inviggo.adsapplication.model.User;
import com.inviggo.adsapplication.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class UserService {

    private UserRepository repository;

    public UserService(UserRepository repository){
        this.repository = repository;
    }

    public User findById(Long id){
        return repository.findById(id).orElseThrow(() ->
                new EntityNotFoundException(String.format("User with id %d not found", id)));
    }
}
